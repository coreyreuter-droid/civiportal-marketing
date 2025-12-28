import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, organization, role, phone, message } = body;

    // Basic validation
    if (!name || !email || !organization || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the demo request (in production, you'd save to a database or send an email)
    console.log("Demo Request Received:", {
      name,
      email,
      organization,
      role,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, you might:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Add to a CRM
    // 4. Send to a webhook

    return NextResponse.json(
      { success: true, message: "Demo request received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
