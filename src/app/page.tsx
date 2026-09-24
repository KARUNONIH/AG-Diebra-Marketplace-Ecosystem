"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Boxes,
  Handshake,
  CheckCircle2,
  RefreshCw,
  PlusCircle,
  Building2,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CardSkeleton } from "@/components/ui/Skeleton";

interface RequestItem {
  id: string;
  organizationName: string;
  category: string;
  title: string;
  description: string;
  targetRegion: string;
  urgency: string;
  status: string;
}

interface ResourceItem {
  id: string;
  organizationName: string;
  category: string;
  title: string;
  description: string;
  capacitySpec: string;
  region: string;
  status: string;
}

export default function HomePage() {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const [reqRes, resRes] = await Promise.all([
        fetch("/api/requests"),
        fetch("/api/resources"),
      ]);
      const reqJson = await reqRes.json();
      const resJson = await resRes.json();

      setRequests(reqJson.data || []);
      setResources(resJson.data || []);
    } catch (e) {
      console.error("Failed to load ecosystem data", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const seedSampleData = async () => {
    setRefreshing(true);
    try {
      await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organizationName: "Koperasi Produsen Kopi Ki Demang",
          category: "Logistik & Ekspor",
          title: "Kebutuhan Akses Kontainer Pendingin untuk Ekspor Kopi Robusta",
          description:
            "Membutuhkan fasilitas cold storage dan kontainer berpendingin untuk menjaga kadar air kopi green bean 12 ton tujuan pasar Timur Tengah.",
          targetRegion: "Sukamakmur, Bogor",
          urgency: "high",
        }),
      });

      await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organizationName: "PT Habibi Digital Nusantara",
          category: "Smart Farming & IoT",
          title: "Penyediaan Sensor Kelembaban Tanah & Irigasi Presisi",
          description:
            "Menyediakan 50 unit IoT smart sensor untuk otomatisasi fertigasi perkebunan hortikultura dan kopi skala kelompok tani.",
          capacitySpec: "50 Unit Sensor + Cloud Dashboard",
          region: "Jawa Barat",
        }),
      });

      await fetchData();
    } catch (e) {
      console.error(e);
      setRefreshing(false);
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center pt-8 pb-6 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#126A3A]/20 border border-[#126A3A]/40 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FEBA27]" />
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            From Fragmentation to One Ecosystem
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          Building the future of{" "}
          <span className="text-gold-gradient">Agribusiness Ecosystems</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Platform marketplace dan kurasi kolaborasi agribisnis: mempertemukan
          kebutuhan petani, teknologi presisi, fasilitas logistik, dan hilirisasi
          dalam satu wadah terpadu.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/requests/create">
            <Button
              variant="primary"
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
            >
              Ajukan Kebutuhan (Need)
            </Button>
          </Link>
          <Link href="/resources/create">
            <Button
              variant="dark"
              icon={<PlusCircle className="w-3.5 h-3.5 text-[#D4AF37]" />}
            >
              Daftarkan Pasokan (Supply)
            </Button>
          </Link>
          <Button
            variant="secondary"
            loading={refreshing}
            onClick={handleRefresh}
            icon={<RefreshCw className="w-3.5 h-3.5 text-[#126A3A]" />}
          >
            Refresh Hub
          </Button>
        </div>
      </section>

      {/* Ecosystem Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Needs", value: requests.length, icon: Boxes, color: "text-[#FEBA27]" },
          { label: "Supplies Available", value: resources.length, icon: TrendingUp, color: "text-emerald-400" },
          { label: "Curated Matches", value: "Verified", icon: Handshake, color: "text-sky-400" },
          { label: "Direct Introductions", value: "100%", icon: CheckCircle2, color: "text-[#D4AF37]" },
        ].map((stat, i) => (
          <Card key={i} variant="glass" hoverable={false} className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-white/50">
                  {stat.label}
                </p>
                <p className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Feeds */}
      <div className="space-y-12">
        {/* Needs Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-[#FEBA27] font-bold">
                Live Demand
              </p>
              <h2 className="font-display text-2xl font-bold text-white">
                Kebutuhan & Permintaan Komoditas
              </h2>
            </div>
            <Link href="/requests">
              <span className="font-body text-sm text-[#D4AF37] hover:underline flex items-center gap-1">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {loading ? (
            <CardSkeleton count={3} />
          ) : requests.length === 0 ? (
            <Card variant="glass" className="text-center py-12">
              <p className="text-white/60 mb-4">
                Belum ada permintaan kebutuhan tercatat di database.
              </p>
              <Button variant="primary" onClick={seedSampleData} loading={refreshing}>
                Muat Contoh Kebutuhan Riset
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requests.map((item) => (
                <Card key={item.id} variant="glass">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="gold">{item.category}</Badge>
                    <Badge
                      variant={item.urgency === "high" ? "danger" : "slate"}
                    >
                      {item.urgency}
                    </Badge>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 line-clamp-3 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {item.organizationName}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {item.targetRegion}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Resources Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-emerald-400 font-bold">
                Available Supply
              </p>
              <h2 className="font-display text-2xl font-bold text-white">
                Pasokan Kapasitas & Teknologi Tersedia
              </h2>
            </div>
            <Link href="/resources">
              <span className="font-body text-sm text-emerald-400 hover:underline flex items-center gap-1">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {loading ? (
            <CardSkeleton count={3} />
          ) : resources.length === 0 ? (
            <Card variant="glass" className="text-center py-12">
              <p className="text-white/60 mb-4">
                Belum ada pasokan sumber daya tercatat di database.
              </p>
              <Button variant="dark" onClick={seedSampleData} loading={refreshing}>
                Muat Contoh Pasokan Riset
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((item) => (
                <Card key={item.id} variant="glass">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="emerald">{item.category}</Badge>
                    <Badge variant="green">{item.status}</Badge>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 line-clamp-3 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                      {item.organizationName}
                    </span>
                    <span className="font-mono text-[11px] text-[#FEBA27]">
                      {item.capacitySpec || item.region}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
