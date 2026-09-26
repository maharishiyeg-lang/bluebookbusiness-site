/**
 * PayrollAndFiling Page — Modern Slate design
 * Deep slate and warm gold with asymmetric editorial sections.
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, BadgeCheck, CalendarDays, ClipboardCheck, FileCheck2, Files, Landmark, ReceiptText, ShieldCheck, UsersRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

function useFadeUp(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
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

const payrollServices = [
  { icon: UsersRound, title: "Payroll Coordination", desc: "Organized payroll support that helps keep employee payments, records, and schedules in order." },
  { icon: ReceiptText, title: "Payroll Records", desc: "Clear payroll documentation prepared for your files, reporting needs, and year-end organization." },
  { icon: CalendarDays, title: "Payroll Schedule Support", desc: "A dependable process built around your pay cycle, deadlines, and the way your team works." },
  { icon: Landmark, title: "Payroll Reporting", desc: "Well-organized payroll information that supports accurate financial reporting and tax preparation." },
];

const filingServices = [
  { icon: Files, title: "Filing Preparation", desc: "Organized support to prepare the records, forms, and information required for filing." },
  { icon: FileCheck2, title: "Form & Return Coordination", desc: "A clear process for tracking the paperwork and submissions relevant to your needs." },
  { icon: ClipboardCheck, title: "Deadline Tracking", desc: "Important filing dates identified and managed so nothing gets missed." },
  { icon: ShieldCheck, title: "Secure Document Handling", desc: "A careful, confidential process for the documents that matter most to you and your business." },
];

export default function OtherServices() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.005 80)" }}>
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/manus-storage/hero-bookkeeping_a31b8d02.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.018 250 / 0.98) 55%, oklch(0.22 0.018 250 / 0.72) 100%)" }} />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-30">
          <svg width="250" height="230" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L7 1L11 11L15 1L21 19" stroke="oklch(0.78 0.12 85)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Business Operations Support</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5 max-w-2xl" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>
            Payroll and filing,
            <span style={{ color: "oklch(0.78 0.12 85)" }}> handled with care.</span>
          </h1>
          <p className="text-lg max-w-xl mb-8" style={{ color: "oklch(0.72 0.01 250)", fontFamily: "var(--font-body)" }}>
            Organized support for the financial work that needs to be right and on time — from payroll records to the filing work that keeps your business moving.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
            style={{ background: "oklch(0.78 0.12 85)", color: "oklch(0.22 0.018 250)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.08 85)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.78 0.12 85)")}
          >
            Discuss your payroll or filing needs <ArrowRight size={16} />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "oklch(0.97 0.005 80)", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container">
          <FadeSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Payroll Support</span>
            </div>
            <h2 className="text-4xl font-bold gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>
              Keep your people paid and your records clear.
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {payrollServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeSection key={service.title} style={{ transitionDelay: `${index * 70}ms` }}>
                  <div className="group relative p-7 rounded-lg overflow-hidden transition-all duration-300" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.008 250)" }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.borderColor = "oklch(0.78 0.12 85)"; el.style.boxShadow = "0 12px 30px oklch(0.22 0.018 250 / 0.08)"; }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.borderColor = "oklch(0.88 0.008 250)"; el.style.boxShadow = "none"; }}>
                    <span className="absolute right-6 top-3 text-6xl font-bold select-none" style={{ fontFamily: "var(--font-mono)", color: "oklch(0.22 0.018 250 / 0.05)" }}>0{index + 1}</span>
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-4" style={{ background: "oklch(0.78 0.12 85 / 0.12)" }}><Icon size={20} style={{ color: "oklch(0.78 0.12 85)" }} /></div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>{service.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}>{service.desc}</p>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "oklch(0.22 0.018 250)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src="/manus-storage/hero-taxes_41284fde.jpg" alt="Organized financial filing workspace" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.018 250 / 0.45) 0%, transparent 65%)" }} />
                <div className="absolute top-0 left-0 h-1 w-20" style={{ background: "oklch(0.78 0.12 85)" }} />
                <div className="absolute top-0 left-0 w-1 h-20" style={{ background: "oklch(0.78 0.12 85)" }} />
              </div>
            </FadeSection>
            <FadeSection style={{ transitionDelay: "110ms" }}>
              <div className="flex items-center gap-3 mb-4"><div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} /><span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Filing Support</span></div>
              <h2 className="text-4xl font-bold mb-6 gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>Fewer loose ends. More confidence.</h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.65 0.01 250)", fontFamily: "var(--font-body)" }}>Financial filing requires both attention to detail and a dependable process. Blue Book Business helps you organize the right paperwork, track the relevant deadlines, and stay prepared for what comes next.</p>
              <p className="mb-8 rounded-sm px-4 py-3 text-sm leading-relaxed" style={{ background: "oklch(0.78 0.12 85 / 0.10)", borderLeft: "2px solid oklch(0.78 0.12 85)", color: "oklch(0.84 0.02 85)", fontFamily: "var(--font-body)" }}><strong style={{ color: "oklch(0.78 0.12 85)" }}>Filing support may include</strong> GST, T5018, T5, and T4 filings, along with other relevant forms based on your situation.</p>
              <ul className="space-y-4">
                {filingServices.map((service) => {
                  const Icon = service.icon;
                  return <li key={service.title} className="flex gap-4"><div className="w-8 h-8 shrink-0 rounded-sm flex items-center justify-center" style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}><Icon size={15} style={{ color: "oklch(0.78 0.12 85)" }} /></div><div><div className="text-sm font-semibold mb-0.5" style={{ color: "oklch(0.97 0.005 80)", fontFamily: "var(--font-display)" }}>{service.title}</div><div className="text-xs leading-relaxed" style={{ color: "oklch(0.62 0.01 250)", fontFamily: "var(--font-body)" }}>{service.desc}</div></div></li>;
                })}
              </ul>
            </FadeSection>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "oklch(0.97 0.005 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeSection>
              <div className="flex items-center gap-3 mb-4"><div className="h-px w-8" style={{ background: "oklch(0.78 0.12 85)" }} /><span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.78 0.12 85)", fontFamily: "var(--font-body)" }}>Get Started</span></div>
              <h2 className="text-4xl font-bold mb-4 gold-rule" style={{ fontFamily: "var(--font-display)", color: "oklch(0.22 0.018 250)" }}>Bring order to the work behind the work.</h2>
              <p className="text-base leading-relaxed mt-6" style={{ color: "oklch(0.52 0.015 250)", fontFamily: "var(--font-body)" }}>Tell Blue Book Business what support you need, and receive a clear, practical plan for your payroll, filing, and financial records.</p>
              <div className="mt-8 p-6 rounded-lg" style={{ background: "oklch(0.22 0.018 250)", border: "1px solid oklch(0.35 0.012 250)" }}><div className="flex items-start gap-3"><BadgeCheck size={18} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.12 85)" }} /><div><div className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "oklch(0.97 0.005 80)" }}>Practical support, built around your deadlines.</div><p className="text-xs leading-relaxed" style={{ color: "oklch(0.62 0.01 250)", fontFamily: "var(--font-body)" }}>No generic package language — just a defined scope, a clear timeline, and careful financial service.</p></div></div></div>
            </FadeSection>
            <FadeSection style={{ transitionDelay: "110ms" }}><ContactForm service="payroll" dark={false} /></FadeSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
