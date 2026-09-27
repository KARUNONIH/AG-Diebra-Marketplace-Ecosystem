import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Boxes,
  Cpu,
  GraduationCap,
  Warehouse,
  ShoppingBag,
  Handshake,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  ArrowUpRight,
  FileText,
  Lock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  // Categories strictly from Brief PDF (Page 1-2)
  const resourceCategories = [
    {
      title: "Lahan Pertanian & Kebun",
      desc: "Ketersediaan lahan untuk budidaya, pertanian organik, greenhouse, atau ekspansi komoditas.",
      icon: MapPin,
      example: "Contoh: Lahan ±2-3 ha siap kelola",
    },
    {
      title: "Bahan Baku & Produk Hasil Tani",
      desc: "Pasokan hasil panen mentah, bahan baku olahan agribisnis, serta komoditas segar berkualitas.",
      icon: Boxes,
      example: "Contoh: Bahan baku reguler industri",
    },
    {
      title: "Teknologi & Inovasi Pertanian",
      desc: "Perangkat smart farming, instrumentasi sensor, alsintan modern, dan perangkat lunak agribisnis.",
      icon: Cpu,
      example: "Contoh: Sistem irigasi presisi & otomasi",
    },
    {
      title: "Expertise & Tenaga Ahli / Peneliti",
      desc: "Akses ke pakar agronomi, peneliti institusi, konsultan budidaya, dan praktisi industri.",
      icon: GraduationCap,
      example: "Contoh: Riset varietas & uji kelayakan",
    },
    {
      title: "Fasilitas & Infrastruktur",
      desc: "Gudang penyimpanan, fasilitas sortasi/pengeringan, cold storage, dan sarana pasca panen.",
      icon: Warehouse,
      example: "Contoh: Fasilitas gudang berpendingin",
    },
    {
      title: "Market Access & Jalur Distribusi",
      desc: "Akses pasar offtaker, jaringan distribusi horeka, ritel modern, dan pembeli institusional.",
      icon: ShoppingBag,
      example: "Contoh: Kontrak penyerapan hasil panen",
    },
    {
      title: "Partnership & Joint Project",
      desc: "Peluang kerja sama operasional (KSO), proyek bersama multi-pihak, dan kemitraan strategis.",
      icon: Handshake,
      example: "Contoh: Konsorsium proyek hulu-hilir",
    },
    {
      title: "Funding & Pendanaan Agribisnis",
      desc: "Peluang akses modal kerja, pendanaan proyek budidaya, dan investasi pengembangan kapasitas.",
      icon: Coins,
      example: "Contoh: Pembiayaan musim tanam",
    },
  ];

  // 3 Users directly from Brief PDF (Page 1)
  const userRoles = [
    {
      role: "Requester",
      title: "Pihak yang Memiliki Kebutuhan",
      desc: "Pihak yang mencari lahan, bahan baku, teknologi, expert/peneliti, pasar, mitra kerja sama, atau pendanaan.",
      actors: "Perusahaan, Startup, Farmer, Researcher, Institusi, Komunitas, hingga Individu.",
      action: "Submit Kebutuhan (Need)",
      badge: "DEMAND SIDE",
      badgeClass: "bg-[#FEBA27]/20 text-[#9A6A00] border border-[#FEBA27]/40",
      ctaLink: "/dashboard?role=customer",
      ctaText: "Buka Portal Requester",
    },
    {
      role: "Provider",
      title: "Pihak yang Memiliki Resource",
      desc: "Pihak yang memiliki lahan, produk, bahan baku, teknologi, expertise, fasilitas, akses pasar, atau peluang kemitraan.",
      actors: "Pemilik lahan, Petani produsen, Vendor teknologi, Pemilik fasilitas gudang, Asosiasi.",
      action: "Submit Resource / Opportunity",
      badge: "SUPPLY SIDE",
      badgeClass: "bg-[#126A3A]/10 text-[#126A3A] border border-[#126A3A]/20",
      ctaLink: "/dashboard?role=supplier",
      ctaText: "Buka Portal Provider",
    },
    {
      role: "AG Diebra",
      title: "Ecosystem Connector & Facilitator",
      desc: "Berperan sebagai layer kurasi: Understand → Discover → Match → Validate → Connect.",
      actors: "Tim Kurasi dan Fasilitator Ekosistem AG Diebra.",
      action: "Kurasi, Pairing, & Introduksi",
      badge: "FACILITATOR",
      badgeClass: "bg-slate-200 text-slate-800 border border-slate-300",
      ctaLink: "/dashboard?role=admin",
      ctaText: "Buka Meja Kurator",
    },
  ];

  // Core Flow from Brief PDF (Page 1-2)
  const systemFlow = [
    {
      step: "01",
      title: "Submit Need / Resource",
      desc: "User menyampaikan kebutuhan yang dicari atau resource yang dimiliki melalui formulir platform.",
    },
    {
      step: "02",
      title: "Review & Pencarian Match",
      desc: "AG Diebra memahami kriteria, meninjau database, dan mencari potensi kecocokan yang relevan.",
    },
    {
      step: "03",
      title: "Validasi Awal",
      desc: "AG Diebra melakukan validasi kelayakan teknis dan kesesuaian kapasitas dari kedua pihak.",
    },
    {
      step: "04",
      title: "Persetujuan Kedua Pihak (Consent)",
      desc: "Kemitraan diajukan kepada kedua pihak. Kolaborasi hanya berlanjut jika keduanya saling menyetujui.",
    },
    {
      step: "05",
      title: "Introduction & Kolaborasi",
      desc: "AG Diebra memfasilitasi sesi perkenalan resmi untuk diskusi teknis hingga terwujud kerja sama nyata.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Forest Green Background #101D14)                    */}
      {/* ========================================================================= */}
      <section className="relative bg-[#101D14] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Subtle grid and ambient warm glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 106, 58, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 106, 58, 0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-radial from-[#126A3A]/25 via-[#FEBA27]/10 to-transparent pointer-events-none blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FEBA27]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold">
              AG DIEBRA ECOSYSTEM PLATFORM
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            Penghubung Kebutuhan, Resource, &amp; Kolaborasi{" "}
            <span className="text-gold-gradient">Ekosistem Agribisnis</span>
          </h1>

          {/* Subtitle directly quoting PDF philosophy */}
          <p className="font-body text-base sm:text-lg text-white/75 max-w-3xl mx-auto mb-6 leading-relaxed">
            Anda tidak harus tahu harus mencari ke siapa. Cukup sampaikan kebutuhan atau
            resource yang Anda miliki, dan AG Diebra membantu menemukan serta menghubungkan
            pihak yang relevan.
          </p>

          {/* Core Philosophy Banner from PDF */}
          <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white/80">
            <p className="font-mono text-[11px] text-[#FEBA27] uppercase tracking-wider font-semibold mb-1">
              CORE PRINCIPLE:
            </p>
            <p className="italic">
              Dari: “Saya membutuhkan sesuatu, tetapi tidak tahu harus mencari ke mana.”<br />
              Menjadi: “Sampaikan kebutuhanmu kepada AG Diebra, dan kami bantu menemukan kemungkinan yang relevan.”
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/dashboard">
              <Button
                variant="primary"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
              >
                Buka Portal Dashboard
              </Button>
            </Link>
            <Link href="/mekanisme">
              <Button
                variant="dark"
                icon={<Compass className="w-3.5 h-3.5 text-[#FEBA27]" />}
              >
                Pelajari Alur Sistem
              </Button>
            </Link>
          </div>

          {/* Core Flow Bar from PDF Page 1 */}
          <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-[#14231A] border border-white/10 shadow-xl">
            <p className="font-mono text-[11px] text-white/50 uppercase tracking-widest text-center mb-3">
              THE CORE FLOW
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-display font-bold text-sm sm:text-base">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#FEBA27]">
                Need / Resource
              </span>
              <span className="text-white/40">→</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                Matching
              </span>
              <span className="text-white/40">→</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sky-400">
                Connection
              </span>
              <span className="text-white/40">→</span>
              <span className="px-3 py-1 rounded-lg bg-[#126A3A]/40 border border-[#126A3A] text-white">
                Collaboration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION: SIAPA PENGGUNANYA? (Light White Background)                   */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(18, 106, 58, 0.04) 0%, rgba(254, 186, 39, 0.03) 40%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              BAGIAN 2 • DOKUMEN BRIEF
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Siapa Pengguna Platform Ini?
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Platform dirancang untuk tiga pihak utama dalam ekosistem agar saling terhubung
              secara aman, terverifikasi, dan transparan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userRoles.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-slate-200 bg-[#F8FAF9] shadow-xs flex flex-col justify-between hover:border-[#126A3A]/40 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 font-semibold mb-4">
                    {item.title}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200/80 mb-6">
                    <p className="font-mono text-[11px] text-slate-500 uppercase tracking-wider font-bold mb-1">
                      Kategori Pihak:
                    </p>
                    <p className="font-body text-xs text-slate-600 leading-relaxed">
                      {item.actors}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <Link href={item.ctaLink} className="w-full block">
                    <button className="w-full py-2.5 px-4 rounded-full font-display text-xs font-bold transition-all flex items-center justify-center gap-2 bg-[#FEBA27] text-[#101D14] hover:bg-[#E5A720] shadow-xs cursor-pointer">
                      <span>{item.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: KATEGORI KEBUTUHAN & RESOURCE (Off-White #F8FAF9)            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              LINGKUP KEBUTUHAN &amp; RESOURCE
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Apa Saja yang Dapat Diajukan &amp; Didaftarkan?
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Kebutuhan dan resource dalam ekosistem mencakup 8 ranah utama yang dapat
              didaftarkan oleh requester maupun provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#126A3A]/40 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FEBA27]/20 border border-[#FEBA27]/40 flex items-center justify-center text-[#9A6A00] mb-4 shadow-xs">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="font-mono text-[11px] text-[#126A3A] font-semibold">
                    {item.example}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION: ALUR SISTEM & CONTOH KASUS (Light White Background)           */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-2">
              BAGIAN 3 &amp; 4 • ALUR SISTEM
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Alur Kerja: Dari Pengajuan ke Kolaborasi
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Mekanisme kurasi lima tahap yang memastikan setiap kebutuhan dipertemukan
              dengan resource yang terbukti sesuai.
            </p>
          </div>

          {/* 5-Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
            {systemFlow.map((st, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-200 bg-[#F8FAF9] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="font-display text-2xl font-extrabold text-[#126A3A] block mb-2">
                    {st.step}
                  </span>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-2">
                    {st.title}
                  </h4>
                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-200/80 text-[10px] font-mono text-slate-400">
                  Tahap {st.step} of 05
                </div>
              </div>
            ))}
          </div>

          {/* Real Case Example from Brief PDF Page 2 */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-slate-200 bg-[#F8FAF9] shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase font-bold text-[#126A3A] tracking-wider">
                CONTOH KASUS NYATA (STUDI KASUS SISTEM)
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-4">
              Simulasi Kebutuhan: “Saya membutuhkan lahan ±2 ha untuk pertanian organik.”
            </h3>

            <div className="space-y-3 font-body text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-[#9A6A00] shrink-0">1.</span>
                <p><strong>Pengajuan:</strong> User A menyampaikan kebutuhan spesifikasi lahan pertanian organik ±2 ha.</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-[#126A3A] shrink-0">2.</span>
                <p><strong>Pemahaman Kriteria:</strong> AG Diebra menelaah kriteria, status kesuburan tanah, dan riwayat kimia lahan.</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-emerald-700 shrink-0">3.</span>
                <p><strong>Pencarian Potential Match:</strong> Ditemukan Provider yang memiliki lahan ±3 ha yang memenuhi syarat organik.</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-[#9A6A00] shrink-0">4.</span>
                <p><strong>Validasi &amp; Persetujuan (Consent):</strong> AG Diebra melakukan validasi awal. Jika kedua pihak setuju, introduction difasilitasi.</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#126A3A]/10 border border-[#126A3A]/30">
                <span className="font-mono font-bold text-[#126A3A] shrink-0">5.</span>
                <p><strong>Bentuk Hasil Kolaborasi:</strong> Kerja sama lahan, Proyek budidaya bersama, Kemitraan pasokan, atau Riset gabungan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: PRINSIP PENTING (Off-White #F8FAF9)                           */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A]">
            BAGIAN 6 • KONSEP PENTING
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Platform Ini Bukan Marketplace Terbuka
          </h2>
          <p className="font-body text-slate-700 text-sm sm:text-base leading-relaxed">
            Informasi pihak yang memiliki resource tidak langsung diumbar secara bebas
            ke publik. Kami menerapkan prinsip kurasi terarah:
          </p>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center font-display font-bold text-base sm:text-lg text-slate-800 flex flex-wrap items-center justify-center gap-3">
            <span className="text-[#126A3A]">Discover</span>
            <span>→</span>
            <span className="text-[#9A6A00]">Validate</span>
            <span>→</span>
            <span className="text-emerald-600">Consent</span>
            <span>→</span>
            <span className="text-slate-900">Introduction</span>
          </div>

          <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            AG Diebra hadir sebagai <em>ecosystem layer</em> yang menjaga privasi, kualitas,
            dan komitmen kerja sama, bukan hanya tempat transaksi jual-beli spekulatif.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION: CTA / ENTRY TO DASHBOARD (Dark Forest Green Background)       */}
      {/* ========================================================================= */}
      <section className="bg-[#101D14] text-white py-20 lg:py-24 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold">
              MULAI BERKOLABORASI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Sampaikan Kebutuhan atau Resource Anda
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed">
              Masuk ke portal dashboard untuk mengajukan kebutuhan yang sedang Anda cari,
              atau daftarkan kapasitas sumber daya yang siap Anda kerjasamakan.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
}
