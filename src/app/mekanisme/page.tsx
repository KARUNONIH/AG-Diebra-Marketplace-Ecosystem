import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  MessageSquare,
  FileCheck2,
  CheckCircle2,
  HelpCircle,
  Building2,
  Boxes,
  ArrowUpRight,
  Clock,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function MekanismePage() {
  const detailedSteps = [
    {
      num: "01",
      title: "Pengajuan Kebutuhan (Need) & Pendaftaran Pasokan (Supply)",
      lead: "Partisipan mendaftarkan data spesifikasi teknis ke platform.",
      points: [
        "Customer (Offtaker/Buyer) mengisi formulir kebutuhan: komoditas yang dicari, target kuantitas (ton/kg), standar mutu (kadar air, ukuran biji/sortasi), dan domisili pengiriman.",
        "Supplier (Petani/Vendor) mendaftarkan kapasitas sumber daya: kapasitas produksi per musim, ketersediaan unit sensor IoT, spesifikasi armada cold storage, serta sertifikasi yang dimiliki.",
        "Data tersimpan secara aman di database ekosistem dan langsung masuk ke antrean penelaahan kurator.",
      ],
      actor: "Inisiasi oleh Customer & Supplier",
      badge: "SUBMISSION",
      badgeClass: "bg-[#FEBA27]/20 text-[#9A6A00]",
    },
    {
      num: "02",
      title: "Kurasi Independen & Analisis Rationale Kelayakan",
      lead: "Kurator AG Diebra menganalisis kecocokan secara objektif.",
      points: [
        "Kurator menelaah kecocokan volume pasokan terhadap permintaan, toleransi jarak rute distribusi, serta kesiapan fasilitas pendingin.",
        "Kurator menyusun catatan evaluasi teknis (Curator Rationale) yang menjelaskan dasar pertimbangan mengapa kedua pihak direkomendasikan untuk berpasangan.",
        "Kurator menetapkan status 'Matched' dan memicu notifikasi persetujuan ke masing-masing pihak.",
      ],
      actor: "Dieksekusi oleh Tim Kurator AG Diebra",
      badge: "CURATION",
      badgeClass: "bg-[#126A3A]/10 text-[#126A3A]",
    },
    {
      num: "03",
      title: "Penelaahan & Keputusan Dual-Consent",
      lead: "Transparansi penuh: kemitraan hanya berlanjut atas persetujuan kedua pihak.",
      points: [
        "Customer meninjau profil penawaran Supplier dan membaca catatan kurator, lalu memutuskan Setuju (Approve) atau Tolak (Reject).",
        "Supplier meninjau rincian kebutuhan Customer dan memutuskan Setuju (Approve) atau Tolak (Reject).",
        "Bila salah satu pihak menolak, status kolaborasi menjadi 'Declined' dan kurator akan mencari kandidat pasangan baru tanpa sanksi apa pun.",
      ],
      actor: "Persetujuan Independen Kedua Mitra",
      badge: "DUAL-CONSENT",
      badgeClass: "bg-emerald-500/20 text-emerald-800",
    },
    {
      num: "04",
      title: "Fasilitasi Jalur WhatsApp Resmi & Eksekusi Transaksi",
      lead: "Penghubungan langsung ke ruang koordinasi bisnis resmi.",
      points: [
        "Setelah status menjadi 'Approved Both', sistem secara otomatis menerbitkan data introduksi resmi dan tautan chat WhatsApp terverifikasi.",
        "Tim AG Diebra mendampingi pembukaan komunikasi awal untuk memastikan kelancaran kesepakatan kontrak, sampling komoditas, dan jadwal kirim.",
        "Status tercatat sebagai 'Introduced' dan transaksi dapat berlangsung secara aman dan terukur.",
      ],
      actor: "Fasilitasi Resmi AG Diebra",
      badge: "INTRODUCED",
      badgeClass: "bg-[#D4AF37]/20 text-[#9A6A00]",
    },
  ];

  const rightsObligations = [
    {
      role: "Customer (Offtaker / Buyer)",
      rights: [
        "Mendapatkan pasokan komoditas yang telah dikurasi sesuai spesifikasi teknis.",
        "Menerima catatan analisis objektif dari kurator sebelum memberikan persetujuan.",
        "Hak menolak (Reject) rekomendasi tanpa dikenakan penalti.",
      ],
      obligations: [
        "Memberikan data kebutuhan dan standar mutu yang riil dan jelas.",
        "Merespons rekomendasi pasangan dalam kurun waktu wajar.",
        "Menjalankan kesepakatan transaksi dan pembayaran sesuai termin yang disepakati.",
      ],
      icon: Building2,
      accent: "text-[#FEBA27]",
    },
    {
      role: "Supplier (Petani / Produsen / Vendor)",
      rights: [
        "Terhubung langsung dengan pembeli industri resmi tanpa tengkulak bertingkat.",
        "Menerima kepastian harga kesepakatan yang transparan dan wajar.",
        "Dukungan akses fasilitas cold storage dan teknologi jika diperlukan.",
      ],
      obligations: [
        "Menjamin kebenaran data kapasitas panen atau fasilitas yang didaftarkan.",
        "Menjaga konsistensi standar sortasi dan mutu barang yang dikirim.",
        "Mematuhi jadwal pengiriman yang telah disepakati bersama offtaker.",
      ],
      icon: Boxes,
      accent: "text-[#126A3A]",
    },
  ];

  const faqs = [
    {
      q: "Apakah ada biaya pendaftaran untuk mengikuti program ini?",
      a: "Tidak. Pendaftaran kebutuhan (Need) maupun pendaftaran pasokan (Supply) di platform ini sepenuhnya gratis untuk seluruh kelompok tani dan offtaker mitra.",
    },
    {
      q: "Apa yang terjadi jika saya menolak (Reject) rekomendasi kurator?",
      a: "Penolakan merupakan hak penuh Anda dalam mekanisme Dual-Consent. Permintaan atau pasokan Anda akan kembali berstatus aktif dan tim kurator akan mencarikan alternatif pasangan lain yang lebih cocok.",
    },
    {
      q: "Kapan tautan WhatsApp koordinasi resmi diberikan?",
      a: "Tautan chat WhatsApp langsung aktif sesaat setelah KEDUA belah pihak (Customer dan Supplier) menekan tombol Setuju (Approve) pada stasiun kerja masing-masing.",
    },
    {
      q: "Bagaimana standar mutu komoditas diverifikasi?",
      a: "Kurator AG Diebra memverifikasi riwayat produksi, dokumen sertifikasi (jika ada), uji sampling kadar air/sortasi, serta kesesuaian fasilitas penanganan pasca panen sebelum mengonfirmasi pairing.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Header / Hero (Dark Forest Green) */}
      <section className="bg-[#101D14] text-white pt-14 pb-20 lg:pt-20 lg:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 106, 58, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 106, 58, 0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Informasi Program
          </Link>

          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold block mb-3">
              STANDAR OPERASIONAL PROSEDUR (SOP)
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Mekanisme Kolaborasi &amp; Kurasi Terpadu
            </h1>
            <p className="font-body text-base text-white/75 leading-relaxed">
              Panduan lengkap tata cara kerja sama dalam program AG Diebra Ecosystem
              Platform: dari pendaftaran spesifikasi, analisis kurasi presisi,
              persetujuan dua arah (Dual-Consent), hingga pembukaan jalur komunikasi
              WhatsApp resmi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step SOP (White Background) */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              EMPAT TAHAP OPERASIONAL
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Tahapan Pelaksanaan Kemitraan
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Setiap tahapan dirancang untuk menjamin keamanan transaksi dan mutu komoditas.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {detailedSteps.map((st) => (
              <div
                key={st.num}
                className="p-8 rounded-xl border border-slate-200 bg-[#F8FAF9] shadow-xs relative overflow-hidden flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex md:flex-col items-center justify-between gap-3 shrink-0">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#126A3A]">
                    {st.num}
                  </span>
                  <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold ${st.badgeClass}`}>
                    {st.badge}
                  </span>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/80 pb-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                      {st.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">
                      {st.actor}
                    </span>
                  </div>

                  <p className="font-body text-sm font-medium text-slate-800">
                    {st.lead}
                  </p>

                  <ul className="space-y-2 pt-1 font-body text-xs sm:text-sm text-slate-600">
                    {st.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Rights and Obligations Matrix (Off-White Background #F8FAF9) */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              KESEIMBANGAN KERJA SAMA
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Hak &amp; Kewajiban Para Pihak
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Membangun rasa saling percaya dengan batasan tanggung jawab yang jelas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rightsObligations.map((ro, rIdx) => (
              <div
                key={rIdx}
                className="p-8 rounded-xl border border-slate-200 bg-white shadow-xs space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#FEBA27]/20 border border-[#FEBA27]/40 flex items-center justify-center text-[#9A6A00]">
                    <ro.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {ro.role}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-mono text-xs font-bold text-[#126A3A] uppercase tracking-wider">
                    Hak Partisipan:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {ro.rights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#126A3A] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <p className="font-mono text-xs font-bold text-[#9A6A00] uppercase tracking-wider">
                    Kewajiban Partisipan:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {ro.obligations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FEBA27] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section (White Background) */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              TANYA JAWAB UMUM
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Jawaban seputar teknis kurasi, mekanisme consent, dan privasi kontak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-xl border border-slate-200 bg-[#F8FAF9] shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#126A3A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-2">
                      {faq.q}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section (Dark Forest Green Background) */}
      <section className="bg-[#101D14] text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold">
            SIAP MEMULAI?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Masuk ke Dashboard dan Ajukan Kebutuhan / Pasokan Anda
          </h2>
          <p className="font-body text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Pilih stasiun kerja sesuai dengan peran organisasi Anda di ekosistem agribisnis kami.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/dashboard?role=customer">
              <Button
                variant="primary"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
              >
                Portal Customer (Need)
              </Button>
            </Link>
            <Link href="/dashboard?role=supplier">
              <Button
                variant="secondary"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#126A3A]" />}
              >
                Portal Supplier (Supply)
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
