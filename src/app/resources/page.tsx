"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, PlusCircle, Building2, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CardSkeleton } from "@/components/ui/Skeleton";

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

export default function ResourcesPage() {
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Teknologi & Smart Farming",
    "Logistik & Cold Storage",
    "Benih & Sarana Produksi",
    "Peralatan & Mesin Pertanian",
    "Hilirisasi & Industri Pangan",
    "Offtaker & Distribusi",
  ];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const url =
          selectedCategory === "all"
            ? "/api/resources"
            : `/api/resources?category=${encodeURIComponent(selectedCategory)}`;
        const res = await fetch(url);
        const data = await res.json();
        setResources(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
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
            Katalog Pasokan & Teknologi (Supplies)
          </h1>
          <p className="font-body text-sm text-white/60 mt-1">
            Daftar kapasitas mesin, fasilitas gudang, benih unggul, dan teknologi
            mitra.
          </p>
        </div>

        <Link href="/resources/create">
          <Button
            variant="dark"
            icon={<PlusCircle className="w-3.5 h-3.5 text-[#D4AF37]" />}
          >
            Daftarkan Pasokan Baru
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
                ? "bg-emerald-500 text-[#101D14] border-emerald-500 font-bold"
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
      ) : resources.length === 0 ? (
        <Card variant="glass" className="text-center py-12 text-white/60">
          Tidak ada pasokan pada kategori ini.
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
            <Card key={item.id} variant="glass">
              <div className="flex justify-between items-start mb-3">
                <Badge variant="emerald">{item.category}</Badge>
                <Badge variant="green">{item.status}</Badge>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-white/60 line-clamp-4 mb-4 leading-relaxed">
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
  );
}
