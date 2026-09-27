"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Users,
  Boxes,
  TrendingUp,
  Handshake,
  CheckCircle2,
  XCircle,
  MessageSquare,
  ShieldCheck,
  RefreshCw,
  PlusCircle,
  ExternalLink,
  ArrowRight,
  Building2,
  MapPin,
  Clock,
  Sparkles,
  UserCheck,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { MatchItem, IntroductionItem, RequestItem, ResourceItem } from "@/types/models";

function DashboardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Selected role: "customer" | "supplier" | "admin"
  const currentRoleParam = searchParams.get("role") || "customer";
  const [activeRole, setActiveRole] = useState<"customer" | "supplier" | "admin">(
    currentRoleParam === "supplier" || currentRoleParam === "admin"
      ? currentRoleParam
      : "customer"
  );

  // Sync state if URL changes
  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "customer" || roleParam === "supplier" || roleParam === "admin") {
      setActiveRole(roleParam);
    }
  }, [searchParams]);

  const switchRole = (role: "customer" | "supplier" | "admin") => {
    setActiveRole(role);
    router.push(`/dashboard?role=${role}`);
  };

  // Data states
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [matches, setMatches] = useState<MatchItem[]>([]);
  const [intros, setIntros] = useState<IntroductionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Admin Pairing State
  const [selectedRequest, setSelectedRequest] = useState("");
  const [selectedResource, setSelectedResource] = useState("");
  const [curatorNotes, setCuratorNotes] = useState("");
  const [pairingLoading, setPairingLoading] = useState(false);

  // Consent & Intro action states
  const [updatingConsent, setUpdatingConsent] = useState<string | null>(null);
  const [introLoading, setIntroLoading] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const [reqRes, resRes, matchRes, introRes] = await Promise.all([
        fetch("/api/requests"),
        fetch("/api/resources"),
        fetch("/api/matches"),
        fetch("/api/introductions"),
      ]);
      const [reqData, resData, matchData, introData] = await Promise.all([
        reqRes.json(),
        resRes.json(),
        matchRes.json(),
        introRes.json(),
      ]);

      const reqList = reqData.data || [];
      const resList = resData.data || [];

      setRequests(reqList);
      setResources(resList);
      setMatches(matchData.data || []);
      setIntros(introData.data || []);

      if (reqList.length > 0 && !selectedRequest) {
        setSelectedRequest(reqList[0].id);
      }
      if (resList.length > 0 && !selectedResource) {
        setSelectedResource(resList[0].id);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
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

  // Dual Consent Action (Customer or Supplier)
  const handleUpdateConsent = async (
    matchId: string,
    party: "requester" | "provider",
    consent: "approved" | "rejected"
  ) => {
    const actionKey = `${matchId}-${party}-${consent}`;
    setUpdatingConsent(actionKey);

    try {
      const res = await fetch(`/api/matches/${matchId}/consent`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ party, consent }),
      });

      if (res.ok) {
        await fetchData();
      }
    } catch (err) {
      console.error("Failed updating consent:", err);
    } finally {
      setUpdatingConsent(null);
    }
  };

  // Admin Create Pairing
  const handleCreatePairing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRequest || !selectedResource) return;
    setPairingLoading(true);

    const reqObj = requests.find((r) => r.id === selectedRequest);
    const resObj = resources.find((s) => s.id === selectedResource);

    try {
      await fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: selectedRequest,
          resourceId: selectedResource,
          requestTitle: reqObj?.title || "Kebutuhan Terpilih",
          resourceTitle: resObj?.title || "Pasokan Terpilih",
          requesterOrg: reqObj?.organizationName || "Requester",
          providerOrg: resObj?.organizationName || "Provider",
          adminNotes: curatorNotes || "Matched by AG Diebra Ecosystem Curator",
        }),
      });

      setCuratorNotes("");
      await fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setPairingLoading(false);
    }
  };

  // Facilitate WhatsApp Intro
  const handleFacilitateIntro = async (match: MatchItem) => {
    if (!match.id) return;
    setIntroLoading(match.id);
    try {
      await fetch("/api/introductions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          matchId: match.id,
          requesterOrg: match.requesterOrg,
          providerOrg: match.providerOrg,
          topic: `${match.requestTitle} & ${match.resourceTitle}`,
          introNotes: match.adminNotes,
        }),
      });

      await fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setIntroLoading(null);
    }
  };

  return (
    <div className="bg-[#101D14] text-white min-h-[calc(100vh-5rem)] py-10 relative">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 106, 58, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 106, 58, 0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 space-y-10 relative z-10">
        {/* Role Navigation Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#126A3A]/20 border border-[#126A3A]/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FEBA27]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#FEBA27] font-bold">
              PORTAL WORKSPACE
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Ecosystem Operations Dashboard
          </h1>
          <p className="font-body text-sm text-white/60 mt-1">
            Kelola pengajuan kebutuhan, pendaftaran pasokan komoditas, dan kurasi kolaborasi.
          </p>
        </div>

        {/* Global Action & Refresh */}
        <div className="flex items-center gap-3">
          <Button
            variant="dark"
            onClick={handleRefresh}
            loading={refreshing}
            icon={<RefreshCw className="w-3.5 h-3.5 text-[#FEBA27]" />}
          >
            Refresh Data
          </Button>
          <Link href="/">
            <Button
              variant="secondary"
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#126A3A]" />}
            >
              Lihat Tampilan Depan
            </Button>
          </Link>
        </div>
      </div>

      {/* Role Switcher Tabs */}
      <div className="p-1.5 rounded-2xl bg-[#14231A] border border-white/10 flex flex-wrap sm:flex-nowrap gap-2">
        <button
          onClick={() => switchRole("customer")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-display text-sm font-semibold transition-all ${
            activeRole === "customer"
              ? "bg-[#FEBA27] text-[#101D14] shadow-lg font-bold"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Role: Customer (Offtaker / Buyer)</span>
          <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-[#101D14]/15">
            {requests.length}
          </span>
        </button>

        <button
          onClick={() => switchRole("supplier")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-display text-sm font-semibold transition-all ${
            activeRole === "supplier"
              ? "bg-emerald-500 text-[#101D14] shadow-lg font-bold"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          <Boxes className="w-4 h-4" />
          <span>Role: Supplier (Petani / Produsen)</span>
          <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-[#101D14]/15">
            {resources.length}
          </span>
        </button>

        <button
          onClick={() => switchRole("admin")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-display text-sm font-semibold transition-all ${
            activeRole === "admin"
              ? "bg-[#D4AF37] text-[#101D14] shadow-lg font-bold"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Role: Admin Kurator (Orkestrasi)</span>
          <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-[#101D14]/15">
            {matches.length}
          </span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. ROLE: CUSTOMER VIEW                                                    */}
      {/* ========================================================================= */}
      {activeRole === "customer" && (
        <div className="space-y-10">
          {/* Customer Welcome & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Kebutuhan Diajukan
              </p>
              <p className="font-display text-3xl font-bold text-[#FEBA27]">
                {requests.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Permintaan komoditas aktif</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Rekomendasi Pasokan
              </p>
              <p className="font-display text-3xl font-bold text-emerald-400">
                {matches.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Telah dikurasi oleh admin</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Persetujuan Saya
              </p>
              <p className="font-display text-3xl font-bold text-white">
                {matches.filter((m) => m.requesterConsent === "pending").length}
              </p>
              <p className="text-xs text-white/40 mt-1">Menunggu konfirmasi Anda</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Terhubung ke WhatsApp
              </p>
              <p className="font-display text-3xl font-bold text-[#D4AF37]">
                {intros.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Koordinasi langsung aktif</p>
            </Card>
          </div>

          {/* Customer Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#14231A] to-[#18271D] border border-[#FEBA27]/30">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Butuh Komoditas, Cold Storage, atau Teknologi Presisi?
              </h3>
              <p className="font-body text-sm text-white/70 mt-1">
                Daftarkan spesifikasi kebutuhan Anda agar tim kurator dapat segera mencocokkan pasokan mitra yang sesuai.
              </p>
            </div>
            <Link href="/requests/create">
              <Button
                variant="primary"
                icon={<PlusCircle className="w-4 h-4 text-[#101D14]" />}
              >
                Ajukan Kebutuhan Baru (Need)
              </Button>
            </Link>
          </div>

          {/* Section: Persetujuan Pasangan Rekomendasi (Dual Consent) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#FEBA27] font-bold">
                  DUAL-CONSENT WORKSPACE
                </span>
                <h2 className="font-display text-2xl font-bold text-white">
                  Persetujuan Pasangan Pasokan untuk Anda
                </h2>
              </div>
            </div>

            {loading ? (
              <CardSkeleton count={2} />
            ) : matches.length === 0 ? (
              <Card variant="glass" className="text-center py-10 text-white/50 text-sm">
                Belum ada rekomendasi pasokan yang dipasangkan untuk kebutuhan Anda.
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {matches.map((m) => {
                  const matchId = m.id || "";
                  const isApproved = m.requesterConsent === "approved";
                  const isRejected = m.requesterConsent === "rejected";
                  const isBothApproved = m.status === "approved_both" || m.status === "introduced";
                  const actionKeyApprove = `${matchId}-requester-approved`;
                  const actionKeyReject = `${matchId}-requester-rejected`;

                  return (
                    <Card key={matchId} variant="glass-elevated" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            isBothApproved
                              ? "emerald"
                              : m.status === "declined"
                              ? "danger"
                              : "gold"
                          }
                        >
                          STATUS: {m.status}
                        </Badge>
                        <span className="font-mono text-xs text-white/50">
                          Ref: {matchId.slice(-6)}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                        <p className="text-[11px] font-mono text-[#FEBA27] uppercase">
                          Kebutuhan Anda:
                        </p>
                        <h4 className="font-display font-bold text-white text-base">
                          {m.requestTitle}
                        </h4>
                        <p className="text-xs text-white/60">
                          Pemohon: {m.requesterOrg}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                        <p className="text-[11px] font-mono text-emerald-400 uppercase">
                          Rekomendasi Penyedia Pasokan (Supplier):
                        </p>
                        <h4 className="font-display font-bold text-emerald-300 text-base">
                          {m.resourceTitle}
                        </h4>
                        <p className="text-xs text-white/70">
                          Mitra: {m.providerOrg}
                        </p>
                      </div>

                      {m.adminNotes && (
                        <div className="p-3 rounded-lg bg-[#101D14] border border-white/5 text-xs text-white/60 italic">
                          Catatan Kurator: "{m.adminNotes}"
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/50">Persetujuan Anda:</span>
                          <Badge
                            variant={
                              isApproved ? "emerald" : isRejected ? "danger" : "slate"
                            }
                          >
                            {m.requesterConsent}
                          </Badge>
                        </div>

                        {m.requesterConsent === "pending" ? (
                          <div className="flex items-center gap-2">
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() => handleUpdateConsent(matchId, "requester", "approved")}
                              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-[#101D14] text-xs font-bold hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Setujui Mitra
                            </button>
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() => handleUpdateConsent(matchId, "requester", "rejected")}
                              className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold hover:bg-red-500/30 transition-colors"
                            >
                              Tolak
                            </button>
                          </div>
                        ) : isBothApproved ? (
                          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Siap Koordinasi WA
                          </span>
                        ) : (
                          <span className="text-xs text-white/40 italic">
                            Menunggu persetujuan mitra
                          </span>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section: Daftar Semua Kebutuhan Customer (Feed) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-emerald-400 font-bold">
                  MY LIVE DEMANDS
                </span>
                <h2 className="font-display text-2xl font-bold text-white">
                  Daftar Kebutuhan Aktif yang Anda Ajukan
                </h2>
              </div>
              <Link href="/requests">
                <span className="text-xs text-[#FEBA27] hover:underline flex items-center gap-1 font-medium">
                  Katalog Publik <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

            {loading ? (
              <CardSkeleton count={3} />
            ) : requests.length === 0 ? (
              <Card variant="glass" className="text-center py-10 text-white/50 text-sm">
                Belum ada kebutuhan yang tercatat. Silakan ajukan kebutuhan baru.
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <p className="font-body text-xs text-white/60 line-clamp-3 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#FEBA27]" />
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
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ROLE: SUPPLIER VIEW                                                    */}
      {/* ========================================================================= */}
      {activeRole === "supplier" && (
        <div className="space-y-10">
          {/* Supplier Welcome & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Pasokan Terdaftar
              </p>
              <p className="font-display text-3xl font-bold text-emerald-400">
                {resources.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Komoditas & teknologi aktif</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Kebutuhan Cocok
              </p>
              <p className="font-display text-3xl font-bold text-[#FEBA27]">
                {matches.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Permintaan offtaker terpasang</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Persetujuan Saya
              </p>
              <p className="font-display text-3xl font-bold text-white">
                {matches.filter((m) => m.providerConsent === "pending").length}
              </p>
              <p className="text-xs text-white/40 mt-1">Menunggu persetujuan Anda</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Terhubung ke WhatsApp
              </p>
              <p className="font-display text-3xl font-bold text-[#D4AF37]">
                {intros.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Ruang diskusi transaksi aktif</p>
            </Card>
          </div>

          {/* Supplier Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#14231A] to-[#18271D] border border-emerald-500/30">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Punya Hasil Panen, Fasilitas Armada, atau Layanan Smart Farming?
              </h3>
              <p className="font-body text-sm text-white/70 mt-1">
                Daftarkan kapasitas pasokan Anda agar langsung terlihat oleh pembeli industri dan offtaker terpercaya.
              </p>
            </div>
            <Link href="/resources/create">
              <Button
                variant="primary"
                icon={<PlusCircle className="w-4 h-4 text-[#101D14]" />}
              >
                Daftarkan Pasokan Baru (Supply)
              </Button>
            </Link>
          </div>

          {/* Section: Persetujuan Permintaan Masuk (Dual Consent) */}
          <div className="space-y-4">
            <div>
              <span className="font-mono text-xs uppercase text-emerald-400 font-bold">
                COLLABORATION CONSENT
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                Permintaan Kebutuhan Masuk untuk Pasokan Anda
              </h2>
            </div>

            {loading ? (
              <CardSkeleton count={2} />
            ) : matches.length === 0 ? (
              <Card variant="glass" className="text-center py-10 text-white/50 text-sm">
                Belum ada permintaan masuk yang dipasangkan dengan kapasitas Anda.
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {matches.map((m) => {
                  const matchId = m.id || "";
                  const isApproved = m.providerConsent === "approved";
                  const isRejected = m.providerConsent === "rejected";
                  const isBothApproved = m.status === "approved_both" || m.status === "introduced";

                  return (
                    <Card key={matchId} variant="glass-elevated" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            isBothApproved
                              ? "emerald"
                              : m.status === "declined"
                              ? "danger"
                              : "gold"
                          }
                        >
                          STATUS: {m.status}
                        </Badge>
                        <span className="font-mono text-xs text-white/50">
                          Ref: {matchId.slice(-6)}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                        <p className="text-[11px] font-mono text-emerald-400 uppercase">
                          Pasokan Terdaftar Anda:
                        </p>
                        <h4 className="font-display font-bold text-emerald-300 text-base">
                          {m.resourceTitle}
                        </h4>
                        <p className="text-xs text-white/70">
                          Organisasi: {m.providerOrg}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FEBA27]/5 border border-[#FEBA27]/20 space-y-2">
                        <p className="text-[11px] font-mono text-[#FEBA27] uppercase">
                          Permintaan Pembeli (Customer):
                        </p>
                        <h4 className="font-display font-bold text-white text-base">
                          {m.requestTitle}
                        </h4>
                        <p className="text-xs text-white/60">
                          Pemohon: {m.requesterOrg}
                        </p>
                      </div>

                      {m.adminNotes && (
                        <div className="p-3 rounded-lg bg-[#101D14] border border-white/5 text-xs text-white/60 italic">
                          Catatan Kurator: "{m.adminNotes}"
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/50">Persetujuan Anda:</span>
                          <Badge
                            variant={
                              isApproved ? "emerald" : isRejected ? "danger" : "slate"
                            }
                          >
                            {m.providerConsent}
                          </Badge>
                        </div>

                        {m.providerConsent === "pending" ? (
                          <div className="flex items-center gap-2">
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() => handleUpdateConsent(matchId, "provider", "approved")}
                              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-[#101D14] text-xs font-bold hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Setujui Permintaan
                            </button>
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() => handleUpdateConsent(matchId, "provider", "rejected")}
                              className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold hover:bg-red-500/30 transition-colors"
                            >
                              Tolak
                            </button>
                          </div>
                        ) : isBothApproved ? (
                          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Siap Koordinasi WA
                          </span>
                        ) : (
                          <span className="text-xs text-white/40 italic">
                            Menunggu persetujuan offtaker
                          </span>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section: Daftar Semua Pasokan Supplier (Feed) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#FEBA27] font-bold">
                  MY AVAILABLE SUPPLIES
                </span>
                <h2 className="font-display text-2xl font-bold text-white">
                  Daftar Pasokan & Kapasitas Aktif Anda
                </h2>
              </div>
              <Link href="/resources">
                <span className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-medium">
                  Katalog Publik <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

            {loading ? (
              <CardSkeleton count={3} />
            ) : resources.length === 0 ? (
              <Card variant="glass" className="text-center py-10 text-white/50 text-sm">
                Belum ada pasokan yang didaftarkan. Silakan daftarkan komoditas Anda.
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((item) => (
                  <Card key={item.id} variant="glass">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="emerald">{item.category}</Badge>
                      <Badge variant="green">{item.status}</Badge>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-white/60 line-clamp-3 mb-4 leading-relaxed">
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
      )}

      {/* ========================================================================= */}
      {/* 3. ROLE: ADMIN & ECOSYSTEM CURATOR                                        */}
      {/* ========================================================================= */}
      {activeRole === "admin" && (
        <div className="space-y-10">
          {/* Admin Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Total Needs Aktif
              </p>
              <p className="font-display text-3xl font-bold text-[#FEBA27]">
                {requests.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Kebutuhan terdaftar</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Total Supplies Aktif
              </p>
              <p className="font-display text-3xl font-bold text-emerald-400">
                {resources.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Kapasitas produsen</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                Pasangan Kolaborasi
              </p>
              <p className="font-display text-3xl font-bold text-white">
                {matches.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Telah dikurasi</p>
            </Card>

            <Card variant="glass" className="p-5">
              <p className="font-mono text-xs uppercase text-white/50 mb-1">
                WhatsApp Dispatched
              </p>
              <p className="font-display text-3xl font-bold text-[#D4AF37]">
                {intros.length}
              </p>
              <p className="text-xs text-white/40 mt-1">Terkoneksi langsung</p>
            </Card>
          </div>

          {/* Manual Pairing Engine Workspace */}
          <Card variant="glass-elevated" className="p-6">
            <div className="flex items-center gap-2 mb-2 text-[#FEBA27]">
              <Handshake className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                CURATOR PAIRING ENGINE
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Pasangkan Kebutuhan Customer & Pasokan Supplier
            </h2>
            <p className="font-body text-xs text-white/60 mb-6 max-w-2xl">
              Pilih satu permintaan kebutuhan yang terbukti valid, lalu pasangkan dengan kapasitas sumber daya penyedia yang memenuhi spesifikasi teknis dan standar mutu.
            </p>

            {requests.length === 0 || resources.length === 0 ? (
              <p className="text-white/60 text-sm py-4">
                Dibutuhkan minimal 1 Need dan 1 Supply aktif untuk membuat pairing.
              </p>
            ) : (
              <form onSubmit={handleCreatePairing} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#FEBA27] uppercase tracking-wider mb-1.5 font-bold">
                      1. Pilih Kebutuhan Pemohon (Customer Need)
                    </label>
                    <select
                      value={selectedRequest}
                      onChange={(e) => setSelectedRequest(e.target.value)}
                      className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27]"
                    >
                      {requests.map((r) => (
                        <option key={r.id} value={r.id}>
                          [{r.organizationName}] {r.title} ({r.targetRegion})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5 font-bold">
                      2. Pilih Penyedia Pasokan (Supplier Capacity)
                    </label>
                    <select
                      value={selectedResource}
                      onChange={(e) => setSelectedResource(e.target.value)}
                      className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      {resources.map((s) => (
                        <option key={s.id} value={s.id}>
                          [{s.organizationName}] {s.title} ({s.capacitySpec})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5 font-semibold">
                    Catatan Telaah Kurator & Rationale Kolaborasi
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Spesifikasi kadar air 12% dan sertifikasi organik cocok dengan armada cold chain 12 ton"
                    value={curatorNotes}
                    onChange={(e) => setCuratorNotes(e.target.value)}
                    className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27]"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    loading={pairingLoading}
                    icon={<ArrowRight className="w-3.5 h-3.5 text-[#101D14]" />}
                  >
                    Konfirmasi Pasangan Kolaborasi
                  </Button>
                </div>
              </form>
            )}
          </Card>

          {/* Section: Live Matches & Dual Consent Monitor */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white flex items-center justify-between">
              <span>Daftar Pairing & Monitor Dual-Consent ({matches.length})</span>
            </h2>

            {loading ? (
              <CardSkeleton count={2} />
            ) : matches.length === 0 ? (
              <Card variant="glass" className="text-center py-8 text-white/50 text-sm">
                Belum ada pasangan kolaborasi yang dibuat oleh kurator.
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {matches.map((m) => {
                  const isIntroduced = m.status === "introduced";
                  const isApprovedBoth = m.status === "approved_both" || isIntroduced;
                  const matchId = m.id || "";

                  return (
                    <Card key={matchId} variant="glass" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            isApprovedBoth
                              ? "emerald"
                              : m.status === "declined"
                              ? "danger"
                              : "gold"
                          }
                        >
                          STATUS: {m.status}
                        </Badge>
                        <span className="font-mono text-xs text-white/40">
                          ID: {matchId.slice(-6)}
                        </span>
                      </div>

                      {/* Requester & Provider Cards */}
                      <div className="space-y-2 text-sm">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[11px] font-mono text-[#FEBA27] uppercase">
                              Pemohon (Customer)
                            </p>
                            <p className="font-semibold text-white">{m.requesterOrg}</p>
                            <p className="text-xs text-white/60">{m.requestTitle}</p>
                          </div>
                          <Badge
                            variant={
                              m.requesterConsent === "approved"
                                ? "emerald"
                                : m.requesterConsent === "rejected"
                                ? "danger"
                                : "slate"
                            }
                          >
                            {m.requesterConsent}
                          </Badge>
                        </div>

                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[11px] font-mono text-emerald-400 uppercase">
                              Penyedia (Supplier)
                            </p>
                            <p className="font-semibold text-white">{m.providerOrg}</p>
                            <p className="text-xs text-white/60">{m.resourceTitle}</p>
                          </div>
                          <Badge
                            variant={
                              m.providerConsent === "approved"
                                ? "emerald"
                                : m.providerConsent === "rejected"
                                ? "danger"
                                : "slate"
                            }
                          >
                            {m.providerConsent}
                          </Badge>
                        </div>
                      </div>

                      {m.adminNotes && (
                        <p className="text-xs text-white/50 italic bg-[#101D14] p-2.5 rounded border border-white/5">
                          "{m.adminNotes}"
                        </p>
                      )}

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-white/50 flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                          Dual Consent: {m.requesterConsent} / {m.providerConsent}
                        </span>

                        {!isIntroduced ? (
                          <Button
                            variant="primary"
                            loading={introLoading === matchId}
                            onClick={() => handleFacilitateIntro(m)}
                            icon={<MessageSquare className="w-3.5 h-3.5 text-[#101D14]" />}
                          >
                            Kirim Introduksi WA
                          </Button>
                        ) : (
                          <Badge variant="emerald" className="gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> WhatsApp Connected
                          </Badge>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section: Riwayat Introduksi WhatsApp Terhubung */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white">
              Riwayat Introduksi WhatsApp Aktif ({intros.length})
            </h2>

            {intros.length === 0 ? (
              <Card variant="glass" className="text-center py-6 text-white/50 text-sm">
                Belum ada introduksi WhatsApp yang dikirimkan.
              </Card>
            ) : (
              <div className="space-y-3">
                {intros.map((item) => (
                  <Card
                    key={item.id}
                    variant="glass"
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="emerald">WA CONNECTED</Badge>
                        <span className="font-semibold text-white text-sm">
                          {item.requesterOrg} 🤝 {item.providerOrg}
                        </span>
                      </div>
                      <p className="text-xs text-white/60">{item.topic}</p>
                      {item.introNotes && (
                        <p className="text-[11px] text-white/40 mt-1 italic">
                          {item.introNotes}
                        </p>
                      )}
                    </div>

                    <a
                      href={item.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button
                        variant="primary"
                        icon={<ExternalLink className="w-3.5 h-3.5 text-[#101D14]" />}
                      >
                        Buka Obrolan WhatsApp
                      </Button>
                    </a>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-6 py-12">
          <CardSkeleton count={3} />
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
