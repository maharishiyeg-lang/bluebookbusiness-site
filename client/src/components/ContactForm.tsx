/**
 * ContactForm — reusable contact/quote form
 * Dark slate background, gold-bordered inputs.
 */
import { useState } from "react";
import { Send } from "lucide-react";
import { notifyBlueBook } from "@/components/BlueBookNotification";

interface ContactFormProps {
  service?: string;
  dark?: boolean;
}

export default function ContactForm({ service = "", dark = true }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: service,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      notifyBlueBook(
        "error",
        "A few details are still needed.",
        "Please add your name, email address, and a short note about what you need."
      );
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Website enquiry${form.service ? ` — ${form.service}` : ""}`);
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.service ? `Service: ${form.service}` : "",
      "",
      "Message:",
      form.message,
    ].filter(Boolean).join("\n"));
    window.location.href = `mailto:info@bluebookbusiness.com?subject=${subject}&body=${body}`;
    setSubmitting(false);
    notifyBlueBook(
      "success",
      "Your email app is ready.",
      "Review the pre-filled message and send it when you are ready."
    );
    setForm({ name: "", email: "", phone: "", service: service, message: "" });
  };

  const bg = dark ? "oklch(0.27 0.016 250)" : "oklch(1 0 0)";
  const inputBg = dark ? "oklch(0.22 0.018 250)" : "oklch(0.97 0.005 80)";
  const inputBorder = dark ? "oklch(0.38 0.012 250)" : "oklch(0.88 0.008 250)";
  const labelColor = dark ? "oklch(0.78 0.12 85)" : "oklch(0.30 0.015 250)";
  const textColor = dark ? "oklch(0.92 0.005 80)" : "oklch(0.22 0.018 250)";
  const placeholderColor = dark ? "oklch(0.50 0.01 250)" : "oklch(0.65 0.01 250)";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-8"
      style={{ background: bg, border: `1px solid ${inputBorder}` }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: labelColor, fontFamily: "var(--font-body)" }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
            className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all duration-200"
            style={{
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontFamily: "var(--font-body)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.12 85)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: labelColor, fontFamily: "var(--font-body)" }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
            className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all duration-200"
            style={{
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontFamily: "var(--font-body)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.12 85)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: labelColor, fontFamily: "var(--font-body)" }}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all duration-200"
            style={{
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontFamily: "var(--font-body)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.12 85)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: labelColor, fontFamily: "var(--font-body)" }}>
            Service Needed
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all duration-200 appearance-none"
            style={{
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: form.service ? textColor : placeholderColor,
              fontFamily: "var(--font-body)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.12 85)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
          >
            <option value="">Select a service...</option>
            <option value="bookkeeping">Bookkeeping</option>
            <option value="accounting">Accounting</option>
            <option value="payroll">Payroll</option>
            <option value="filing">Filing</option>
            <option value="personal-taxes">Personal Taxes</option>
            <option value="personal-business-taxes">Personal &amp; Business Taxes</option>
            <option value="corporate-taxes">Corporate Taxes</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: labelColor, fontFamily: "var(--font-body)" }}>
            Tell Me About Your Needs *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your business and what you're looking for..."
            required
            rows={4}
            className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all duration-200 resize-none"
            style={{
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontFamily: "var(--font-body)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.12 85)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95 disabled:opacity-60"
        style={{
          background: "oklch(0.78 0.12 85)",
          color: "oklch(0.22 0.018 250)",
          fontFamily: "var(--font-body)",
        }}
        onMouseEnter={(e) => { if (!submitting) (e.currentTarget as HTMLElement).style.background = "oklch(0.88 0.08 85)"; }}
        onMouseLeave={(e) => { if (!submitting) (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.12 85)"; }}
      >
        <Send size={15} />
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
