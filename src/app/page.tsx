import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Snowflake,
  UtensilsCrossed,
  Globe2,
  Lightbulb,
  Handshake,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Users,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const pillars = [
    {
      title: "Agribusiness",
      subtitle: "Hulu & Budi Daya Unggul",
      description:
        "Pilar inti penguatan kapasitas produksi petani mitra melalui standarisasi GAP (Good Agricultural Practices) dan bibit bersertifikasi.",
      image: "/images/ecosystem/ecosystem-agribusiness.webp",
      icon: Layers,
      tag: "CORE SECTOR",
    },
    {
      title: "Technology",
      subtitle: "Smart Farming & IoT",
      description:
        "Implementasi sensor tanah presisi, irigasi fertigasi otomatis, dan instrumentasi mikroklimat untuk efisiensi input budidaya.",
      image: "/images/ecosystem/ecosystem-technology.webp",
      icon: Cpu,
      tag: "AUTOMATION",
    },
    {
      title: "AI & Data",
      subtitle: "Kecerdasan Prediktif",
      description:
        "Analisis tren harga pasar, peramalan waktu panen optimal, serta algoritma pencocokan kebutuhan pembeli dan pasokan produsen.",
      image: "/images/ecosystem/ecosystem-AI.webp",
      icon: TrendingUp,
      tag: "INTELLIGENCE",
    },
    {
      title: "Logistics",
      subtitle: "Rantai Pasok & Cold Chain",
      description:
        "Jaringan fasilitas cold storage, armada kontainer berpendingin, dan rute distribusi agribisnis untuk menekan susut bobot di bawah 5%.",
      image: "/images/ecosystem/ecosystem-logistics.webp",
      icon: Snowflake,
      tag: "INFRASTRUCTURE",
    },
    {
      title: "Food Industry",
      subtitle: "Hilirisasi & Pengolahan",
      description:
        "Transformasi hasil bumi segar menjadi produk pangan olahan bermutu tinggi dengan umur simpan panjang dan standar higienis industri.",
      image: "/images/ecosystem/ecosystem-food.webp",
      icon: UtensilsCrossed,
      tag: "VALUE ADDED",
    },
    {
      title: "Export & Trade",
      subtitle: "Akses Pasar Global",
      description:
        "Fasilitasi sertifikasi mutu internasional, kepatuhan fitosanitari, dan pembukaan jalur ekspor ke Timur Tengah, Asia, dan Eropa.",
      image: "/images/ecosystem/ecosystem-trade.webp",
      icon: Globe2,
      tag: "MARKET ACCESS",
    },
    {
      title: "Product Innovation",
      subtitle: "Riset Formulasi Produk",
      description:
        "Inovasi produk turunan komoditas lokal bernilai komersial tinggi melalui uji laboratorium dan kemasan ramah lingkungan.",
      image: "/images/ecosystem/ecosystem-product.webp",
      icon: Lightbulb,
      tag: "R&D INNOVATION",
    },
    {
      title: "Strategic Partnership",
      subtitle: "Kolaborasi Multi-Pihak",
      description:
        "Sinergi terpadu antara kelompok tani, lembaga riset/akademisi, offtaker industri, dan institusi pembiayaan agribisnis.",
      image: "/images/ecosystem/ecosystem-partneship.webp",
      icon: Handshake,
      tag: "ECOSYSTEM",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Registrasi Kebutuhan / Pasokan",
      role: "Customer & Supplier",
      description:
        "Customer (offtaker/buyer) mendaftarkan spesifikasi kebutuhan komoditas, armada, atau alat. Supplier (petani/produsen) mendaftarkan kapasitas pasokan yang tersedia.",
      badge: "SUBMISSION",
      badgeColor: "gold" as const,
    },
    {
      number: "02",
      title: "Kurasi Presisi & Penelaahan Rationale",
      role: "Ecosystem Curator",
      description:
        "Tim kurator AG Diebra menganalisis kesesuaian kapasitas teknis, standar mutu, lokasi logistik, dan kelayakan harga sebelum membuat pasangan kolaborasi.",
      badge: "CURATION",
      badgeColor: "emerald" as const,
    },
    {
      number: "03",
      title: "Dual-Consent & Introduksi WhatsApp",
      role: "Kedua Belah Pihak & Admin",
      description:
        "Kedua mitra meninjau profil dan menyetujui (Dual Consent). Setelah disetujui bersama, sistem otomatis menghubungkan ruang koordinasi resmi via WhatsApp.",
      badge: "CONNECTED",
      badgeColor: "green" as const,
    },
  ];

  const rolePortals = [
    {
      role: "Customer / Offtaker",
      slug: "customer",
      subtitle: "Buyer & Industri Pengguna",
      description:
        "Ajukan kebutuhan komoditas, sewa cold chain, atau pengadaan teknologi. Dapatkan rekomendasi pasokan terkurasi dengan jaminan mutu.",
      features: [
        "Pengajuan Kebutuhan (Need) terstruktur",
        "Pemantauan status kurasi & matching",
        "Panel persetujuan (Dual-Consent)",
        "Tautan WhatsApp langsung ke supplier terverifikasi",
      ],
      cta: "Masuk Portal Customer",
      badgeVariant: "gold" as const,
      color: "border-[#FEBA27]/30 hover:border-[#FEBA27]",
      accentText: "text-[#FEBA27]",
    },
    {
      role: "Supplier / Produsen",
      slug: "supplier",
      subtitle: "Kelompok Tani, IoT & Logistik",
      description:
        "Daftarkan hasil panen, unit smart farming, atau fasilitas pendingin Anda. Terhubung langsung dengan offtaker bereputasi tanpa perantara berbelit.",
      features: [
        "Pendaftaran Pasokan (Supply/Asset) mudah",
        "Katalog kapasitas & sertifikasi mutu",
        "Notifikasi permintaan offtaker yang cocok",
        "Panel persetujuan (Dual-Consent) transparan",
      ],
      cta: "Masuk Portal Supplier",
      badgeVariant: "emerald" as const,
      color: "border-emerald-500/30 hover:border-emerald-500",
      accentText: "text-emerald-400",
    },
    {
      role: "Admin & Kurator Ekosistem",
      slug: "admin",
      subtitle: "Stasiun Kerja Kurator AG Diebra",
      description:
        "Ruang kendali orkestrasi: telaah data kebutuhan dan pasokan, lakukan pairing presisi, pantau status persetujuan, dan kirim introduksi WhatsApp.",
      features: [
        "Monitoring metrik & analitik ekosistem",
        "Pairing engine Kebutuhan vs Pasokan",
        "Verifikasi catatan telaah & kelayakan",
        "Otomasi dispatch link WhatsApp resmi",
      ],
      cta: "Buka Meja Kurator",
      badgeVariant: "slate" as const,
      color: "border-[#D4AF37]/30 hover:border-[#D4AF37]",
      accentText: "text-[#D4AF37]",
    },
  ];

  return (
    <div className="space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 text-center max-w-7xl mx-auto px-6 overflow-hidden">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#126A3A]/20 border border-[#126A3A]/40 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FEBA27]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#FEBA27] font-bold">
            From Fragmentation to One Ecosystem
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.12]">
          Building the future of{" "}
          <span className="text-gold-gradient block sm:inline">
            Agribusiness Ecosystems.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          AG Diebra empowers sustainable growth through innovation, technology,
          and collaboration. Platform terpadu yang memadukan kebutuhan petani,
          teknologi presisi, fasilitas logistik dingin, dan hilirisasi ekspor
          dalam satu wadah kurasi terpercaya.
        </p>

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
          <a href="#pillars">
            <Button
              variant="dark"
              icon={<Compass className="w-3.5 h-3.5 text-[#FEBA27]" />}
            >
              Jelajahi 8 Pilar
            </Button>
          </a>
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          <Card variant="glass-elevated" className="p-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#FEBA27] font-semibold mb-1">
              Hulu &amp; Budi Daya
            </p>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Agribusiness Ecosystem
            </h3>
            <p className="font-body text-xs text-white/60 leading-relaxed">
              Integrated value creation: Penguatan kapasitas petani, standarisasi mutu,
              dan kepastian pasokan komoditas pangan nasional.
            </p>
          </Card>

          <Card variant="glass-elevated" className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#FEBA27]/10 border border-[#FEBA27]/20 flex items-center justify-center mb-4 text-[#FEBA27]">
              <Cpu className="w-5 h-5" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mb-1">
              Teknologi Presisi
            </p>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Technology &amp; Innovation
            </h3>
            <p className="font-body text-xs text-white/60 leading-relaxed">
              AI driven transformation: Sensor mikroklimat tanah, fertigasi cerdas,
              dan analitik rantai pasok berbasis data real-time.
            </p>
          </Card>

          <Card variant="glass-elevated" className="p-6">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 text-sky-400">
              <Handshake className="w-5 h-5" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
              Kemitraan Terpadu
            </p>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Strategic Collaboration
            </h3>
            <p className="font-body text-xs text-white/60 leading-relaxed">
              Research • Industry • Community: Menghubungkan riset akademisi,
              kebutuhan industri offtaker, dan kelompok tani berdaya.
            </p>
          </Card>
        </div>
      </section>

      {/* 2. RUNNING SECTOR MARQUEE / TICKER */}
      <section className="relative w-full border-y border-white/10 bg-[#14231A]/70 py-4 overflow-hidden backdrop-blur-md">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[
            "HULU AGRIBISNIS BERKELANJUTAN",
            "SMART FARMING & SENSOR IOT",
            "PREDIKTIF AI & ANALISIS PASAR",
            "RANTAI PASOK LOGISTIK BERPENDINGIN",
            "HILIRISASI & INDUSTRI PANGAN",
            "AKSES EKSPOR TIMUR TENGAH & ASIA",
            "RISET & INOVASI PRODUK TURUNAN",
            "KEMITRAAN MULTI-PIHAK NASIONAL",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-white/80">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEBA27] shadow-[0_0_8px_rgba(254,186,39,0.8)]" />
            </div>
          ))}
          {/* Duplicate set for seamless continuous loop */}
          {[
            "HULU AGRIBISNIS BERKELANJUTAN",
            "SMART FARMING & SENSOR IOT",
            "PREDIKTIF AI & ANALISIS PASAR",
            "RANTAI PASOK LOGISTIK BERPENDINGIN",
            "HILIRISASI & INDUSTRI PANGAN",
            "AKSES EKSPOR TIMUR TENGAH & ASIA",
            "RISET & INOVASI PRODUK TURUNAN",
            "KEMITRAAN MULTI-PIHAK NASIONAL",
          ].map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-white/80">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEBA27] shadow-[0_0_8px_rgba(254,186,39,0.8)]" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. SPOTLIGHT SECTION: FROM FRAGMENTATION TO ONE ECOSYSTEM */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <Image
                src="/images/ecosystem/ecosystem-agribusiness.webp"
                alt="Agribusiness Ecosystem"
                width={800}
                height={600}
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D14] via-[#101D14]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs text-[#FEBA27] uppercase tracking-wider font-bold block mb-1">
                  1 / 8 • Core Foundation
                </span>
                <p className="font-display text-xl font-bold text-white">
                  Konsolidasi Lahan &amp; Standarisasi Komoditas Mitra
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEBA27]/10 border border-[#FEBA27]/30 text-[#FEBA27] text-xs font-mono mb-4 font-bold">
                TRANSFORMASI NILAI AGRIBISNIS
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                From Fragmentation to One Living Ecosystem.
              </h2>
            </div>

            <p className="font-body text-base text-white/70 leading-relaxed">
              Selama puluhan tahun, sektor pertanian Indonesia terbebani oleh
              fragmentasi: petani kesulitan mengakses pasar offtaker yang adil,
              industri pengolahan kekurangan pasokan bermutu stabil, dan rantai
              logistik konvensional menyebabkan susut hasil panen hingga 30%.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#14231A] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">
                    Pencocokan Presisi Terkurasi
                  </h4>
                  <p className="font-body text-xs text-white/60 mt-1">
                    Bukan sekadar papan iklan jual-beli, melainkan kurasi manual &amp; cerdas
                    yang mencocokkan kapasitas teknis, standar mutu, dan kepatuhan waktu kirim.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#14231A] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#FEBA27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">
                    Dual-Consent &amp; Transparansi Hubungan
                  </h4>
                  <p className="font-body text-xs text-white/60 mt-1">
                    Kolaborasi hanya terjalin bila pemohon kebutuhan dan penyedia pasokan
                    saling menyetujui profil dan ketentuan kerja sama secara eksplisit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#14231A] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">
                    Integrasi WhatsApp Bisnis Langsung
                  </h4>
                  <p className="font-body text-xs text-white/60 mt-1">
                    Mekanisme introduksi otomatis membuka ruang koordinasi langsung di WhatsApp
                    dengan nomor resmi, memangkas birokrasi komunikasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 8 PILLARS OF ECOSYSTEM ("Enter the Ecosystem") */}
      <section id="pillars" className="max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4 font-bold">
            THE ARCHITECTURE
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Enter the Ecosystem.
          </h2>
          <p className="font-body text-base text-white/70">
            Eight Pillar. One living ecosystem. Each one is operating right now.
            Seluruh pilar terhubung untuk memastikan keberlanjutan nilai agribisnis dari hulu ke hilir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-[#14231A] border border-white/10 hover:border-[#FEBA27]/50 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-lg"
            >
              {/* Pillar Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14231A] via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#101D14]/90 text-[#FEBA27] border border-[#FEBA27]/30">
                    {pillar.tag}
                  </span>
                </div>
              </div>

              {/* Pillar Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#FEBA27]">
                    <pillar.icon className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs text-white/65 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-emerald-400">
                    Operasional Aktif
                  </span>
                  <Link
                    href="/dashboard"
                    className="text-[#FEBA27] hover:underline flex items-center gap-1 font-medium"
                  >
                    Eksplorasi <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COLLABORATION WORKFLOW ("How It Works") */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEBA27]/10 border border-[#FEBA27]/30 text-[#FEBA27] text-xs font-mono mb-4 font-bold">
            ALUR KERJA PLATFORM
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Mekanisme Kolaborasi &amp; Kurasi Terpadu
          </h2>
          <p className="font-body text-base text-white/70">
            Tiga tahapan transparan yang menghubungkan kebutuhan offtaker dengan pasokan produsen
            melalui kurasi manusia dan teknologi cerdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              variant="glass-elevated"
              className="relative p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl font-extrabold text-gold-gradient">
                    {step.number}
                  </span>
                  <Badge variant={step.badgeColor}>{step.badge}</Badge>
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-[#FEBA27] font-bold mb-2">
                  {step.role}
                </p>

                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="font-body text-sm text-white/65 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-white/50">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Terverifikasi di Database Ekosistem</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. ROLE-BASED DASHBOARD PORTALS (Customer, Supplier, Admin) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4 font-bold">
            WORKSPACE SESUAI PERAN
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Pilih Peran Anda di Ekosistem
          </h2>
          <p className="font-body text-base text-white/70">
            Masuk ke stasiun kerja yang disesuaikan khusus untuk kebutuhan spesifik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rolePortals.map((portal) => (
            <div
              key={portal.slug}
              className={`rounded-2xl p-8 bg-[#14231A] border transition-all duration-300 flex flex-col justify-between shadow-xl ${portal.color}`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant={portal.badgeVariant}>{portal.role}</Badge>
                  <span className={`font-mono text-xs font-bold ${portal.accentText}`}>
                    PORTAL
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {portal.role}
                  </h3>
                  <p className="font-mono text-xs text-white/50 mb-3">
                    {portal.subtitle}
                  </p>
                  <p className="font-body text-xs text-white/70 leading-relaxed">
                    {portal.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <p className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
                    Fitur &amp; Kapabilitas:
                  </p>
                  {portal.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${portal.accentText} shrink-0`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link href={`/dashboard?role=${portal.slug}`} className="w-full block">
                  <Button
                    variant={portal.slug === "customer" ? "primary" : portal.slug === "supplier" ? "secondary" : "dark"}
                    className="w-full justify-center"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {portal.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. THE JOURNEY SO FAR & ROADMAP */}
      <section className="max-w-7xl mx-auto px-6">
        <Card variant="glass-elevated" className="p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs text-[#FEBA27] uppercase tracking-widest font-bold">
                THE JOURNEY SO FAR
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                “Our journey has only just begun.”
              </h2>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Dimulai dari riset budidaya kopi dan hortikultura di Jawa Barat,
                AG Diebra kini melangkah membangun infrastruktur kolaborasi digital
                terpadu. Kami memastikan setiap rantai komoditas mendapatkan perlakuan mutu terbaik
                hingga menembus pasar internasional.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5">
                  <p className="font-mono text-xs text-white/50">Fase 1</p>
                  <p className="font-display font-bold text-white text-sm">Konsolidasi Hulu</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5">
                  <p className="font-mono text-xs text-[#FEBA27]">Fase 2 (Sekarang)</p>
                  <p className="font-display font-bold text-[#FEBA27] text-sm">Platform &amp; Kurasi</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5">
                  <p className="font-mono text-xs text-white/50">Fase 3</p>
                  <p className="font-display font-bold text-white text-sm">Ekspor &amp; Skalabilitas</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end gap-4">
              <Link href="/requests/create">
                <Button
                  variant="primary"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
                >
                  Ajukan Kebutuhan Komoditas
                </Button>
              </Link>
              <Link href="/resources/create">
                <Button
                  variant="dark"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#FEBA27]" />}
                >
                  Daftarkan Pasokan Anda
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* 8. FINAL CONVERSION: BECOME PART OF THE NEXT CHAPTER */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl p-10 sm:p-16 bg-gradient-to-b from-[#14231A] to-[#101D14] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          {/* Ambient glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#126A3A]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <span className="font-mono text-xs text-[#FEBA27] uppercase tracking-widest font-bold">
              BECOME PART OF THE NEXT CHAPTER
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
              Siap Bergabung dalam Ekosistem Agribisnis Terpadu?
            </h2>
            <p className="font-body text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah bersama ratusan kelompok tani mitra, penyedia teknologi inovatif,
              dan pelaku industri pangan di seluruh Indonesia.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button
                  variant="primary"
                  icon={<ArrowRight className="w-4 h-4 text-[#101D14]" />}
                >
                  Buka Semua Portal Dashboard
                </Button>
              </Link>
              <a
                href="https://wa.me/628132120725?text=Halo%20AG%20Diebra,%20saya%20tertarik%20berkolaborasi%20dalam%20ekosistem%20agribisnis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  icon={<ArrowUpRight className="w-4 h-4 text-[#126A3A]" />}
                >
                  Konsultasi Kemitraan (WhatsApp)
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
