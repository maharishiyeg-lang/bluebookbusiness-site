/**
 * Taxes Page — Modern Slate design
 */
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Shield, Clock, DollarSign, Users, Building } from "lucide-react";
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

const taxServices = [
  { icon: Users, title: "Personal Taxes", desc: "Accurate individual returns for employees, investors, and families, including T4 income and careful deduction review." },
  { icon: Building, title: "Personal & Business Taxes", desc: "Integrated preparation for self-employed professionals and owner-operated businesses, including T4A and T5018 information where applicable." },
  { icon: FileText, title: "Corporate Taxes", desc: "Careful preparation and organized tax support for corporations and established business entities." },
  { icon: DollarSign, title: "Deduction Review", desc: "Relevant deductions identified and documented so every eligible opportunity is considered." },
  { icon: Clock, title: "Year-Round Tax Planning", desc: "Quarterly estimates, proactive planning, and clear advice — not just April support." },
  { icon: Shield, title: "Prior-Year Filing Help", desc: "Behind on filing? Get caught up with an organized, step-by-step plan for your records." },
];

const faqs = [
  { q: "When should I start preparing for taxes?", a: "Year-round. The best tax outcomes come from planning throughout the year — not scrambling in April. I offer quarterly check-ins to keep you on track." },
  { q: "What documents do I need to provide?", a: "Typically: T4 and T4A slips, T5018 information where applicable, your prior-year return, deduction records, and any investment or property documents. I'll send you a complete checklist after we connect." },
  { q: "Do you handle self-employed or freelance taxes?", a: "Absolutely. Self-employment taxes, home office deductions, business expenses — it's a specialty. Many freelancers are surprised how much they can deduct." },
  { q: "How do I send my documents securely?", a: "I use a secure, encrypted client portal for all document sharing. No emailing sensitive files back and forth." },
];

export default function Taxes() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.005 80)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/manus-storage/hero-taxes_41284fde.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.018 250 / 0.97) 60%, oklch(0.22 0.018 250 / 0.7) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Tax Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5 max-w-2xl" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
            Tax season,
            <span style={{ color: "oklch(0.78 0.12 85)" }}> stress-free.</span>
          </h1>
          <p className="text-lg max-w-xl mb-8" style={{ color: "oklch(0.72 0.01 250)", fontFamily: "var(--font-body)" }}>
            Personal, personal-business, and corporate tax preparation with a clear process, careful records, and year-round support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
              style={{ background: "oklch(0.78 0.12 85)", color: "oklch(0.22 0.018 250)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.08 85)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.78 0.12 85)")}
            >
              Get your taxes done right <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "oklch(0.97 0.005 80)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* Tax Services */}
      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container">
          <FadeSection className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>What's Covered</span>
            </div>
            <h2 className="text-4xl font-bold gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
              Tax services for every stage and structure.
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <FadeSection key={svc.title} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div
                    className="p-7 rounded-lg transition-all duration-300"
                    style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.008 250)" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "oklch(0.78 0.12 85)"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 12px 30px oklch(0.22 0.018 250 / 0.08)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "oklch(0.88 0.008 250)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-4" style={{ background: "oklch(0.78 0.12 85 / 0.12)" }}>
                      <Icon size={20} style={{ color: "oklch(0.78 0.12 85)" }} />
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>{svc.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}>{svc.desc}</p>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tax savings highlight */}
      <section className="py-20" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="container">
          <FadeSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              {[
                { value: "$2M+", label: "Total Tax Savings Found for Clients" },
                { value: "500+", label: "Returns Filed Successfully" },
                { value: "Canada", label: "Canadian Tax-Focused Support" },
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-lg" style={{ background: "oklch(0.27 0.016 250)", border: "1px solid oklch(0.35 0.012 250)" }}>
                  <div className="text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.78 0.12 85)" }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container max-w-3xl">
          <FadeSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>FAQ</span>
            </div>
            <h2 className="text-4xl font-bold gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
              Common questions.
            </h2>
          </FadeSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeSection key={faq.q} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="p-6 rounded-lg" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.008 250)" }}>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}>{faq.a}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Get Started</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
                Let's make your tax filing feel manageable.
              </h2>
              <p className="text-base leading-relaxed mt-6" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>
                Reach out today and I'll send you a document checklist and a flat-rate quote. No hourly billing, no surprises.
              </p>
              <div className="mt-8 space-y-3">
                {["$100 consultation fee waived with a signed working contract", "Flat-rate pricing quoted upfront", "Secure document portal", "Fast turnaround — most returns in 5–7 days"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={14} style={{ color: "oklch(0.78 0.12 85)" }} />
                    <span className="text-sm" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeSection>
            <FadeSection style={{ transitionDelay: "100ms" }}>
              <ContactForm service="taxes" dark={true} />
            </FadeSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
