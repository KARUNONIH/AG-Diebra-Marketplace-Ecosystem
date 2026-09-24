"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CreateResourcePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    category: "Teknologi & Smart Farming",
    title: "",
    description: "",
    capacitySpec: "",
    region: "Jawa Barat",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/");
      } else {
        alert("Gagal mendaftarkan sumber daya.");
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
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#126A3A]/20 border border-[#126A3A]/40 text-emerald-400 text-xs font-mono mb-2">
            <Sparkles className="w-3 h-3" /> FORMULIR PASOKAN (SUPPLY)
          </div>
          <h1 className="font-display text-2xl font-bold text-white">
            Daftarkan Pasokan Kapasitas & Teknologi
          </h1>
          <p className="font-body text-sm text-white/60 mt-1">
            Tawarkan teknologi, fasilitas sarana, benih unggul, gudang, atau
            kapasitas produksi Anda kepada jaringan agribisnis AG Diebra.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Nama Organisasi / Perusahaan / Penyedia
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: PT Habibi Digital Nusantara"
              value={formData.organizationName}
              onChange={(e) =>
                setFormData({ ...formData, organizationName: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                Kategori Pasokan
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <option value="Teknologi & Smart Farming">Teknologi & Smart Farming</option>
                <option value="Logistik & Cold Storage">Logistik & Cold Storage</option>
                <option value="Benih & Sarana Produksi">Benih & Sarana Produksi</option>
                <option value="Peralatan & Mesin Pertanian">Peralatan & Alsintan</option>
                <option value="Hilirisasi & Industri Pangan">Hilirisasi & Pengolahan</option>
                <option value="Offtaker & Distribusi">Offtaker & Distribusi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                Cakupan Wilayah Layanan
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Jabodetabek & Jawa Barat"
                value={formData.region}
                onChange={(e) =>
                  setFormData({ ...formData, region: e.target.value })
                }
                className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Judul Pasokan / Layanan
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Penyediaan 50 Unit IoT Smart Sensor Irigasi Presisi"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Spesifikasi Kapasitas / Volume
            </label>
            <input
              type="text"
              placeholder="Contoh: 50 Unit Sensor / Kapasitas Gudang 50 Ton / 100 Ha"
              value={formData.capacitySpec}
              onChange={(e) =>
                setFormData({ ...formData, capacitySpec: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
              Deskripsi Layanan & Ketentuan Kerjasama
            </label>
            <textarea
              rows={4}
              required
              placeholder="Jelaskan fitur keunggulan, spesifikasi teknis, model kemitraan, dan kontak penanggung jawab..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
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
              variant="dark"
              loading={submitting}
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
              icon={<Send className="w-3.5 h-3.5 text-emerald-400" />}
            >
              Daftarkan Pasokan
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
