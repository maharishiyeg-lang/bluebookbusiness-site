/**
 * Navbar — Modern Slate design
 * Sticky, transitions from transparent to slate-deep/95 on scroll.
 * Gold accent on active nav item. M monogram logo.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Bookkeeping", href: "/bookkeeping" },
  { label: "Accounting", href: "/accounting" },
  { label: "Payroll & Filing", href: "/other-services" },
  { label: "Taxes", href: "/taxes" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || !isHome
          ? "oklch(0.22 0.018 250 / 0.97)"
          : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(12px)" : "none",
        borderBottom: scrolled || !isHome ? "1px solid oklch(0.38 0.012 250)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-sm transition-transform duration-200 group-hover:scale-105 shrink-0"
              style={{ background: "oklch(0.78 0.12 85)" }}
            >
              {/* Open-book mark — Blue Book Business */}
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 3.5C5.4 2.8 7.9 3.3 10.8 5V17C7.9 15.3 5.4 14.8 2.5 15.5V3.5Z" stroke="oklch(0.22 0.018 250)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 3.5C16.6 2.8 14.1 3.3 11.2 5V17C14.1 15.3 16.6 14.8 19.5 15.5V3.5Z" stroke="oklch(0.22 0.018 250)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span
                className="block text-sm font-semibold leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "oklch(0.97 0.005 80)",
                  letterSpacing: "0.02em",
                }}
              >
                Blue Book
              </span>
              <span
                className="block text-xs leading-tight"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "oklch(0.78 0.12 85)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Business
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: active
                      ? "oklch(0.78 0.12 85)"
                      : "oklch(0.80 0.008 250)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "oklch(0.97 0.005 80)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "oklch(0.80 0.008 250)";
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ background: "oklch(0.78 0.12 85)" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
              style={{
                fontFamily: "var(--font-body)",
                background: "oklch(0.78 0.12 85)",
                color: "oklch(0.22 0.018 250)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.88 0.08 85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.12 85)";
              }}
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-sm transition-colors"
            style={{ color: "oklch(0.97 0.005 80)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "oklch(0.22 0.018 250)",
            borderColor: "oklch(0.38 0.012 250)",
          }}
        >
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium rounded-sm transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: active ? "oklch(0.78 0.12 85)" : "oklch(0.80 0.008 250)",
                    background: active ? "oklch(0.30 0.015 250)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-3 px-4 py-3 text-sm font-semibold rounded-sm text-center"
              style={{
                background: "oklch(0.78 0.12 85)",
                color: "oklch(0.22 0.018 250)",
              }}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
