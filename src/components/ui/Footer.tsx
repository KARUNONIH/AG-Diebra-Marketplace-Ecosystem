import React from "react";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#D4AF37]/12 bg-[#0D1710] text-white relative z-10">
      <div className="container-main py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 font-display text-lg font-semibold text-white transition-colors tracking-tight"
            >
              <img
                src="/images/logo/icon-only.webp"
                alt="AG Diebra"
                className="h-9 w-auto"
              />
              <span>
                AG <span className="font-light text-white/55">Diebra</span>
              </span>
            </Link>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-md mt-5">
              AG Diebra Ecosystem Platform adalah penghubung terpadu kebutuhan
              (Need), sumber daya (Resource), kapabilitas, dan peluang di ekosistem
              agribisnis Indonesia melalui kurasi terarah dan persetujuan dua arah
              (Dual-Consent).
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/80 uppercase tracking-[0.12em] mb-7">
              Follow Us On
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://instagram.com/agdiebra.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-white/70 hover:text-white transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#D4AF37] shrink-0"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@agdiebra.official</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/80 uppercase tracking-[0.12em] mb-7">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/628132120725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-body text-sm text-white/70 hover:text-white transition-all duration-300"
                >
                  <MessageCircle
                    size={18}
                    className="text-[#D4AF37] shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="font-medium text-white/80">
                      Ardien Ferdinand Putra Setiawan
                    </p>
                    <p className="text-white/55 text-xs">+62 813 2120 725</p>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:official.agdiebra@gmail.com"
                  className="flex items-start gap-3 font-body text-sm text-white/70 hover:text-white transition-all duration-300"
                >
                  <Mail size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white/80">AG Diebra</p>
                    <p className="text-white/55 text-xs">
                      official.agdiebra@gmail.com
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#D4AF37]/12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/55">
            &copy; {new Date().getFullYear()} AG Diebra. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-white/55 tracking-[0.2em] uppercase">
            Agribusiness Ecosystem Platform
          </p>
        </div>
      </div>
    </footer>
  );
};
