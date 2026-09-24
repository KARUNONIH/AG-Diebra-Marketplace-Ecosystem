"use client";

import React, { useEffect, useState } from "react";
import {
  Handshake,
  CheckCircle2,
  XCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { MatchItem, IntroductionItem, RequestItem, ResourceItem } from "@/types/models";

export default function AdminCuratorPage() {
  const [matches, setMatches] = useState<MatchItem[]>([]);
  const [intros, setIntros] = useState<IntroductionItem[]>([]);
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pairingLoading, setPairingLoading] = useState(false);
  const [introLoading, setIntroLoading] = useState<string | null>(null);
  const [updatingConsent, setUpdatingConsent] = useState<string | null>(null);

  // Form selection for manual pairing
  const [selectedRequest, setSelectedRequest] = useState("");
  const [selectedResource, setSelectedResource] = useState("");
  const [curatorNotes, setCuratorNotes] = useState("");

  const fetchData = async () => {
    try {
      const [mRes, iRes, rRes, sRes] = await Promise.all([
        fetch("/api/matches"),
        fetch("/api/introductions"),
        fetch("/api/requests"),
        fetch("/api/resources"),
      ]);
      const [mData, iData, rData, sData] = await Promise.all([
        mRes.json(),
        iRes.json(),
        rRes.json(),
        sRes.json(),
      ]);

      setMatches(mData.data || []);
      setIntros(iData.data || []);
      setRequests(rData.data || []);
      setResources(sData.data || []);

      if (rData.data?.length > 0 && !selectedRequest) {
        setSelectedRequest(rData.data[0].id);
      }
      if (sData.data?.length > 0 && !selectedResource) {
        setSelectedResource(sData.data[0].id);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      console.error(err);
    } finally {
      setUpdatingConsent(null);
    }
  };

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
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEBA27]/10 border border-[#FEBA27]/30 text-[#FEBA27] text-xs font-mono mb-2">
          <ShieldCheck className="w-3.5 h-3.5" /> AG DIEBRA ECOSYSTEM CURATION
        </div>
        <h1 className="font-display text-3xl font-bold text-white">
          Admin Matching & Dual-Consent Approval
        </h1>
        <p className="font-body text-sm text-white/60 mt-1 max-w-2xl">
          Ruang kerja kurator untuk menelaah kesesuaian kebutuhan dan pasokan,
          mengelola persetujuan kedua belah pihak, dan memicu introduksi otomatis
          via WhatsApp.
        </p>
      </div>

      {/* Manual Matching Workspace */}
      <Card variant="glass-elevated">
        <h2 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Handshake className="w-5 h-5 text-[#FEBA27]" /> Pasangkan Need & Supply
        </h2>

        {requests.length === 0 || resources.length === 0 ? (
          <p className="text-white/60 text-sm py-4">
            Dibutuhkan minimal 1 Need dan 1 Supply aktif untuk membuat pairing.
          </p>
        ) : (
          <form onSubmit={handleCreatePairing} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#FEBA27] uppercase tracking-wider mb-1.5">
                  1. Pilih Kebutuhan Pemohon (Need)
                </label>
                <select
                  value={selectedRequest}
                  onChange={(e) => setSelectedRequest(e.target.value)}
                  className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FEBA27]"
                >
                  {requests.map((r) => (
                    <option key={r.id} value={r.id}>
                      [{r.organizationName}] {r.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5">
                  2. Pilih Penyedia Pasokan (Supply)
                </label>
                <select
                  value={selectedResource}
                  onChange={(e) => setSelectedResource(e.target.value)}
                  className="w-full bg-[#14231A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  {resources.map((s) => (
                    <option key={s.id} value={s.id}>
                      [{s.organizationName}] {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                Catatan Telaah Kurator & Rationale
              </label>
              <input
                type="text"
                placeholder="Contoh: Kebutuhan kapasitas 12 ton cocok dengan spesifikasi IoT & armada dingin"
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
                Konfirmasi Pairing
              </Button>
            </div>
          </form>
        )}
      </Card>

      {/* Live Matches List with Dual-Consent Controls */}
      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold text-white flex items-center justify-between">
          <span>Daftar Pairing Kolaborasi ({matches.length})</span>
          <Button
            variant="dark"
            onClick={fetchData}
            icon={<RefreshCw className="w-3 h-3 text-[#D4AF37]" />}
          >
            Refresh
          </Button>
        </h2>

        {loading ? (
          <CardSkeleton count={2} />
        ) : matches.length === 0 ? (
          <Card variant="glass" className="text-center py-8 text-white/50 text-sm">
            Belum ada pasangan kolaborasi yang dibuat.
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
                    <span className="font-mono text-[11px] text-white/40">
                      ID: {matchId.slice(-6)}
                    </span>
                  </div>

                  {/* Requester & Provider Cards */}
                  <div className="space-y-2 text-sm">
                    {/* Requester box */}
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-mono text-[#FEBA27] uppercase">
                          Pemohon (Need)
                        </p>
                        <p className="font-semibold text-white">{m.requesterOrg}</p>
                        <p className="text-xs text-white/60">{m.requestTitle}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
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
                        {m.requesterConsent === "pending" && (
                          <div className="flex gap-1">
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() =>
                                handleUpdateConsent(matchId, "requester", "approved")
                              }
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/40 transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() =>
                                handleUpdateConsent(matchId, "requester", "rejected")
                              }
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-400 hover:bg-red-500/40 transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Provider box */}
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-mono text-emerald-400 uppercase">
                          Penyedia (Supply)
                        </p>
                        <p className="font-semibold text-white">{m.providerOrg}</p>
                        <p className="text-xs text-white/60">{m.resourceTitle}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
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
                        {m.providerConsent === "pending" && (
                          <div className="flex gap-1">
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() =>
                                handleUpdateConsent(matchId, "provider", "approved")
                              }
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/40 transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              disabled={updatingConsent !== null}
                              onClick={() =>
                                handleUpdateConsent(matchId, "provider", "rejected")
                              }
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-400 hover:bg-red-500/40 transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
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

      {/* Facilitated Introductions Feed */}
      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold text-white">
          Riwayat Introduksi & Kontak Aktif ({intros.length})
        </h2>

        {intros.length === 0 ? (
          <Card variant="glass" className="text-center py-6 text-white/50 text-sm">
            Belum ada introduksi yang difasilitasi.
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
                    Buka Chat WA
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
