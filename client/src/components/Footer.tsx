/**
 * Footer — Modern Slate design
 * Dark slate background, gold accents, clean links.
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.18 0.018 250)", color: "oklch(0.75 0.008 250)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
              className="w-9 h-9 flex items-center justify-center rounded-sm"
              style={{ background: "oklch(0.78 0.12 85)" }}
            >
              <svg width="20" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 3.5C5.4 2.8 7.9 3.3 10.8 5V17C7.9 15.3 5.4 14.8 2.5 15.5V3.5Z" stroke="oklch(0.22 0.018 250)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 3.5C16.6 2.8 14.1 3.3 11.2 5V17C14.1 15.3 16.6 14.8 19.5 15.5V3.5Z" stroke="oklch(0.22 0.018 250)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "oklch(0.97 0.005 80)", fontSize: "1rem" }}>
                Blue Book Business
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.62 0.01 250)" }}>
              Expert financial services for individuals, entrepreneurs, and growing businesses who deserve big-firm quality.
            </p>
            <div
              className="h-0.5 w-10 rounded-full"
              style={{ background: "oklch(0.78 0.12 85)" }}
            />
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Bookkeeping", href: "/bookkeeping" },
                { label: "Accounting", href: "/accounting" },
                { label: "Payroll", href: "/other-services" },
                { label: "Filing", href: "/other-services" },
                { label: "Personal Taxes", href: "/taxes" },
                { label: "Personal & Business Taxes", href: "/taxes" },
                { label: "Corporate Taxes", href: "/taxes" },
              ].map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.62 0.01 250)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.97 0.005 80)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.62 0.01 250)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Request a Quote", href: "/contact" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.62 0.01 250)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.97 0.005 80)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.62 0.01 250)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.12 85)" }} />
                <span className="text-sm" style={{ color: "oklch(0.62 0.01 250)" }}>
                  info@bluebookbusiness.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.12 85)" }} />
                <span className="text-sm" style={{ color: "oklch(0.62 0.01 250)" }}>
                  587-414-8313
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.12 85)" }} />
                <span className="text-sm" style={{ color: "oklch(0.62 0.01 250)" }}>
                  Available Remotely — Nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid oklch(0.30 0.015 250)", color: "oklch(0.48 0.01 250)" }}
        >
          <span>© {new Date().getFullYear()} Blue Book Business. All rights reserved.</span>
          <span>Designed with precision. Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
