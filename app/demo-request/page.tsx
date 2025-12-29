"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header, Footer, Button } from "@/components";
import { siteConfig } from "@/config";

type FormData = {
  name: string;
  email: string;
  organization: string;
  role: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function DemoRequestPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    role: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch {
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Request a Demo
            </h1>
            <p className="text-lg text-slate-600">
              See a live portal, the admin upload flow, and how your exports map
              into a clear public experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-slate-200 text-center">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Prefer email?
            </h2>
            <p className="text-slate-600 mb-4">
              Reach us at <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent-600 hover:text-accent-700 font-medium">{siteConfig.contactEmail}</a>, or
              fill out the form below.
            </p>
            <Button href={siteConfig.demoUrl} variant="outline">
              View the sample portal first
            </Button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors ${
                  errors.name ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="John Smith"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors ${
                  errors.email ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="john@city.gov"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Organization *
              </label>
              <input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors ${
                  errors.organization ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="City of Springfield"
              />
              {errors.organization && (
                <p className="mt-1 text-sm text-red-500">{errors.organization}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Your Role *
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors ${
                  errors.role ? "border-red-500" : "border-slate-300"
                }`}
              >
                <option value="">Select your role</option>
                <option value="City Manager">City Manager</option>
                <option value="County Administrator">County Administrator</option>
                <option value="Finance Director">Finance Director</option>
                <option value="Budget Analyst">Budget Analyst</option>
                <option value="IT Director">IT Director</option>
                <option value="Elected Official">Elected Official</option>
                <option value="Other">Other</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors resize-none"
                placeholder="What system do you export from (Tyler, Munis, etc.) and which modules matter most (Budget, Transactions, Revenues)?"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? "Submitting..." : "Send request"}
            </Button>

            <p className="text-sm text-slate-500 text-center">
              We typically reply the same day.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}