import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  MessageSquare,
  CheckCircle2,
  HelpCircle,
  Building2,
  Boxes,
  ArrowUpRight,
  Lock,
  Layers,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function MekanismePage() {
  // 8 Steps verbatim from Brief PDF (Page 1-2, Section 3)
  const eightSteps = [
    {
      num: "01",
      title: "Submit Need / Resource",
      actor: "Requester & Provider",
      desc: "User cukup menyampaikan kebutuhan yang dicari atau resource yang dimiliki (lahan, bahan baku, teknologi, expert, fasilitas, market access, funding) tanpa harus tahu mencari ke siapa.",
      badge: "SUBMISSION",
      badgeColor: "bg-[#FEBA27]/20 text-[#9A6A00]",
    },
    {
      num: "02",
      title: "AG Diebra Review",
      actor: "AG Diebra Team",
      desc: "AG Diebra memahami kebutuhan dan kriterianya, menelaah cakupan spesifikasi, serta memetakan karakteristik kebutuhan atau resource yang masuk.",
      badge: "REVIEW",
      badgeColor: "bg-[#126A3A]/10 text-[#126A3A]",
    },
    {
      num: "03",
      title: "Cari Potential Match",
      actor: "Sistem / Tim Kurator",
      desc: "Sistem dan tim AG Diebra menelusuri database resource yang relevan untuk menemukan kecocokan potensial antar pengguna.",
      badge: "DISCOVERY",
      badgeColor: "bg-sky-500/10 text-sky-700",
    },
    {
      num: "04",
      title: "Validation",
      actor: "AG Diebra Team",
      desc: "AG Diebra melakukan validasi awal terhadap kapasitas, kesiapan ketersediaan, serta kelayakan teknis sebelum rekomendasi diajukan.",
      badge: "VALIDATION",
      badgeColor: "bg-purple-500/10 text-purple-700",
    },
    {
      num: "05",
      title: "Match",
      actor: "Pairing Engine",
      desc: "Penetapan status pasangan terkurasi dengan catatan pertimbangan kurator (Rationale) yang jelas dan objektif.",
      badge: "MATCHED",
      badgeColor: "bg-emerald-500/15 text-emerald-800",
    },
    {
      num: "06",
      title: "Persetujuan Kedua Pihak (Consent)",
      actor: "Requester & Provider",
      desc: "Kedua pihak meninjau profil penawaran dan menyatakan persetujuan. Tidak ada kolaborasi yang dipaksakan; keduanya harus saling setuju.",
      badge: "CONSENT",
      badgeColor: "bg-[#FEBA27]/20 text-[#9A6A00]",
    },
    {
      num: "07",
      title: "Introduction",
      actor: "AG Diebra Facilitator",
      desc: "Setelah kedua pihak setuju, AG Diebra memfasilitasi sesi perkenalan resmi dan menghubungkan jalur komunikasi langsung.",
      badge: "INTRODUCTION",
      badgeColor: "bg-[#126A3A]/15 text-[#126A3A]",
    },
    {
      num: "08",
      title: "Discussion → Collaboration / Project",
      actor: "Mitra Kolaborasi",
      desc: "Diskusi mendalam dilakukan untuk merealisasikan kerja sama konkret: sewa/kelola lahan, suplai bahan baku, kemitraan proyek, atau riset bersama.",
      badge: "COLLABORATION",
      badgeColor: "bg-[#D4AF37]/20 text-[#9A6A00]",
    },
  ];

  const caseStudy = {
    caseText: "User A: “Saya membutuhkan lahan ±2 ha untuk pertanian organik.”",
    steps: [
      {
        label: "Memahami Kebutuhan",
        detail: "AG Diebra memahami kriteria lahan organik yang bebas residu kimia sintetis.",
      },
      {
        label: "Pencarian Resource",
        detail: "Sistem dan tim mencari resource relevan di database ekosistem.",
      },
      {
        label: "Potential Match",
        detail: "Ditemukan Provider yang memiliki lahan ±3 ha yang berpotensi sesuai.",
      },
      {
        label: "Validasi Awal & Consent",
        detail: "AG Diebra memvalidasi status lahan. Jika kedua pihak setuju, introduction difasilitasi.",
      },
      {
        label: "Bentuk Hasil Kolaborasi",
        detail: "Kerja sama lahan, Project bersama, Partnership, Supply agreement, atau Riset.",
      },
    ],
  };

  const coreConcepts = [
    {
      title: "Bukan Marketplace Terbuka",
      desc: "Informasi pihak yang memiliki resource tidak harus langsung ditampilkan secara bebas ke publik. Kerahasiaan data dan kesiapan pihak dijaga sebelum ada kecocokan yang tervalidasi.",
    },
    {
      title: "Prinsip 4 Tahap Kurasi",
      desc: "Discover → Validate → Consent → Introduction. AG Diebra tetap berperan aktif sebagai ecosystem layer pengawal kualitas, bukan hanya tempat jual-beli tanpa kurasi.",
    },
    {
      title: "Fokus Tahap MVP",
      desc: "Pada tahap awal, proses matching dilakukan secara terarah dan manual oleh tim kurator AG Diebra untuk memastikan pemahaman pola kebutuhan sebelum dikembangkan ke automated matching.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Header (Dark Forest Green) */}
      <section className="bg-[#101D14] text-white pt-14 pb-20 lg:pt-20 lg:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 106, 58, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 106, 58, 0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Informasi Platform
          </Link>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold block mb-3">
              DOKUMEN KONSEP &amp; ALUR SISTEM
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Mekanisme Alur Ekosistem AG Diebra
            </h1>
            <p className="font-body text-base text-white/75 leading-relaxed mb-6">
              Core Flow: <strong>Need / Resource → Matching → Connection → Collaboration</strong>.
              Panduan terperinci alur sistem dari awal penyampaian kebutuhan hingga terciptanya
              proyek kerja sama nyata.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 8-Step System Flow (White Background) */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              ALUR SISTEM UTAMA (BAGIAN 3 DOKUMEN BRIEF)
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Delapan Tahap Operasional Ekosistem
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Mekanisme berjenjang yang memastikan setiap kebutuhan tervalidasi dan disetujui bersama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eightSteps.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-xl border border-slate-200 bg-[#F8FAF9] flex flex-col justify-between shadow-xs hover:border-[#126A3A]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-3xl font-extrabold text-[#126A3A]">
                      {st.num}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${st.badgeColor}`}>
                      {st.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                    {st.title}
                  </h3>
                  <p className="font-mono text-[11px] text-slate-500 font-semibold mb-3">
                    {st.actor}
                  </p>
                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200/80 text-[10px] font-mono text-slate-400">
                  Step {st.num} of 08
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Case Study & Real Example (Off-White Background #F8FAF9) */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              BAGIAN 4 DOKUMEN BRIEF
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Studi Kasus Nyata
            </h2>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-6">
            <div className="p-4 rounded-xl bg-[#FEBA27]/10 border border-[#FEBA27]/30 text-sm font-display font-bold text-slate-900">
              {caseStudy.caseText}
            </div>

            <div className="space-y-4">
              {caseStudy.steps.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F8FAF9] border border-slate-200/80">
                  <span className="w-6 h-6 rounded-full bg-[#126A3A] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 mb-0.5">
                      {item.label}
                    </h4>
                    <p className="font-body text-xs text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Concepts (White Background) */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              BAGIAN 6 &amp; 7 DOKUMEN BRIEF
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Konsep Kunci Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreConcepts.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-[#F8FAF9] shadow-xs"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FEBA27]/20 border border-[#FEBA27]/40 flex items-center justify-center text-[#9A6A00] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section (Dark Forest Green) */}
      <section className="bg-[#101D14] text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold">
            SIAP BERKOLABORASI?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Masuk ke Portal Dashboard Sesuai Peran Anda
          </h2>
          <p className="font-body text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Sampaikan kebutuhan atau daftarkan resource yang Anda miliki sekarang.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/dashboard?role=customer">
              <Button
                variant="primary"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
              >
                Portal Requester (Need)
              </Button>
            </Link>
            <Link href="/dashboard?role=supplier">
              <Button
                variant="secondary"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#126A3A]" />}
              >
                Portal Provider (Resource)
              </Button>
            </Link>
            <Link href="/dashboard?role=admin">
              <Button
                variant="dark"
                icon={<ShieldCheck className="w-3.5 h-3.5 text-[#FEBA27]" />}
              >
                Meja Kurator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
