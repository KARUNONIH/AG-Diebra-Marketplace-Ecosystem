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
  UserCheck,
  Layers,
  Sprout,
  Activity,
} from "lucide-react";

export default function HomePage() {
  // 8 Resource & Need categories strictly from Brief PDF (Page 1-2)
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
      example: "Contoh: Pasokan bahan baku reguler",
    },
    {
      title: "Teknologi & Inovasi Pertanian",
      desc: "Perangkat smart farming, instrumentasi sensor, alsintan modern, dan perangkat lunak agribisnis.",
      icon: Cpu,
      example: "Contoh: Sistem irigasi presisi & sensor",
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
      example: "Contoh: Proyek konsorsium hulu-hilir",
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
      {/* 1. HERO SECTION (Identical visual structure to agdiebra.com HeroSection)  */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden min-h-[75dvh] lg:min-h-[760px] flex items-center justify-center bg-[#101D14]">
        {/* Background gradient base */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #16261A 0%, #101D14 100%)",
          }}
        >
          {/* Authentic image layer with scale */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80')] bg-cover bg-center scale-110"
            style={{ zIndex: 0 }}
          />

          {/* Green overlay matching agdiebra.com */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 0,
              background:
                "linear-gradient(180deg, rgba(16,29,20,0.85) 0%, rgba(16,29,20,0.7) 50%, rgba(16,29,20,0.95) 100%)",
            }}
          />

          {/* Mesh grid overlay */}
          <div className="absolute inset-0 mesh-grid opacity-25 pointer-events-none select-none" />
        </div>

        {/* Content layer */}
        <div className="relative z-10 w-full flex items-center justify-center pt-28 lg:pt-36 pb-20 lg:pb-32">
          <div className="container-main w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left headline column */}
              <div className="lg:col-span-7 text-center lg:text-left relative">
                {/* Warm radial light behind headline */}
                <div
                  className="absolute -top-20 -left-20 w-[150%] h-[150%] pointer-events-none select-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Eyebrow */}
                <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#FEBA27] mb-4">
                  AG DIEBRA ECOSYSTEM PLATFORM
                </p>

                {/* Main Headline */}
                <h1 className="font-display font-bold text-white leading-[1.08] tracking-[-0.02em] mb-4 lg:mb-6 text-[clamp(32px,5vw,60px)]">
                  Connecting Needs &amp; Resources in<br />
                  <span className="text-gold-gradient">Agribusiness Ecosystem.</span>
                </h1>

                {/* Subtext directly from Brief PDF */}
                <p className="font-body text-[clamp(15px,1.1vw,18px)] text-white/75 max-w-xl leading-relaxed font-light mb-8 text-center lg:text-left mx-auto lg:mx-0">
                  User tidak harus tahu harus mencari ke siapa. Cukup sampaikan kebutuhan
                  atau resource yang Anda miliki, kemudian AG Diebra membantu menemukan
                  dan menghubungkan pihak yang relevan.
                </p>

                {/* Action buttons with signature .btn-partner styling */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                  <Link href="/dashboard" className="btn-partner btn-partner--primary">
                    <span>Buka Portal Dashboard</span>
                    <span className="btn-partner__icon" aria-hidden="true">
                      <ArrowRight className="btn-partner__icon-svg w-3 h-3 text-[#101D14]" />
                      <ArrowRight className="btn-partner__icon-svg btn-partner__icon-svg--copy w-3 h-3 text-[#101D14]" />
                    </span>
                  </Link>

                  <Link href="/mekanisme" className="btn-partner btn-partner--secondary">
                    <span>Pelajari Alur Sistem</span>
                    <span className="btn-partner__icon" aria-hidden="true">
                      <ArrowRight className="btn-partner__icon-svg w-3 h-3 text-[#126A3A]" />
                      <ArrowRight className="btn-partner__icon-svg btn-partner__icon-svg--copy w-3 h-3 text-[#126A3A]" />
                    </span>
                  </Link>
                </div>

                {/* Core Flow Micro Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-[#D4AF37]/20 text-xs font-mono text-white/70">
                  <Sparkles className="w-3.5 h-3.5 text-[#FEBA27]" />
                  <span>Core Flow: Need/Resource → Matching → Connection → Collaboration</span>
                </div>
              </div>

              {/* Right column: Floating Information Cards matching agdiebra.com */}
              <div className="lg:col-span-5 space-y-4">
                {/* Floating Card 1: Requester */}
                <div className="group relative rounded-xl border border-[#D4AF37]/15 bg-white/[0.03] backdrop-blur-md p-5 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all duration-300 shadow-xl overflow-hidden">
                  <div className="card-shimmer" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FEBA27]/10 border border-[#FEBA27]/25 flex items-center justify-center text-[#FEBA27] shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#FEBA27] uppercase tracking-widest font-semibold block mb-1">
                        DEMAND • REQUESTER
                      </span>
                      <h4 className="font-display font-bold text-white text-base mb-1">
                        Memiliki Kebutuhan Riil
                      </h4>
                      <p className="font-body text-xs text-white/65 leading-relaxed">
                        Perusahaan, startup, petani, atau peneliti yang mencari lahan, bahan baku, teknologi, ahli, pasar, atau pendanaan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2: Provider */}
                <div className="group relative rounded-xl border border-[#D4AF37]/15 bg-white/[0.03] backdrop-blur-md p-5 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all duration-300 shadow-xl overflow-hidden">
                  <div className="card-shimmer" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                      <Boxes className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-semibold block mb-1">
                        SUPPLY • PROVIDER
                      </span>
                      <h4 className="font-display font-bold text-white text-base mb-1">
                        Memiliki Resource / Peluang
                      </h4>
                      <p className="font-body text-xs text-white/65 leading-relaxed">
                        Pihak pemilik lahan nganggur/produktif, hasil panen, alat teknologi, fasilitas gudang, atau akses pasar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 3: AG Diebra Role */}
                <div className="group relative rounded-xl border border-[#D4AF37]/15 bg-white/[0.03] backdrop-blur-md p-5 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all duration-300 shadow-xl overflow-hidden">
                  <div className="card-shimmer" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold block mb-1">
                        ECOSYSTEM LAYER • FACILITATOR
                      </span>
                      <h4 className="font-display font-bold text-white text-base mb-1">
                        Kurasi Terarah &amp; Dual-Consent
                      </h4>
                      <p className="font-body text-xs text-white/65 leading-relaxed">
                        Understand → Discover → Match → Validate → Connect. Bukan marketplace terbuka; privasi dan kesepakatan terjaga.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION: SIAPA PENGGUNANYA? (Clean Light Background)                   */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(18, 106, 58, 0.04) 0%, rgba(254, 186, 39, 0.03) 40%, transparent 70%)",
          }}
        />

        <div className="container-main relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-bold text-[#126A3A] mb-2">
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
                  <Link href={item.ctaLink} className="btn-partner btn-partner--primary w-full justify-center">
                    <span>{item.ctaText}</span>
                    <span className="btn-partner__icon" aria-hidden="true">
                      <ArrowRight className="btn-partner__icon-svg w-3 h-3 text-[#101D14]" />
                      <ArrowRight className="btn-partner__icon-svg btn-partner__icon-svg--copy w-3 h-3 text-[#101D14]" />
                    </span>
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
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-bold text-[#126A3A] mb-2">
              LINGKUP KEBUTUHAN &amp; RESOURCE
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Kategori yang Dapat Diajukan &amp; Didaftarkan
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Mencakup 8 ranah utama yang tercantum dalam dokumen konsep sistem AG Diebra.
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
      {/* 4. SECTION: ALUR SISTEM & STUDI KASUS (Clean White Background)           */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-bold text-[#126A3A] mb-2">
              BAGIAN 3 &amp; 4 • ALUR SISTEM
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Alur Kerja: Dari Pengajuan ke Kolaborasi
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Mekanisme kurasi bertahap yang memastikan setiap kebutuhan dipertemukan
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
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-[#9A6A00] shrink-0">1.</span>
                <p><strong>Pengajuan:</strong> User A menyampaikan kebutuhan spesifikasi lahan pertanian organik ±2 ha.</p>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-[#126A3A] shrink-0">2.</span>
                <p><strong>Pemahaman Kriteria:</strong> AG Diebra menelaah kriteria, status kesuburan tanah, dan riwayat kimia lahan.</p>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-emerald-700 shrink-0">3.</span>
                <p><strong>Pencarian Potential Match:</strong> Ditemukan Provider yang memiliki lahan ±3 ha yang berpotensi sesuai.</p>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                <span className="font-mono font-bold text-[#9A6A00] shrink-0">4.</span>
                <p><strong>Validasi &amp; Persetujuan (Consent):</strong> AG Diebra memvalidasi awal. Jika kedua pihak setuju, perkenalan resmi difasilitasi.</p>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#126A3A]/10 border border-[#126A3A]/30">
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
        <div className="container-main text-center space-y-6 max-w-4xl mx-auto">
          <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase font-bold text-[#126A3A]">
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
      {/* 6. CTA SECTION (Exact styling from agdiebra.com JourneyTimeline CTA)      */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-28 bg-[#F8FAF9] text-slate-900 border-t border-slate-200/80 overflow-hidden">
        {/* Soft ambient background matching agdiebra.com */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(18, 106, 58, 0.04) 0%, rgba(254, 186, 39, 0.03) 40%, transparent 70%)",
          }}
        />

        <div className="container-main relative z-10 text-center">
          {/* Header */}
          <div className="mb-4">
            <p className="font-mono text-sm sm:text-base tracking-[0.18em] uppercase font-bold text-[#126A3A]">
              START A COLLABORATION
            </p>
          </div>

          {/* Quote line matching agdiebra.com */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#126A3A]/30" />
            <p className="font-body text-sm italic text-slate-600 font-medium">
              &ldquo;Sampaikan kebutuhanmu kepada AG Diebra, dan kami bantu menemukan kemungkinan yang relevan.&rdquo;
            </p>
            <div className="w-8 h-px bg-[#126A3A]/30" />
          </div>

          {/* Headline */}
          <h4 className="font-display text-[clamp(1.5rem,2.8vw,2.4rem)] font-bold text-slate-900 mb-3 text-balance">
            Siap Menemukan <span className="text-[#126A3A]">Mitra yang Relevan?</span>
          </h4>
          <p className="font-body text-sm md:text-base text-slate-600 mb-8 max-w-md mx-auto text-balance">
            Masuk ke portal dashboard untuk menyampaikan kebutuhan Anda atau mendaftarkan
            resource yang siap dikolaborasikan.
          </p>

          {/* CTA Buttons side by side with signature .btn-partner */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="btn-partner btn-partner--primary">
              <span>Buka Portal Dashboard</span>
              <span className="btn-partner__icon" aria-hidden="true">
                <ArrowRight className="btn-partner__icon-svg w-3 h-3 text-[#101D14]" />
                <ArrowRight className="btn-partner__icon-svg btn-partner__icon-svg--copy w-3 h-3 text-[#101D14]" />
              </span>
            </Link>

            <a
              href="https://wa.me/628132120725?text=Halo%20AG%20Diebra,%20saya%20ingin%20berkonsultasi%20mengenai%20Ecosystem%20Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-partner btn-partner--secondary"
            >
              <span>Konsultasi WhatsApp Kemitraan</span>
              <span className="btn-partner__icon" aria-hidden="true">
                <ArrowUpRight className="btn-partner__icon-svg w-3 h-3 text-[#126A3A]" />
                <ArrowUpRight className="btn-partner__icon-svg btn-partner__icon-svg--copy w-3 h-3 text-[#126A3A]" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
