/**
 * Bookkeeping Page — Modern Slate design
 */
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BookOpen, TrendingUp, FileCheck, Clock, Shield, BarChart3 } from "lucide-react";
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

const features = [
  { icon: BookOpen, title: "Monthly Reconciliation", desc: "Every transaction matched, every account balanced — on time, every month." },
  { icon: TrendingUp, title: "Expense Tracking", desc: "Categorized expenses so you see exactly where your money goes." },
  { icon: FileCheck, title: "Financial Reports", desc: "Clean P&L, balance sheets, and cash flow statements ready when you need them." },
  { icon: Clock, title: "Payroll Support", desc: "Accurate payroll records and reports to keep your team and your compliance on track." },
  { icon: Shield, title: "Audit-Ready Records", desc: "Organized, documented books that hold up to scrutiny — always." },
  { icon: BarChart3, title: "Year-End Prep", desc: "Books closed cleanly so tax season is smooth and stress-free." },
];

const process = [
  { num: "01", title: "Discovery Call", desc: "We review your current records, tools, and goals in a consultation. The $100 fee is waived when a working contract is signed during the meeting." },
  { num: "02", title: "Setup & Cleanup", desc: "I organize your chart of accounts, import historical data, and clean up any backlog." },
  { num: "03", title: "Monthly Maintenance", desc: "Ongoing reconciliation, categorization, and reporting delivered on a set schedule." },
  { num: "04", title: "Review & Advise", desc: "Monthly check-in to review your numbers and flag anything that needs attention." },
];

export default function Bookkeeping() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.005 80)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: "oklch(0.22 0.018 250)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/manus-storage/hero-bookkeeping_a31b8d02.jpg')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.018 250 / 0.97) 60%, oklch(0.22 0.018 250 / 0.7) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>
              Financial Services
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}
          >
            Bookkeeping that
            <span style={{ color: "oklch(0.78 0.12 85)" }}> keeps you moving.</span>
          </h1>
          <p
            className="text-lg max-w-xl mb-8"
            style={{ color: "oklch(0.72 0.01 250)", fontFamily: "var(--font-body)" }}
          >
            Accurate, timely bookkeeping so you can focus on running your business — not chasing receipts. Monthly packages for every stage of growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
            style={{ background: "oklch(0.78 0.12 85)", color: "oklch(0.22 0.018 250)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.08 85)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.78 0.12 85)")}
          >
            Start with a free books review <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "oklch(0.97 0.005 80)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* Features */}
      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container">
          <FadeSection className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>What's Included</span>
            </div>
            <h2 className="text-4xl font-bold gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
              Everything your books need.
            </h2>
          </FadeSection>
          {/* Signature slate feature card */}
          <FadeSection className="mb-6">
            <div className="p-7 rounded-lg flex items-center gap-6" style={{ background: "oklch(0.22 0.018 250)", border: "2px solid oklch(0.78 0.12 85 / 0.4)" }}>
              <div className="shrink-0">
                <span className="text-6xl font-bold" style={{ fontFamily: "var(--font-mono)", color: "oklch(0.78 0.12 85)", opacity: 0.7 }}>∑</span>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>The Blue Book Business Promise</div>
                <div className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>Every number checked. Every month. No exceptions.</div>
                <div className="text-sm" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>Your books are reconciled, categorized, and delivered on a fixed schedule — so you always know exactly where your business stands.</div>
              </div>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeSection key={f.title} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div
                    className="p-7 rounded-lg transition-all duration-300"
                    style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.008 250)" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "oklch(0.78 0.12 85)"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 12px 30px oklch(0.22 0.018 250 / 0.08)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "oklch(0.88 0.008 250)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-4" style={{ background: "oklch(0.78 0.12 85 / 0.12)" }}>
                      <Icon size={20} style={{ color: "oklch(0.78 0.12 85)" }} />
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}>{f.desc}</p>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="container">
          <FadeSection className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>How It Works</span>
            </div>
            <h2 className="text-4xl font-bold gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
              Simple, clear process.
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <FadeSection key={step.num} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative p-7 rounded-lg" style={{ background: "oklch(0.27 0.016 250)", border: "1px solid oklch(0.35 0.012 250)" }}>
                  <span className="block text-5xl font-bold mb-4 select-none" style={{ fontFamily: "var(--font-mono)", color: "oklch(0.78 0.12 85)", opacity: 0.6 }}>{step.num}</span>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.62 0.01 250)", fontFamily: "var(--font-body)" }}>{step.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container">
          <FadeSection className="mb-14 text-center">
            <h2 className="text-4xl font-bold gold-rule-center" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
              Transparent pricing.
            </h2>
            <p className="mt-6 text-base max-w-lg mx-auto" style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}>
              Flat monthly rates — no hourly surprises. Choose the package that fits your business.
            </p>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Starter", price: "From $199/mo", features: ["Up to 75 transactions/mo", "Monthly reconciliation", "Basic P&L report", "Email support"], highlight: false },
              { name: "Growth", price: "From $349/mo", features: ["Up to 200 transactions/mo", "Full reconciliation", "P&L + Balance Sheet", "Payroll records", "Priority support"], highlight: true },
              { name: "Pro", price: "Custom", features: ["Unlimited transactions", "All Growth features", "Cash flow analysis", "Quarterly reviews", "Dedicated advisor"], highlight: false },
            ].map((tier, i) => (
              <FadeSection key={tier.name} style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className="p-8 rounded-lg flex flex-col h-full transition-all duration-300"
                  style={{
                    background: tier.highlight ? "oklch(0.22 0.018 250)" : "oklch(1 0 0)",
                    border: tier.highlight ? "2px solid oklch(0.78 0.12 85)" : "1px solid oklch(0.88 0.008 250)",
                  }}
                >
                  {tier.highlight && (
                    <span className="text-xs font-semibold uppercase tracking-widest mb-4 block" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Most Popular</span>
                  )}
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: tier.highlight ? "oklch(0.97 0.005 80)" : "oklch(0.22 0.018 250)" }}>{tier.name}</h3>
                  <div className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-mono)", color: "oklch(0.78 0.12 85)" }}>{tier.price}</div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={{ color: tier.highlight ? "oklch(0.72 0.01 250)" : "oklch(0.45 0.015 250)", fontFamily: "var(--font-body)" }}>
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.12 85)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block text-center px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-200"
                    style={{
                      background: tier.highlight ? "oklch(0.78 0.12 85)" : "transparent",
                      color: tier.highlight ? "oklch(0.22 0.018 250)" : "oklch(0.78 0.12 85)",
                      border: tier.highlight ? "none" : "1px solid oklch(0.78 0.12 85)",
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = tier.highlight ? "oklch(0.88 0.08 85)" : "oklch(0.78 0.12 85 / 0.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = tier.highlight ? "oklch(0.78 0.12 85)" : "transparent"; }}
                  >
                    Get Started
                  </Link>
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
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Get In Touch</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
                Let's clean up your books.
              </h2>
              <p className="text-base leading-relaxed mt-6" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>
                Send a message and I'll get back to you within 1 business day with a custom quote and a plan to get your books in order.
              </p>
            </FadeSection>
            <FadeSection style={{ transitionDelay: "100ms" }}>
              <ContactForm service="bookkeeping" dark={true} />
            </FadeSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
