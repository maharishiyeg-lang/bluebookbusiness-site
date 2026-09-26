/**
 * Home Page — Modern Slate design
 * Hero: asymmetric split with geometric gold accents
 * Services grid, trust stats, why-Blue Book Business, CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Calculator, FileText, Globe, CheckCircle2, Star, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    desc: "Accurate, organized records so you can see exactly where your business stands every month.",
    href: "/bookkeeping",
    num: "01",
    cta: "See what's included",
  },
  {
    icon: Calculator,
    title: "Accounting",
    desc: "Clear financial statements, cash-flow insight, and practical guidance for stronger decisions.",
    href: "/accounting",
    num: "02",
    cta: "Explore accounting services",
  },
  {
    icon: Globe,
    title: "Payroll",
    desc: "Reliable payroll coordination, organized records, and reporting support that keeps your team on track.",
    href: "/other-services",
    num: "03",
    cta: "Explore payroll support",
  },
  {
    icon: FileText,
    title: "Filing",
    desc: "Timely, organized filing support so the right documents are prepared and submitted with confidence.",
    href: "/other-services",
    num: "04",
    cta: "See filing support",
  },
  {
    icon: FileText,
    title: "Personal Taxes",
    desc: "Accurate individual returns and thoughtful deduction review for a clearer tax season.",
    href: "/taxes",
    num: "05",
    cta: "Prepare your return",
  },
  {
    icon: Calculator,
    title: "Personal & Business Taxes",
    desc: "Tax preparation for self-employed professionals and owner-operated businesses, built around your complete picture.",
    href: "/taxes",
    num: "06",
    cta: "Plan your tax filing",
  },
  {
    icon: BookOpen,
    title: "Corporate Taxes",
    desc: "Careful corporate tax preparation, deadline management, and year-round planning support.",
    href: "/taxes",
    num: "07",
    cta: "Review corporate tax support",
  },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "$2M+", label: "Tax Savings Found" },
];

function useFadeUp(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); }
      },
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

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.005 80)" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "oklch(0.22 0.018 250)" }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.018 250 / 0.97) 55%, oklch(0.22 0.018 250 / 0.75) 100%)" }}
        />

        {/* Geometric gold accent lines — right side visual system */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block">
          {/* Vertical gold rule */}
          <div className="absolute left-0 top-24 bottom-24 w-px" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.78 0.12 85 / 0.4), transparent)" }} />
          {/* Horizontal gold rules */}
          <div className="absolute left-8 top-1/3 w-16 h-px" style={{ background: "oklch(0.78 0.12 85 / 0.5)" }} />
          <div className="absolute left-8 top-1/2 w-10 h-px" style={{ background: "oklch(0.78 0.12 85 / 0.3)" }} />
          {/* Large faded M monogram */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none">
            <svg width="280" height="260" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.06 }}>
              <path d="M1 19L7 1L11 11L15 1L21 19" stroke="oklch(0.78 0.12 85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Data panel silhouette */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-64 h-48 rounded-lg overflow-hidden" style={{ border: "1px solid oklch(0.78 0.12 85 / 0.15)", background: "oklch(0.27 0.016 250 / 0.6)" }}>
            <div className="p-5">
              <div className="text-xs mb-3" style={{ color: "oklch(0.78 0.12 85 / 0.6)", fontFamily: "var(--font-mono)" }}>MONTHLY OVERVIEW</div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-2 h-16 mb-3">
                {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "oklch(0.78 0.12 85)" : "oklch(0.78 0.12 85 / 0.25)" }} />
                ))}
              </div>
              <div className="h-px w-full mb-3" style={{ background: "oklch(0.78 0.12 85 / 0.15)" }} />
              <div className="flex justify-between">
                <div>
                  <div className="text-xs" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-mono)" }}>Revenue</div>
                  <div className="text-sm font-bold" style={{ color: "oklch(0.97 0.005 80)", fontFamily: "var(--font-mono)" }}>$24,800</div>
                </div>
                <div className="text-right">
                  <div className="text-xs" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-mono)" }}>Expenses</div>
                  <div className="text-sm font-bold" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-mono)" }}>$8,120</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative z-10 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "oklch(0.78 0.12 85)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}
              >
                Financial Services
              </span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}
            >
              Your numbers,
              <br />
              <span style={{ color: "oklch(0.78 0.12 85)" }}>finally under</span>
              <br />
              control.
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "oklch(0.72 0.01 250)", fontFamily: "var(--font-body)" }}
            >
              Expert bookkeeping, accounting, payroll, filing, and tax services for individuals, entrepreneurs, and growing businesses who deserve big-firm quality — without the big-firm price.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
                style={{
                  background: "oklch(0.78 0.12 85)",
                  color: "oklch(0.22 0.018 250)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.08 85)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.78 0.12 85)")}
              >
                Book a consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/bookkeeping"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200"
                style={{
                  border: "1px solid oklch(0.78 0.12 85 / 0.5)",
                  color: "oklch(0.78 0.12 85)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.12 85 / 0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.12 85)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.12 85 / 0.5)";
                }}
              >
                See all services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-5">
              {["Licensed & Insured", "Remote-Friendly", "Response in 1 Business Day"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: "oklch(0.78 0.12 85)" }} />
                  <span className="text-sm" style={{ color: "oklch(0.62 0.01 250)", fontFamily: "var(--font-body)" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "oklch(0.97 0.005 80)",
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: "oklch(0.97 0.005 80)" }} className="py-16">
        <div className="container">
          <FadeSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative text-center">
                  {i < stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10" style={{ background: "oklch(0.88 0.008 250)" }} />
                  )}
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "oklch(0.55 0.012 250)", fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ background: "oklch(0.22 0.018 250)" }} className="py-24">
        <div className="container">
          <FadeSection className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>
                What I Offer
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold gold-rule"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}
            >
              Services built for
              <br />your success.
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <FadeSection key={svc.title} style={{ transitionDelay: `${i * 80}ms` }}>
                  <Link href={svc.href}>
                    <div
                      className="group relative p-8 rounded-lg transition-all duration-300 cursor-pointer overflow-hidden"
                      style={{
                        background: "oklch(0.27 0.016 250)",
                        border: "1px solid oklch(0.35 0.012 250)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(-4px)";
                        el.style.borderColor = "oklch(0.78 0.12 85)";
                        el.style.boxShadow = "0 20px 40px oklch(0.10 0.018 250 / 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(0)";
                        el.style.borderColor = "oklch(0.35 0.012 250)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      {/* Gold left border accent on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 group-hover:opacity-100 opacity-0" style={{ background: "oklch(0.78 0.12 85)" }} />

                      {/* Large faded number */}
                      <span
                        className="absolute top-4 right-6 text-7xl font-bold select-none pointer-events-none"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "oklch(0.32 0.015 250)",
                          lineHeight: 1,
                        }}
                      >
                        {svc.num}
                      </span>

                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-sm mb-5"
                        style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
                      >
                        <Icon size={22} style={{ color: "oklch(0.78 0.12 85)" }} />
                      </div>

                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}
                      >
                        {svc.desc}
                      </p>

                      <div
                        className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                        style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}
                      >
                        {svc.cta}
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Blue Book Business ── */}
      <section style={{ background: "oklch(0.97 0.005 80)" }} className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>
                  Why Blue Book Business
                </span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6 gold-rule"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}
              >
                Big-firm expertise.
                <br />Personal attention.
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.45 0.015 250)", fontFamily: "var(--font-body)" }}
              >
                With Blue Book Business, you get a dedicated financial professional who knows your business by name — not a ticket number. Every client receives personalized service, transparent pricing, and results you can see in your bottom line.
              </p>

              {/* Slate feature card */}
              <div className="rounded-lg p-6 mb-6" style={{ background: "oklch(0.22 0.018 250)", border: "1px solid oklch(0.35 0.012 250)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm shrink-0" style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}>
                    <TrendingUp size={18} style={{ color: "oklch(0.78 0.12 85)" }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold mb-1" style={{ color: "oklch(0.97 0.005 80)", fontFamily: "var(--font-display)" }}>Flat-rate pricing — no surprise invoices</div>
                    <div className="text-xs" style={{ color: "oklch(0.62 0.01 250)", fontFamily: "var(--font-body)" }}>You know the cost before we start. No hourly billing, no scope creep charges.</div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Secure cloud-based document sharing",
                  "Response within 1 business day, always",
                  "Available year-round, not just tax season",
                  "Remote-friendly — serve clients nationwide",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Star size={14} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.12 85)" }} />
                    <span className="text-sm" style={{ color: "oklch(0.45 0.015 250)", fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeSection>

            <FadeSection style={{ transitionDelay: "120ms" }}>
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  background: "linear-gradient(145deg, oklch(0.24 0.02 250), oklch(0.36 0.025 250))",
                  border: "1px solid oklch(0.78 0.12 85 / 0.28)",
                }}
              >
                <div className="absolute inset-7 rounded-sm p-6" style={{ border: "1px solid oklch(0.78 0.12 85 / 0.24)", background: "oklch(0.22 0.018 250 / 0.6)" }}>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-mono)" }}>CLEARER FINANCES</span>
                    <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.78 0.12 85)" }} />
                  </div>
                  <div className="flex items-end gap-3 h-28 mb-7">
                    {[38, 56, 49, 72, 64, 88, 76].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-sm" style={{ height: `${height}%`, background: index === 5 ? "oklch(0.78 0.12 85)" : "oklch(0.78 0.12 85 / 0.25)" }} />
                    ))}
                  </div>
                  <div className="flex justify-between pt-5" style={{ borderTop: "1px solid oklch(0.78 0.12 85 / 0.18)" }}>
                    <div><div className="text-xs mb-1" style={{ color: "oklch(0.65 0.01 250)" }}>Organized</div><div className="text-lg font-bold" style={{ color: "oklch(0.97 0.005 80)", fontFamily: "var(--font-display)" }}>Books</div></div>
                    <div className="text-right"><div className="text-xs mb-1" style={{ color: "oklch(0.65 0.01 250)" }}>Better</div><div className="text-lg font-bold" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-display)" }}>Decisions</div></div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-20" style={{ background: "oklch(0.78 0.12 85)" }} />
                <div className="absolute top-0 left-0 h-1 w-20" style={{ background: "oklch(0.78 0.12 85)" }} />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "oklch(0.22 0.018 250)" }}
      >
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 bottom-0 w-1/3" style={{ background: "linear-gradient(to left, oklch(0.78 0.12 85 / 0.04), transparent)" }} />
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-px h-32" style={{ background: "oklch(0.78 0.12 85 / 0.2)" }} />
        </div>
        <div className="container text-center relative z-10">
          <FadeSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85 / 0.5)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Consultation Policy</span>
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85 / 0.5)" }} />
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}
            >
              Ready to take control?
            </h2>
            <p
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}
            >
              Let's talk about your books, payroll, filing, or taxes. A $100 consultation fee applies and is waived when a working contract is signed during the meeting; otherwise, the consultation is invoiced.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
              style={{
                background: "oklch(0.78 0.12 85)",
                color: "oklch(0.22 0.018 250)",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.08 85)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.78 0.12 85)")}
            >
              Let's talk about your finances
              <ArrowRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
