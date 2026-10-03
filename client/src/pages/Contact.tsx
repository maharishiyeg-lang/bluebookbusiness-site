/**
 * Contact Page — Modern Slate design
 */
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

function useFadeUp(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function FadeSection({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeUp(ref as React.RefObject<Element>);
  return <div ref={ref} className={`fade-up ${className}`} style={style}>{children}</div>;
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "bluebookbusiness@gmail.com", sub: "Response within 1 business day" },
  { icon: Phone, label: "Phone", value: "587-414-8313", sub: "Mon–Fri, 9am–6pm EST" },
  { icon: MapPin, label: "Location", value: "Remote — Nationwide", sub: "Serving clients across the US" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 9am–6pm", sub: "Sat: By appointment" },
];

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.005 80)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Get In Touch</span>
            <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
            Let's talk about
            <span style={{ color: "oklch(0.78 0.12 85)" }}> your business.</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.72 0.01 250)", fontFamily: "var(--font-body)" }}>
            A $100 consultation fee applies. If you sign a working contract during the meeting, the fee is waived; otherwise, the consultation will be invoiced.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "oklch(0.97 0.005 80)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* Contact Info + Form */}
      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <FadeSection>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
                  Contact Information
                </h2>
                <div className="mt-8 space-y-5">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex gap-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-sm shrink-0" style={{ background: "oklch(0.78 0.12 85 / 0.12)" }}>
                          <Icon size={18} style={{ color: "oklch(0.78 0.12 85)" }} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>{info.label}</div>
                          <div className="text-sm font-medium" style={{ color: "oklch(0.22 0.018 250)", fontFamily: "var(--font-body)" }}>{info.value}</div>
                          <div className="text-xs" style={{ color: "oklch(0.55 0.012 250)", fontFamily: "var(--font-body)" }}>{info.sub}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Services quick links */}
                <div className="pt-6 border-t" style={{ borderColor: "oklch(0.88 0.008 250)" }}>
                  <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Services</h3>
                  <div className="space-y-2">
                    {[
                      { label: "Bookkeeping", href: "/bookkeeping" },
                      { label: "Accounting", href: "/accounting" },
                      { label: "Payroll", href: "/other-services" },
                      { label: "Filing", href: "/other-services" },
                      { label: "Personal Taxes", href: "/taxes" },
                      { label: "Personal & Business Taxes", href: "/taxes" },
                      { label: "Corporate Taxes", href: "/taxes" },
                    ].map((link) => (
                      <Link
                        key={link.label + link.href}
                        href={link.href}
                        className="block text-sm transition-colors duration-200"
                        style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.78 0.12 85)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.52 0.015 250)")}
                      >
                        → {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>

            {/* Form */}
            <FadeSection className="lg:col-span-2" style={{ transitionDelay: "100ms" }}>
              <h2 className="text-2xl font-bold mb-6 gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
                Send a Message
              </h2>
              <div className="mt-8">
                <ContactForm dark={false} />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* FAQ quick strip */}
      <section className="py-20" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="container">
          <FadeSection className="mb-10">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
              Before you reach out
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { q: "How does the consultation fee work?", a: "The consultation fee is $100. If you sign a working contract during the consultation, the fee is waived. If no contract is signed, a $100 invoice will be issued." },
              { q: "How quickly will you respond?", a: "Within 1 business day, always. Usually much faster. I take responsiveness seriously." },
              { q: "Do you work with new businesses?", a: "Absolutely. Whether you're just starting out or have been running for years, I can help you get your finances in order." },
            ].map((item, i) => (
              <FadeSection key={item.q} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="p-6 rounded-lg" style={{ background: "oklch(0.27 0.016 250)", border: "1px solid oklch(0.35 0.012 250)" }}>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>{item.a}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
