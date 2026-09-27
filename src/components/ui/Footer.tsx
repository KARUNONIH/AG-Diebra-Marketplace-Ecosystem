import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0D1710] text-white pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/40 p-0.5 bg-[#14231A]">
                <Image
                  src="/images/logo/icon-only.webp"
                  alt="AG Diebra"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-display font-bold text-lg text-white">
                AG DIEBRA
              </span>
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-sm">
              Membangun ekosistem agribisnis terpadu dari hulu ke hilir melalui
              penerapan teknologi cerdas, efisiensi logistik dingin, dan
              kolaborasi kemitraan strategis nasional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/agdiebra.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FEBA27] hover:border-[#FEBA27]/40 transition-colors"
                aria-label="Instagram AG Diebra"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="mailto:official.agdiebra@gmail.com"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FEBA27] hover:border-[#FEBA27]/40 transition-colors"
                aria-label="Email AG Diebra"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/628132120725"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FEBA27] hover:border-[#FEBA27]/40 transition-colors"
                aria-label="WhatsApp AG Diebra"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#FEBA27] font-bold">
              Informasi Program
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/#pillars" className="hover:text-white transition-colors">
                  8 Pilar Ekosistem
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  Alur Kolaborasi
                </Link>
              </li>
              <li>
                <Link href="/requests" className="hover:text-white transition-colors">
                  Katalog Kebutuhan (Need)
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Katalog Pasokan (Supply)
                </Link>
              </li>
            </ul>
          </div>

          {/* Dashboard Portals */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
              Portal Dashboard
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link
                  href="/dashboard?role=customer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Dashboard Customer <ArrowUpRight className="w-3 h-3 text-[#FEBA27]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard?role=supplier"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Dashboard Supplier <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard?role=admin"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Meja Kurator / Admin <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
              Kontak Ekosistem
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <p className="text-white font-medium">
                Ardien Ferdinand Putra Setiawan
              </p>
              <p className="font-mono text-xs">+62 813 2120 725</p>
              <p className="font-mono text-xs">official.agdiebra@gmail.com</p>
              <p className="text-xs text-white/40 pt-1">
                Bandung • Jakarta • Jawa Barat, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 AG Diebra. All rights reserved.</p>
          <p className="font-mono">Building the future of Agribusiness Ecosystems.</p>
        </div>
      </div>
    </footer>
  );
};
