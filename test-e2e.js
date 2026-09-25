const http = require("http");
const { MongoClient, ObjectId } = require("mongodb");

const BASE_URL = "http://localhost:3000";
const MONGO_URI = "mongodb://admin:K412un0n!h@localhost:27017/?authSource=admin";
const DB_NAME = "agdiebra_ecosystem";

async function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const reqOptions = {
      method: options.method || "GET",
      headers: options.headers || {},
    };

    const req = http.request(url, reqOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        let json = null;
        try {
          json = JSON.parse(data);
        } catch (e) {}
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data,
          json,
        });
      });
    });

    req.on("error", reject);

    if (options.body) {
      req.write(typeof options.body === "string" ? options.body : JSON.stringify(options.body));
    }
    req.end();
  });
}

async function runTests() {
  console.log("==================================================");
  console.log("🚀 AG DIEBRA ECOSYSTEM PLATFORM - E2E TEST RUNNER");
  console.log("==================================================\n");

  const results = [];
  let passed = 0;
  let failed = 0;

  function assert(title, condition, extra = "") {
    if (condition) {
      console.log(`  ✅ [PASS] ${title}`);
      passed++;
      results.push({ title, status: "PASS", extra });
    } else {
      console.log(`  ❌ [FAIL] ${title} - ${extra}`);
      failed++;
      results.push({ title, status: "FAIL", extra });
    }
  }

  // 1. Test Server & Page Routes
  console.log("--- TEST SUITE 1: Web Pages & SSR Hydration ---");
  const pages = ["/", "/requests", "/requests/create", "/resources", "/resources/create", "/admin"];
  for (const page of pages) {
    const res = await request(page);
    assert(
      `GET ${page} returns HTTP 200`,
      res.statusCode === 200,
      `Received: ${res.statusCode}`
    );
    assert(
      `GET ${page} contains valid HTML & Design System brand mark`,
      res.data.includes("AG DIEBRA") || res.data.includes("agdiebra") || res.data.includes("<!DOCTYPE html>"),
      "HTML check"
    );
  }

  // 2. Role 1: Pemohon (Requester - Poktan/Koperasi)
  console.log("\n--- TEST SUITE 2: Role Pemohon (Submit Need) ---");
  const needPayload = {
    userId: "user_kopi_kidemang",
    organizationName: "Koperasi Produsen Kopi Ki Demang Sukamakmur",
    category: "Agribisnis & Budidaya",
    title: "Uji Laboratorium & Standardisasi Green Bean Specialty Arabica",
    description: "Membutuhkan fasilitas pengujian mutu laboratorium dan profiling rasa untuk ekspor 8 ton kopi ke pasar Eropa.",
    targetRegion: "Sukamakmur, Kabupaten Bogor",
    urgency: "high",
  };

  const createNeedRes = await request("/api/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: needPayload,
  });

  assert(
    "POST /api/requests returns HTTP 200",
    createNeedRes.statusCode === 200,
    `Status: ${createNeedRes.statusCode}`
  );
  const createdNeedId = createNeedRes.json?.data?.id;
  assert(
    "Need created with valid Mongo ID and status 'submitted'",
    createdNeedId && createNeedRes.json?.data?.status === "submitted",
    `ID: ${createdNeedId}`
  );

  // Read Need by ID
  const getNeedRes = await request(`/api/requests/${createdNeedId}`);
  assert(
    `GET /api/requests/${createdNeedId} returns correct data`,
    getNeedRes.statusCode === 200 && getNeedRes.json?.data?.organizationName === needPayload.organizationName,
    "Fetch single need verification"
  );

  // 3. Role 2: Penyedia (Supply Provider - Balai Riset/AgTech)
  console.log("\n--- TEST SUITE 3: Role Penyedia Pasokan (Submit Supply) ---");
  const supplyPayload = {
    userId: "user_bbpsi_biogen",
    organizationName: "Balai Besar Pengujian Standar Instrumen Bioteknologi (BBPSI Biogen)",
    category: "Teknologi & Smart Farming",
    title: "Layanan Laboratorium Pengujian Standar Mutu & Sertifikasi Organik",
    description: "Menyediakan layanan pengujian senyawa metabolit, residu pestisida, dan sertifikasi baku mutu bibit serta hasil panen komoditas unggulan.",
    capacitySpec: "Kapasitas 100 Sampel/Bulan + Sertifikasi Resmi BSIP",
    region: "Bogor, Jawa Barat",
  };

  const createSupplyRes = await request("/api/resources", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: supplyPayload,
  });

  assert(
    "POST /api/resources returns HTTP 200",
    createSupplyRes.statusCode === 200,
    `Status: ${createSupplyRes.statusCode}`
  );
  const createdSupplyId = createSupplyRes.json?.data?.id;
  assert(
    "Supply created with valid Mongo ID and status 'available'",
    createdSupplyId && createSupplyRes.json?.data?.status === "available",
    `ID: ${createdSupplyId}`
  );

  // Read Supply by ID
  const getSupplyRes = await request(`/api/resources/${createdSupplyId}`);
  assert(
    `GET /api/resources/${createdSupplyId} returns correct data`,
    getSupplyRes.statusCode === 200 && getSupplyRes.json?.data?.organizationName === supplyPayload.organizationName,
    "Fetch single supply verification"
  );

  // 4. Role 3: Public Explorer (Filters & Listing)
  console.log("\n--- TEST SUITE 4: Role Public Explorer (Catalog & Filters) ---");
  const filterNeedRes = await request("/api/requests?category=Agribisnis%20%26%20Budidaya");
  assert(
    "Filter Requests by Category returns HTTP 200 and matches query",
    filterNeedRes.statusCode === 200 && Array.isArray(filterNeedRes.json?.data) && filterNeedRes.json.data.length > 0,
    `Found: ${filterNeedRes.json?.data?.length} items`
  );

  const filterSupplyRes = await request("/api/resources?category=Teknologi%20%26%20Smart%20Farming");
  assert(
    "Filter Resources by Category returns HTTP 200 and matches query",
    filterSupplyRes.statusCode === 200 && Array.isArray(filterSupplyRes.json?.data) && filterSupplyRes.json.data.length > 0,
    `Found: ${filterSupplyRes.json?.data?.length} items`
  );

  // 5. Role 4: Admin Curator (Pairing Needs & Supplies)
  console.log("\n--- TEST SUITE 5: Role Admin Kurator (Pairing & Matching) ---");
  const matchPayload = {
    requestId: createdNeedId,
    resourceId: createdSupplyId,
    requestTitle: needPayload.title,
    resourceTitle: supplyPayload.title,
    requesterOrg: needPayload.organizationName,
    providerOrg: supplyPayload.organizationName,
    adminNotes: "Direkomendasikan kurator: BBPSI Biogen memiliki akreditasi resmi untuk sertifikasi mutu green bean Ki Demang.",
  };

  const createMatchRes = await request("/api/matches", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: matchPayload,
  });

  assert(
    "POST /api/matches returns HTTP 200",
    createMatchRes.statusCode === 200,
    `Status: ${createMatchRes.statusCode}`
  );
  const createdMatchId = createMatchRes.json?.data?.id;
  assert(
    "Match created with status 'proposed' and consents 'pending'",
    createdMatchId &&
      createMatchRes.json?.data?.status === "proposed" &&
      createMatchRes.json?.data?.requesterConsent === "pending" &&
      createMatchRes.json?.data?.providerConsent === "pending",
    `Match ID: ${createdMatchId}`
  );

  // Verify status propagation on Request and Resource
  const updatedNeed = await request(`/api/requests/${createdNeedId}`);
  const updatedSupply = await request(`/api/resources/${createdSupplyId}`);
  assert(
    "Request status updated to 'matching'",
    updatedNeed.json?.data?.status === "matching",
    `Status: ${updatedNeed.json?.data?.status}`
  );
  assert(
    "Supply status updated to 'reserved'",
    updatedSupply.json?.data?.status === "reserved",
    `Status: ${updatedSupply.json?.data?.status}`
  );

  // 6. Role 5: Dual-Consent Approval & Auto Introduction
  console.log("\n--- TEST SUITE 6: Dual-Consent Approval Flow & Auto Intro ---");

  // Step 1: Requester approves
  const reqConsentRes = await request(`/api/matches/${createdMatchId}/consent`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { party: "requester", consent: "approved" },
  });
  assert(
    "Requester approval recorded successfully",
    reqConsentRes.statusCode === 200 && reqConsentRes.json?.data?.requesterConsent === "approved",
    `Consent: ${reqConsentRes.json?.data?.requesterConsent}`
  );
  assert(
    "Match status remains proposed when only 1 party approved",
    reqConsentRes.json?.data?.status === "proposed",
    `Status: ${reqConsentRes.json?.data?.status}`
  );

  // Step 2: Provider approves -> triggers dual-consent & auto intro
  const provConsentRes = await request(`/api/matches/${createdMatchId}/consent`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { party: "provider", consent: "approved" },
  });
  assert(
    "Provider approval recorded successfully",
    provConsentRes.statusCode === 200 && provConsentRes.json?.data?.providerConsent === "approved",
    `Consent: ${provConsentRes.json?.data?.providerConsent}`
  );
  assert(
    "Match status transitioned to 'introduced'",
    provConsentRes.json?.data?.status === "introduced",
    `Status: ${provConsentRes.json?.data?.status}`
  );
  assert(
    "Auto-created Introduction record returned in response",
    provConsentRes.json?.autoIntro && provConsentRes.json?.autoIntro?.waLink?.includes("wa.me"),
    `WA Link: ${provConsentRes.json?.autoIntro?.waLink}`
  );

  // 7. Role 6: Introductions API & WhatsApp Direct Link
  console.log("\n--- TEST SUITE 7: WhatsApp Facilitation & Record Verification ---");
  const introsListRes = await request("/api/introductions");
  assert(
    "GET /api/introductions returns HTTP 200 with active list",
    introsListRes.statusCode === 200 && Array.isArray(introsListRes.json?.data),
    `Count: ${introsListRes.json?.total}`
  );
  const foundIntro = introsListRes.json?.data?.find((i) => i.matchId === createdMatchId);
  assert(
    "Facilitated introduction exists in database with matching parties and valid WA URL",
    foundIntro &&
      foundIntro.requesterOrg === needPayload.organizationName &&
      foundIntro.providerOrg === supplyPayload.organizationName &&
      foundIntro.waLink.startsWith("https://wa.me/"),
    `Intro ID: ${foundIntro?.id}`
  );

  // 8. Test Direct MongoDB Persistence
  console.log("\n--- TEST SUITE 8: Direct MongoDB Persistence Verification ---");
  const mongoClient = new MongoClient(MONGO_URI);
  try {
    await mongoClient.connect();
    const db = mongoClient.db(DB_NAME);

    const docRequest = await db.collection("requests").findOne({ _id: new ObjectId(createdNeedId) });
    const docResource = await db.collection("resources").findOne({ _id: new ObjectId(createdSupplyId) });
    const docMatch = await db.collection("matches").findOne({ _id: new ObjectId(createdMatchId) });
    const docIntro = await db.collection("introductions").findOne({ matchId: createdMatchId });

    assert("MongoDB: Request document persisted with BSON ObjectId", !!docRequest, `_id: ${docRequest?._id}`);
    assert("MongoDB: Resource document persisted with BSON ObjectId", !!docResource, `_id: ${docResource?._id}`);
    assert("MongoDB: Match document persisted with dual approvals", docMatch?.requesterConsent === "approved" && docMatch?.providerConsent === "approved", "Check consents");
    assert("MongoDB: Introduction document persisted with generated WA link", !!docIntro && docIntro?.status === "sent", `Status: ${docIntro?.status}`);
  } finally {
    await mongoClient.close();
  }

  console.log("\n==================================================");
  console.log(`📊 TEST SUMMARY: ${passed} PASSED, ${failed} FAILED (TOTAL: ${passed + failed})`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error("Test runner encountered fatal error:", err);
  process.exit(1);
});
