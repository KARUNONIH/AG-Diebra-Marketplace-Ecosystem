"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CreateRequestPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    category: "Agribisnis & Budidaya",
    title: "",
    description: "",
    targetRegion: "Kabupaten Bogor",
    urgency: "medium",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/");
      } else {
        alert("Gagal menyimpan permintaan.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Hub
      </Link>

      <Card variant="glass-elevated">
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FEBA27]/10 border border-[#FEBA27]/20 text-[#FEBA27] text-xs font-mono mb-2">
            <Sparkles className="w-3 h-3" /> FORMULIR KEBUTUHAN (NEED)
          </div>
          <h1 className="font-display text-2xl font-bold text-white">
            Ajukan Kebutuhan Mitra Agribisnis
          </h1>
          <p className="font-body text-sm text-white/60 mt-1">
            Deskripsikan kebutuhan komoditas, fasilitas, sarana, atau kemitraan
            Anda untuk dikurasi dan dipasangkan oleh tim AG Diebra.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Nama Organisasi / Usaha / Poktan
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Koperasi Produsen Kopi Ki Demang"
              value={formData.organizationName}
              onChange={(e) =>
                setFormData({ ...formData, organizationName: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                Kategori Kebutuhan
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27] transition-colors"
              >
                <option value="Agribisnis & Budidaya">Agribisnis & Budidaya</option>
                <option value="Teknologi & AI">Teknologi & Smart Farming</option>
                <option value="Logistik & Cold Chain">Logistik & Cold Storage</option>
                <option value="Hilirisasi & Pengolahan">Hilirisasi & Industri Pangan</option>
                <option value="Ekspor & Pasar">Ekspor & Akses Pasar</option>
                <option value="Pembiayaan & Investasi">Pembiayaan & Mitra Modal</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                Tingkat Urgensi
              </label>
              <select
                value={formData.urgency}
                onChange={(e) =>
                  setFormData({ ...formData, urgency: e.target.value })
                }
                className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27] transition-colors"
              >
                <option value="low">Rendah (Perencanaan Masa Depan)</option>
                <option value="medium">Menengah (1-3 Bulan)</option>
                <option value="high">Tinggi (Segera / Urgent)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Wilayah / Domisili Operasional
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Sukamakmur, Kab. Bogor"
              value={formData.targetRegion}
              onChange={(e) =>
                setFormData({ ...formData, targetRegion: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Judul Ringkas Kebutuhan
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Kebutuhan Cold Storage 10 Ton untuk Green Bean Kopi"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Deskripsi & Spesifikasi Detail
            </label>
            <textarea
              rows={4}
              required
              placeholder="Jelaskan spesifikasi kebutuhan, kuantitas volume, estimasi waktu, serta syarat kerja sama yang dicari..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27] transition-colors"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
            <Link href="/">
              <Button type="button" variant="dark">
                Batal
              </Button>
            </Link>
            <Button
              type="submit"
              variant="primary"
              loading={submitting}
              icon={<Send className="w-3.5 h-3.5 text-[#101D14]" />}
            >
              Kirim Kebutuhan
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
