"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Route,
  Layers,
  Boxes,
  LayoutDashboard,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Informasi Platform", icon: Home },
    { href: "/mekanisme", label: "Alur Sistem", icon: Route },
    { href: "/requests", label: "Kebutuhan (Need)", icon: Layers },
    { href: "/resources", label: "Pasokan (Supply)", icon: Boxes },
    { href: "/dashboard", label: "Portal Dashboard", icon: LayoutDashboard },
  ];

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(16, 29, 20, 0.98)"
          : "rgba(16, 29, 20, 0.92)",
        backdropFilter: "blur(24px) saturate(1.4)",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.25)" : "none",
        borderBottom: "none",
      }}
    >
      <nav className="container-main flex items-center justify-between h-20">
        {/* Logo — strictly constrained to 36x36px */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/logo/icon-only.webp"
            alt="AG Diebra"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            style={{ width: "36px", height: "36px" }}
          />
        </Link>

        {/* Desktop links matching agdiebra.com structure */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const Icon = link.icon;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group flex items-center gap-2 font-body text-sm transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors duration-300 ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white/40 group-hover:text-[#D4AF37]"
                    }`}
                  />
                  <span>{link.label}</span>

                  {/* Glow underline */}
                  <span
                    className={`absolute -bottom-px left-0 h-px transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.5)]"
                        : "w-0 bg-[#D4AF37]/60 group-hover:w-full"
                    }`}
                  />
                  {/* Active dot */}
                  <span
                    className={`absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#D4AF37] opacity-100 shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                        : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA (Language selector removed as requested) */}
        <div className="hidden lg:flex items-center">
          <Link href="/dashboard" className="btn-partner btn-partner--primary">
            <span>Masuk Dashboard</span>
            <span className="btn-partner__icon" aria-hidden="true">
              <ArrowRight className="btn-partner__icon-svg w-3 h-3 text-[#101D14]" />
              <ArrowRight className="btn-partner__icon-svg btn-partner__icon-svg--copy w-3 h-3 text-[#101D14]" />
            </span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Link href="/dashboard" className="btn-partner btn-partner--primary !px-3 !py-1.5 !text-xs">
            Dashboard
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/55 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#101D14]/98 px-6 py-6 space-y-4 shadow-2xl">
          <ul className="space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 font-body text-base text-white/70 hover:text-[#FEBA27] py-1.5"
                  >
                    <Icon className="w-4 h-4 text-[#D4AF37]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-partner btn-partner--primary w-full justify-center"
            >
              <span>Buka Portal Dashboard</span>
              <span className="btn-partner__icon" aria-hidden="true">
                <ArrowRight className="btn-partner__icon-svg w-3 h-3 text-[#101D14]" />
                <ArrowRight className="btn-partner__icon-svg btn-partner__icon-svg--copy w-3 h-3 text-[#101D14]" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
