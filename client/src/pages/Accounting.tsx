/**
 * Accounting Page — Modern Slate design
 */
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart3, TrendingUp, PieChart, FileText, Briefcase, Target } from "lucide-react";
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
  { icon: BarChart3, title: "Financial Statements", desc: "Professionally prepared income statements, balance sheets, and cash flow reports." },
  { icon: TrendingUp, title: "Profit & Loss Analysis", desc: "Understand your margins, identify trends, and make data-driven decisions." },
  { icon: PieChart, title: "Budget Planning", desc: "Build realistic budgets aligned with your business goals and growth plans." },
  { icon: FileText, title: "Accounts Payable/Receivable", desc: "Stay on top of what you owe and what you're owed — no more cash flow surprises." },
  { icon: Briefcase, title: "Business Advisory", desc: "Strategic financial guidance to help you grow, invest, and plan for the future." },
  { icon: Target, title: "KPI Dashboards", desc: "Custom reporting dashboards showing the metrics that matter most to your business." },
];

export default function Accounting() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.005 80)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/manus-storage/hero-finance_17f1e34c.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.018 250 / 0.97) 60%, oklch(0.22 0.018 250 / 0.7) 100%)" }} />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Financial Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5 max-w-2xl" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
            Accounting that
            <span style={{ color: "oklch(0.78 0.12 85)" }}> tells the full story.</span>
          </h1>
          <p className="text-lg max-w-xl mb-8" style={{ color: "oklch(0.72 0.01 250)", fontFamily: "var(--font-body)" }}>
            Beyond the numbers — strategic accounting that helps you understand your financial health, plan for growth, and make confident decisions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
            style={{ background: "oklch(0.78 0.12 85)", color: "oklch(0.22 0.018 250)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.08 85)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.78 0.12 85)")}
          >
            See how your numbers can work harder <ArrowRight size={16} />
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
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Services</span>
            </div>
            <h2 className="text-4xl font-bold gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
              Full-picture financial management.
            </h2>
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

      {/* Split section — image + benefits */}
      <section className="py-24" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src="/manus-storage/hero-bookkeeping_a31b8d02.jpg" alt="Accounting workspace" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.018 250 / 0.4) 0%, transparent 60%)" }} />
                <div className="absolute top-0 left-0 w-1 h-16" style={{ background: "oklch(0.78 0.12 85)" }} />
              </div>
            </FadeSection>
            <FadeSection style={{ transitionDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Why It Matters</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
                Know your numbers. Own your future.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>
                Most small business owners are flying blind financially. With proper accounting, you'll have the clarity to make smart decisions, secure financing, and build a business that lasts.
              </p>
              <ul className="space-y-4">
                {[
                  "Catch problems before they become crises",
                  "Qualify for business loans with clean financials",
                  "Understand your true profitability by product or service",
                  "Plan for taxes year-round, not just in April",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.12 85)" }} />
                    <span className="text-sm" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Get In Touch</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
                Let's build your financial foundation.
              </h2>
              <p className="text-base leading-relaxed mt-6" style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}>
                A $100 consultation fee applies and is waived when a working contract is signed during the meeting. Then we can focus on how accounting can help your business grow.
              </p>
            </FadeSection>
            <FadeSection style={{ transitionDelay: "100ms" }}>
              <ContactForm service="accounting" dark={false} />
            </FadeSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
