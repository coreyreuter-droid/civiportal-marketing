import { NextResponse } from "next/server";

type DemoRequestPayload = {
  name?: string;
  email?: string;
  organization?: string;
  role?: string;
  phone?: string;
  message?: string;
  // Honeypot field: real users should leave blank
  website?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // per IP per window

declare global {
  // eslint-disable-next-line no-var
  var __demoRequestRateLimit: Map<string, { count: number; resetAt: number }> | undefined;
}

function getStore() {
  if (!globalThis.__demoRequestRateLimit) {
    globalThis.__demoRequestRateLimit = new Map();
  }
  return globalThis.__demoRequestRateLimit;
}

function getClientIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for") || "";
  const xr = req.headers.get("x-real-ip") || "";
  const ip = (xf.split(",")[0] || xr || "").trim();
  return ip || "unknown";
}

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(req: Request) {
  let body: DemoRequestPayload | null = null;
  try {
    body = (await req.json()) as DemoRequestPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: if filled, pretend success (don’t help spammers tune)
  if (body?.website && String(body.website).trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const organization = String(body?.organization ?? "").trim();
  const role = String(body?.role ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || !email || !organization || !role) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 }
    );
  }

  // Basic rate limit
  const ip = getClientIp(req);
  const store = getStore();
  const now = Date.now();
  const current = store.get(ip);

  if (!current || current.resetAt <= now) {
    store.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  } else {
    current.count += 1;
    store.set(ip, current);
    if (current.count > RATE_LIMIT_MAX) {
      // Pretend success to avoid giving spammers feedback
      return NextResponse.json({ ok: true });
    }
  }

  const to = process.env.DEMO_REQUEST_TO_EMAIL || "hello@civiportal.com";
  const from = process.env.RESEND_FROM || "CiviPortal <hello@civiportal.com>";
  const resendKey = process.env.RESEND_API_KEY;

  const subject = `Demo request: ${organization} (${name})`;

  const text = [
    "New demo request:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization}`,
    `Role: ${role}`,
    phone ? `Phone: ${phone}` : "",
    message ? `Message: ${message}` : "",
    "",
    `IP: ${ip}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (!resendKey) {
    // Don’t fail the request if email isn’t configured yet.
    console.log("[demo-request] RESEND_API_KEY not set. Payload:", {
      name,
      email,
      organization,
      role,
      phone,
      message,
      ip,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        text,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => "");
      console.error("[demo-request] Resend error:", resp.status, errText);
      // Return ok=true to avoid user-facing failures; you still want the lead.
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[demo-request] Unexpected error:", e);
    return NextResponse.json({ ok: true });
  }
}
