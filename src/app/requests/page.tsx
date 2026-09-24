"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, PlusCircle, Building2, MapPin, Filter } from "lucide-react";
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

export default function RequestsPage() {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Agribisnis & Budidaya",
    "Teknologi & AI",
    "Logistik & Cold Chain",
    "Hilirisasi & Pengolahan",
    "Ekspor & Pasar",
    "Pembiayaan & Investasi",
  ];

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const url =
          selectedCategory === "all"
            ? "/api/requests"
            : `/api/requests?category=${encodeURIComponent(selectedCategory)}`;
        const res = await fetch(url);
        const data = await res.json();
        setRequests(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Hub
          </Link>
          <h1 className="font-display text-3xl font-bold text-white">
            Katalog Kebutuhan Mitra (Needs)
          </h1>
          <p className="font-body text-sm text-white/60 mt-1">
            Daftar seluruh kebutuhan komoditas, fasilitas, dan kerja sama
            terverifikasi.
          </p>
        </div>

        <Link href="/requests/create">
          <Button
            variant="primary"
            icon={<PlusCircle className="w-3.5 h-3.5 text-[#101D14]" />}
          >
            Ajukan Kebutuhan Baru
          </Button>
        </Link>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-white/40 shrink-0 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setLoading(true);
              setSelectedCategory(cat);
            }}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all shrink-0 ${
              selectedCategory === cat
                ? "bg-[#FEBA27] text-[#101D14] border-[#FEBA27] font-bold"
                : "bg-white/5 text-white/70 border-white/10 hover:border-white/20"
            }`}
          >
            {cat === "all" ? "Semua Kategori" : cat}
          </button>
        ))}
      </div>

      {/* List / Grid */}
      {loading ? (
        <CardSkeleton count={6} />
      ) : requests.length === 0 ? (
        <Card variant="glass" className="text-center py-12 text-white/60">
          Tidak ada kebutuhan pada kategori ini.
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((item) => (
            <Card key={item.id} variant="glass">
              <div className="flex justify-between items-start mb-3">
                <Badge variant="gold">{item.category}</Badge>
                <Badge variant={item.urgency === "high" ? "danger" : "slate"}>
                  {item.urgency}
                </Badge>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-white/60 line-clamp-4 mb-4 leading-relaxed">
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
  );
}
