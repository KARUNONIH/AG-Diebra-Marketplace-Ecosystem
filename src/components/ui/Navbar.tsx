"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, ArrowRight, Layers, Sparkles } from "lucide-react";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Ecosystem Hub" },
    { href: "/requests", label: "Needs & Requests" },
    { href: "/resources", label: "Supplies & Assets" },
    { href: "/admin", label: "Admin Pairing" },
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
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#14231A] border border-[#D4AF37]/30 flex items-center justify-center text-[#FEBA27] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Layers className="w-5 h-5 text-[#FEBA27]" />
          </div>
          <div>
            <span className="font-display font-bold text-white text-base tracking-wide flex items-center gap-2">
              AG DIEBRA <span className="text-[#FEBA27] font-mono text-xs px-2 py-0.5 rounded-full bg-[#FEBA27]/10 border border-[#FEBA27]/20">ECOSYSTEM</span>
            </span>
            <p className="text-[11px] text-white/50 font-mono tracking-wider">MARKETPLACE PLATFORM</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group flex items-center gap-1.5 font-body text-sm py-1 relative transition-all duration-300 ${
                    isActive ? "text-white font-medium" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <>
                      {/* Glow underline */}
                      <span className="absolute -bottom-px left-0 h-px w-full bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
                      {/* Active dot */}
                      <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link href="/requests/create">
            <Button
              variant="primary"
              icon={<ArrowRight className="w-3 h-3 text-[#101D14]" />}
            >
              Post Need
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
