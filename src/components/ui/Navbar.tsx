"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, LayoutDashboard } from "lucide-react";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Informasi Program" },
    { href: "/#mekanisme", label: "Mekanisme Kerja" },
    { href: "/requests", label: "Katalog Kebutuhan" },
    { href: "/resources", label: "Katalog Pasokan" },
    { href: "/dashboard", label: "Portal Dashboard" },
  ];

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5"
      style={{
        background: "rgba(16, 29, 20, 0.92)",
        backdropFilter: "blur(24px) saturate(1.4)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/40 p-0.5 bg-[#14231A] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Image
              src="/images/logo/icon-only.webp"
              alt="AG Diebra"
              width={36}
              height={36}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <span className="font-display font-bold text-white text-base tracking-wide flex items-center gap-2">
              AG DIEBRA{" "}
              <span className="text-[#FEBA27] font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#FEBA27]/10 border border-[#FEBA27]/25 font-semibold">
                ECOSYSTEM
              </span>
            </span>
            <p className="text-[10px] text-white/50 font-mono tracking-widest uppercase">
              Agribusiness Platform
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group flex items-center gap-1.5 font-body text-sm py-1 relative transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <>
                      {/* Glow underline */}
                      <span className="absolute -bottom-px left-0 h-px w-full bg-[#FEBA27] shadow-[0_0_6px_rgba(254,186,39,0.7)]" />
                      {/* Active dot */}
                      <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FEBA27] shadow-[0_0_8px_rgba(254,186,39,0.9)]" />
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button & Dashboard Portal */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/dashboard">
            <Button
              variant="primary"
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
            >
              Masuk Dashboard
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <Link href="/dashboard">
            <button className="p-2 rounded-lg bg-[#FEBA27] text-[#101D14]">
              <LayoutDashboard className="w-4 h-4" />
            </button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-body text-base text-white/80 hover:text-[#FEBA27] py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button
                variant="primary"
                className="w-full justify-center"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
              >
                Buka Portal Dashboard
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
