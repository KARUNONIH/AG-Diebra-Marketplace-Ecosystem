import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Snowflake,
  UtensilsCrossed,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Boxes,
  Compass,
  ArrowUpRight,
  FileText,
  UserCheck,
  MessageSquare,
  AlertTriangle,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const problems = [
    {
      category: "Tantangan Offtaker / Buyer",
      title: "Ketidakpastian Pasokan & Fluktuasi Mutu",
      description:
        "Pabrik pengolahan pangan dan eksportir kerap kesulitan memperoleh kepastian volume dan standar kualitas (kadar air, ukuran biji, kesegaran) yang stabil dari petani konvensional.",
      solution:
        "Standarisasi SOP budidaya, verifikasi kapasitas kelompok tani mitra, dan penelaahan spesifikasi oleh Kurator sebelum dipasangkan.",
      icon: Scale,
    },
    {
      category: "Tantangan Petani / Produsen",
      title: "Ketergantungan Tengkulak & Margin Rendah",
      description:
        "Petani produsen kerap terisolasi dari akses pasar industri berskala besar, sehingga terpaksa menjual hasil panen ke tengkulak dengan harga jauh di bawah nilai wajar pasar.",
      solution:
        "Menghubungkan kelompok tani langsung dengan offtaker bereputasi tanpa perantara bertingkat melalui kontrak kemitraan transparan.",
      icon: AlertTriangle,
    },
    {
      category: "Tantangan Infrastruktur",
      title: "Tingginya Susut Hasil Panen (Food Loss > 25%)",
      description:
        "Ketiadaan fasilitas penyimpanan berpendingin (cold storage) dan armada berinsulasi di sentra produksi menyebabkan komoditas hortikultura dan hasil bumi cepat membusuk.",
      solution:
        "Integrasi fasilitas cold storage regional dan armada pendingin ke dalam katalog pasokan ekosistem untuk menekan susut bobot di bawah 5%.",
      icon: Snowflake,
    },
  ];

  const rolePortals = [
    {
      role: "Customer / Offtaker",
      slug: "customer",
      subtitle: "Buyer Industri, Restoran, & Eksportir",
      description:
        "Bagi perusahaan atau pelaku usaha yang membutuhkan pasokan komoditas pangan, green bean kopi, bahan baku industri, atau penyewaan fasilitas armada dingin.",
      benefits: [
        "Pengajuan Kebutuhan (Need) terstruktur sesuai spesifikasi",
        "Rekomendasi supplier yang telah diverifikasi kapasitasnya",
        "Kontrol persetujuan mandiri melalui mekanisme Dual-Consent",
        "Akses langsung ke WhatsApp resmi supplier setelah disetujui",
      ],
      ctaText: "Masuk Portal Customer",
      variant: "primary" as const,
      badgeClass: "bg-[#FEBA27]/20 border border-[#FEBA27]/40 text-[#9A6A00]",
      icon: Building2,
    },
    {
      role: "Supplier / Produsen",
      slug: "supplier",
      subtitle: "Kelompok Tani, IoT & Armada Dingin",
      description:
        "Bagi kelompok tani, pemilik kebun, penyedia unit sensor smart farming, atau pemilik cold storage yang ingin memperluas jangkauan pasar.",
      benefits: [
        "Pendaftaran kapasitas panen, sarana, dan teknologi",
        "Notifikasi permintaan offtaker yang cocok dengan spesifikasi",
        "Perlindungan kepastian kerja sama lewat persetujuan dua arah",
        "Akses langsung ke WhatsApp resmi offtaker untuk transaksi",
      ],
      ctaText: "Masuk Portal Supplier",
      variant: "secondary" as const,
      badgeClass: "bg-[#126A3A]/10 border border-[#126A3A]/20 text-[#126A3A]",
      icon: Boxes,
    },
    {
      role: "Admin & Tim Kurator",
      slug: "admin",
      subtitle: "Stasiun Kerja Kurator AG Diebra",
      description:
        "Bagi tim kurasi independen yang bertugas menelaah validitas data, mencocokkan kebutuhan dengan pasokan (Pairing), dan mengawasi dual-consent.",
      benefits: [
        "Pairing Engine interaktif Kebutuhan vs Pasokan",
        "Pencatatan rationale analisis kelayakan teknis dan mutu",
        "Monitoring real-time persetujuan dari kedua belah pihak",
        "Dispatcher generator tautan resmi koordinasi WhatsApp",
      ],
      ctaText: "Buka Meja Kurator",
      variant: "dark" as const,
      badgeClass: "bg-slate-200 border border-slate-300 text-slate-800",
      icon: ShieldCheck,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Registrasi Kebutuhan / Pasokan",
      actor: "Customer & Supplier",
      desc: "Customer mendaftarkan spesifikasi kebutuhan komoditas atau fasilitas (Need). Supplier mendaftarkan kapasitas pasokan, stok panen, atau teknologi (Supply).",
    },
    {
      step: "02",
      title: "Kurasi Independen & Analisis Rationale",
      actor: "Tim Kurator AG Diebra",
      desc: "Kurator menelaah kesesuaian volume, standar mutu, toleransi kadar air, dan rute logistik sebelum membuat rekomendasi pasangan kolaborasi.",
    },
    {
      step: "03",
      title: "Peninjauan & Persetujuan Dual-Consent",
      actor: "Kedua Belah Pihak",
      desc: "Kedua pihak memeriksa profil mitra, rincian penawaran, dan catatan kurator. Kemitraan hanya terjalin bila keduanya menyatakan setuju (Approve).",
    },
    {
      step: "04",
      title: "Fasilitasi Jalur WhatsApp Resmi",
      actor: "Orkestrasi Sistem",
      desc: "Setelah disetujui bersama, platform otomatis membuatkan ruang koordinasi resmi via WhatsApp untuk finalisasi kontrak dagang dan pengiriman.",
    },
  ];

  const commodities = [
    {
      title: "Kopi Robusta & Arabika Unggulan",
      desc: "Green bean specialty, natural & honey process dari kelompok tani mitra Sukamakmur dan Jawa Barat.",
      icon: Layers,
    },
    {
      title: "Hortikultura & Sayuran Segar",
      desc: "Cabai, tomat, dan sayuran daun sortasi standar industri dengan jaminan kesegaran harian.",
      icon: UtensilsCrossed,
    },
    {
      title: "Smart Farming & IoT Fertigasi",
      desc: "Sensor kelembapan tanah presisi, stasiun mikroklimat, dan otomatisasi nutrisi tanaman.",
      icon: Cpu,
    },
    {
      title: "Cold Storage & Armada Berpendingin",
      desc: "Penyimpanan suhu terkontrol (0°C s.d. 4°C) dan armada cold truck untuk menjaga rantai dingin.",
      icon: Snowflake,
    },
    {
      title: "Hilirisasi Produk Pangan",
      desc: "Pengolahan pasca panen menjadi tepung komoditas, bubuk kopi kemasan, dan produk turunan higienis.",
      icon: TrendingUp,
    },
    {
      title: "Akses Ekspor & Fitosanitari",
      desc: "Fasilitasi uji residu pestisida, sertifikasi fitosanitari, dan pembukaan akses buyer internasional.",
      icon: Globe2,
    },
  ];

  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Forest Green Background #101D14)                    */}
      {/* ========================================================================= */}
      <section className="relative bg-[#101D14] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Atmospheric grid & glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18, 106, 58, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 106, 58, 0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-radial from-[#126A3A]/25 via-[#FEBA27]/10 to-transparent pointer-events-none blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FEBA27]" />
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
              PROGRAM EKOSISTEM AGRIBISNIS TERPADU • BATCH 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            Platform Marketplace &amp; Kurasi Kemitraan{" "}
            <span className="text-gold-gradient">Agribisnis Indonesia</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed">
            Menghubungkan kebutuhan offtaker industri dengan pasokan kelompok tani
            unggulan, teknologi smart farming, dan logistik rantai dingin (cold chain)
            melalui kurasi presisi dan sistem persetujuan dua arah (Dual-Consent).
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/dashboard">
              <Button
                variant="primary"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
              >
                Masuk ke Dashboard Program
              </Button>
            </Link>
            <a href="#mekanisme">
              <Button
                variant="dark"
                icon={<Compass className="w-3.5 h-3.5 text-[#FEBA27]" />}
              >
                Pelajari Mekanisme Kerja
              </Button>
            </a>
          </div>

          {/* 3 Metric / Guarantee Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-xl bg-[#14231A] border border-white/10 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-[#FEBA27]/20 border border-[#FEBA27]/40 flex items-center justify-center mb-3 text-[#FEBA27]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">
                100% Terkurasi Independen
              </h4>
              <p className="font-body text-xs text-white/60 leading-relaxed">
                Bukan bursa liar tanpa verifikasi; seluruh data kebutuhan dan kapasitas
                ditelaah langsung oleh Kurator AG Diebra.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14231A] border border-white/10 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-3 text-emerald-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">
                Mekanisme Dual-Consent
              </h4>
              <p className="font-body text-xs text-white/60 leading-relaxed">
                Menjamin kenyamanan mitra: kolaborasi hanya aktif bila offtaker dan
                supplier saling menyetujui rincian kerja sama.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14231A] border border-white/10 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center mb-3 text-[#D4AF37]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">
                Jalur Resmi WhatsApp Bisnis
              </h4>
              <p className="font-body text-xs text-white/60 leading-relaxed">
                Memangkas hambatan birokrasi komunikasi dengan memfasilitasi kontak
                langsung via WhatsApp resmi terverifikasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION: LATAR BELAKANG & TANTANGAN SEKTORAL (Light Background)        */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
        {/* Soft ambient glow from agdiebra.com */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(18, 106, 58, 0.04) 0%, rgba(254, 186, 39, 0.03) 40%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-3">
              LATAR BELAKANG &amp; TANTANGAN
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Mengapa Program Ekosistem Ini Dibentuk?
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Rantai pasok agribisnis konvensional saat ini mengalami ketimpangan
              struktural: pembeli kesulitan menjaga stabilitas mutu pasokan, sementara
              petani terjebak harga rendah dan susut bobot panen yang masif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-xl border border-slate-200 bg-[#F8FAF9] relative overflow-hidden flex flex-col justify-between hover:border-[#126A3A]/40 transition-colors duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase font-bold text-[#126A3A] tracking-wider">
                      {prob.category}
                    </span>
                    <div className="w-10 h-10 rounded bg-[#FEBA27]/20 border border-[#FEBA27]/40 flex items-center justify-center flex-shrink-0 text-[#9A6A00] shadow-xs">
                      <prob.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {prob.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <p className="font-mono text-[11px] text-[#126A3A] font-bold uppercase tracking-wider mb-1">
                    Solusi Terpadu Platform:
                  </p>
                  <p className="font-body text-xs text-slate-700 leading-relaxed">
                    {prob.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION: TIGA PERAN DALAM PROGRAM (Off-White Background #F8FAF9)       */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-3">
              PARTISIPAN &amp; STASIUN KERJA
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Tiga Peran Strategis dalam Program
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Setiap pihak mendapatkan ruang kerja (dashboard) khusus yang disesuaikan
              dengan kebutuhan bisnis dan tanggung jawab operasional masing-masing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rolePortals.map((role) => (
              <div
                key={role.slug}
                className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white hover:border-[#126A3A]/40 transition-colors duration-300 relative overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${role.badgeClass}`}>
                      {role.role}
                    </span>
                    <div className="w-10 h-10 rounded bg-[#FEBA27]/20 border border-[#FEBA27]/40 flex items-center justify-center flex-shrink-0 text-[#9A6A00] shadow-xs">
                      <role.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                    {role.role}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 mb-4">
                    {role.subtitle}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {role.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <p className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Fungsi &amp; Kapabilitas Utama:
                    </p>
                    {role.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link href={`/dashboard?role=${role.slug}`} className="w-full block">
                    <button className="w-full py-2.5 px-4 rounded-full font-display text-xs font-bold transition-all flex items-center justify-center gap-2 bg-[#FEBA27] text-[#101D14] hover:bg-[#E5A720] shadow-xs cursor-pointer">
                      <span>{role.ctaText}</span>
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
      {/* 4. SECTION: MEKANISME KERJA 4 TAHAP (White Background)                     */}
      {/* ========================================================================= */}
      <section id="mekanisme" className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-3">
              SOP &amp; MEKANISME KERJA
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Alur Kerja Kolaborasi: Dari Form ke WhatsApp
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Mekanisme empat langkah yang memastikan setiap kolaborasi didasarkan
              pada kesepakatan transparan dan kepatuhan standar mutu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-200 bg-[#F8FAF9] flex flex-col justify-between hover:border-[#126A3A]/40 transition-colors duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-extrabold text-[#126A3A]">
                      {st.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FEBA27]/20 text-[#9A6A00]">
                      Tahap {st.step}
                    </span>
                  </div>

                  <p className="font-mono text-xs uppercase font-bold text-slate-500 mb-1">
                    {st.actor}
                  </p>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#126A3A]" />
                  <span>SOP Terstandarisasi</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION: FOKUS KOMODITAS & KAPASITAS (Off-White #F8FAF9)               */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-3">
              RUANG LINGKUP PROGRAM
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Fokus Komoditas &amp; Solusi yang Difasilitasi
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Program memprioritaskan komoditas bernilai komersial tinggi dan infrastruktur
              rantai pasok pendukung untuk menjamin efisiensi hulu hingga hilir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commodities.map((item, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#126A3A]/40 transition-colors duration-300 shadow-xs flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FEBA27]/20 border border-[#FEBA27]/40 flex items-center justify-center flex-shrink-0 text-[#9A6A00] shadow-xs">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION: KEUNTUNGAN TERUKUR BAGI MITRA (White Background)              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[#126A3A] mb-3">
              NILAI TAMBAH
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Keuntungan Nyata bagi Peserta Program
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Membangun kerja sama yang berkeadilan dan saling menguntungkan secara berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Customer Value */}
            <div className="p-8 rounded-xl border border-slate-200 bg-[#F8FAF9] shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEBA27]/20 text-[#9A6A00] text-xs font-mono font-bold mb-4">
                KEUNTUNGAN BAGI CUSTOMER (BUYER)
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                Kepastian Mutu &amp; Akses Langsung
              </h3>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Dapatkan komoditas sesuai spesifikasi kadar air dan sortasi ketat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Harga langsung produsen yang transparan tanpa rantai spekulan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Jaminan ketersediaan armada cold storage untuk komoditas sensitif suhu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Validasi profil supplier oleh kurator independen AG Diebra.</span>
                </li>
              </ul>
            </div>

            {/* Supplier Value */}
            <div className="p-8 rounded-xl border border-slate-200 bg-[#F8FAF9] shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#126A3A]/10 text-[#126A3A] text-xs font-mono font-bold mb-4">
                KEUNTUNGAN BAGI SUPPLIER (PETANI)
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                Kepastian Pasar &amp; Nilai Wajar
              </h3>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Akses langsung ke offtaker industri, restoran, dan eksportir resmi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Kepastian penyerapan panen dengan harga kesepakatan transparan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Dukungan pendampingan teknologi smart farming dan logistik dingin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126A3A] shrink-0 mt-0.5" />
                  <span>Perlindungan hak mitra lewat mekanisme persetujuan dua arah.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION: CTA / ENTRY TO DASHBOARD (Dark Forest Green Background)       */}
      {/* ========================================================================= */}
      <section className="bg-[#101D14] text-white py-20 lg:py-24 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold">
              MULAI KOLABORASI SEKARANG
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Akses Stasiun Kerja Sesuai Peran Anda
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed">
              Ajukan kebutuhan komoditas Anda atau daftarkan kapasitas pasokan panen
              dan fasilitas armada Anda ke dalam database ekosistem kami.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link href="/dashboard?role=customer">
                <Button
                  variant="primary"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
                >
                  Buka Portal Customer (Need)
                </Button>
              </Link>
              <Link href="/dashboard?role=supplier">
                <Button
                  variant="secondary"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#126A3A]" />}
                >
                  Buka Portal Supplier (Supply)
                </Button>
              </Link>
              <Link href="/dashboard?role=admin">
                <Button
                  variant="dark"
                  icon={<ShieldCheck className="w-3.5 h-3.5 text-[#FEBA27]" />}
                >
                  Buka Meja Kurator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
