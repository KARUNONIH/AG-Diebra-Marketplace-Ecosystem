const http = require("http");

const BASE_URL = "http://localhost:3000";

function sendReq(path, options = {}) {
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

async function runBlackbox() {
  console.log("==========================================================");
  console.log("🕵️  AG DIEBRA ECOSYSTEM - COMPREHENSIVE BLACKBOX TEST SUITE");
  console.log("==========================================================\n");

  const testResults = [];
  let passed = 0;
  let failed = 0;

  function record(id, title, success, details = "") {
    if (success) {
      console.log(`  ✅ [PASS] [${id}] ${title}`);
      passed++;
      testResults.push({ id, title, status: "PASS", details });
    } else {
      console.log(`  ❌ [FAIL] [${id}] ${title} -> Details: ${details}`);
      failed++;
      testResults.push({ id, title, status: "FAIL", details });
    }
  }

  // ==========================================
  // SECTION 1: ROUTING & HTTP PROTOCOL INTEGRITY
  // ==========================================
  console.log("--- 1. HTTP Routing, Content-Type & 404 Boundary ---");

  const routes = [
    { path: "/", name: "Landing Hub" },
    { path: "/requests", name: "Requests Catalogue" },
    { path: "/requests/create", name: "Create Request Form" },
    { path: "/resources", name: "Resources Catalogue" },
    { path: "/resources/create", name: "Create Resource Form" },
    { path: "/admin", name: "Admin Dashboard" }
  ];

  for (let i = 0; i < routes.length; i++) {
    const r = routes[i];
    const res = await sendReq(r.path);
    record(
      `BB-01.${i + 1}`,
      `Route ${r.path} (${r.name}) responds with HTTP 200 & text/html`,
      res.statusCode === 200 && res.headers["content-type"]?.includes("text/html"),
      `Status: ${res.statusCode}`
    );
  }

  // 404 Page Check
  const notFoundRes = await sendReq("/random-unexisting-route-" + Date.now());
  record(
    "BB-01.7",
    "Non-existing route returns proper HTTP 404 Not Found",
    notFoundRes.statusCode === 404,
    `Status: ${notFoundRes.statusCode}`
  );

  // ==========================================
  // SECTION 2: EQUIVALENCE & BOUNDARY VALUE (BVA)
  // ==========================================
  console.log("\n--- 2. Input Boundary Values & Payload Extremes ---");

  // 10K character payload
  const hugeText = "A".repeat(10000);
  const bva1 = await sendReq("/api/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      organizationName: "Boundary Org",
      title: "Oversized Test Need",
      description: hugeText,
    }
  });
  record(
    "BB-02.1",
    "10,000-character payload handled without truncation crash",
    bva1.statusCode === 200 && bva1.json?.data?.id && bva1.json?.data?.description.length === 10000,
    `Status: ${bva1.statusCode}`
  );

  // Unicode, Emoji, and Quotation Escaping
  const unicodePayload = {
    organizationName: "🌾 PT Agro Mandiri 🇮🇩 «Special»",
    title: "Bibit Unggul & Kopi: ☕ 'Single Origin' \"Grade-A\" \\ / & < >",
    description: "Pertanian presisi 🚜 dengan sensor IoT 99.9% 日本語 العربية",
  };
  const bva2 = await sendReq("/api/resources", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: unicodePayload
  });
  record(
    "BB-02.2",
    "Complex UTF-8, emojis, quotes and non-Latin characters stored faithfully",
    bva2.statusCode === 200 &&
      bva2.json?.data?.organizationName === unicodePayload.organizationName &&
      bva2.json?.data?.title === unicodePayload.title,
    `Echoed title: ${bva2.json?.data?.title}`
  );

  // ==========================================
  // SECTION 3: SECURITY PROBING (XSS & INJECTION)
  // ==========================================
  console.log("\n--- 3. Security Probing (XSS, NoSQLi & Malformed Inputs) ---");

  // XSS Injection
  const xssString = "<script>alert('XSS_BREACH')</script><img src=x onerror=alert(1)>";
  const xssRes = await sendReq("/api/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      organizationName: "XSS Security Test Lab",
      title: xssString,
      description: xssString,
    }
  });
  const xssFetch = await sendReq(`/api/requests/${xssRes.json?.data?.id}`);
  record(
    "BB-03.1",
    "XSS script payloads serialized safely as literal text in JSON API",
    xssFetch.statusCode === 200 &&
      xssFetch.json?.data?.title === xssString &&
      !xssFetch.headers["content-type"]?.includes("text/html"),
    `Content-Type: ${xssFetch.headers["content-type"]}`
  );

  // Malformed JSON Syntax
  const malformedRes = await sendReq("/api/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{ "title": "bad json without close'
  });
  record(
    "BB-03.2",
    "Malformed JSON body rejected safely (HTTP 500/400) without crashing process",
    malformedRes.statusCode >= 400,
    `Status: ${malformedRes.statusCode}`
  );

  // Non-existent 24-hex ObjectId
  const dummyId = "000000000000000000000000";
  const notFoundItem = await sendReq(`/api/requests/${dummyId}`);
  record(
    "BB-03.3",
    "Non-existent 24-hex ObjectId returns clean HTTP 404 Not Found",
    notFoundItem.statusCode === 404,
    `Status: ${notFoundItem.statusCode}`
  );

  // Malformed ObjectId string (not 24 hex)
  const badIdRes = await sendReq("/api/requests/not-a-valid-hex-id");
  record(
    "BB-03.4",
    "Malformed ObjectId parameter handled safely with JSON error",
    badIdRes.statusCode >= 400 && badIdRes.json?.error,
    `Status: ${badIdRes.statusCode}, Error: ${badIdRes.json?.error}`
  );

  // ==========================================
  // SECTION 4: STATE MACHINE INTEGRITY (DUAL CONSENT)
  // ==========================================
  console.log("\n--- 4. Business Logic & State Machine Transition Testing ---");

  // Create clean pair for state machine test
  const testNeed = await sendReq("/api/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { title: "State Machine Need", organizationName: "State Org A" }
  });
  const testSupply = await sendReq("/api/resources", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { title: "State Machine Supply", organizationName: "State Org B" }
  });
  const testMatch = await sendReq("/api/matches", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      requestId: testNeed.json.data.id,
      resourceId: testSupply.json.data.id,
      requesterOrg: "State Org A",
      providerOrg: "State Org B"
    }
  });
  const matchId = testMatch.json.data.id;

  // Invalid Party validation
  const invalidParty = await sendReq(`/api/matches/${matchId}/consent`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { party: "hacker_third_party", consent: "approved" }
  });
  record(
    "BB-04.1",
    "Invalid party name is rejected with HTTP 400 Bad Request",
    invalidParty.statusCode === 400,
    `Status: ${invalidParty.statusCode}`
  );

  // Invalid Consent value validation
  const invalidConsent = await sendReq(`/api/matches/${matchId}/consent`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { party: "requester", consent: "undecided" }
  });
  record(
    "BB-04.2",
    "Invalid consent value is rejected with HTTP 400 Bad Request",
    invalidConsent.statusCode === 400,
    `Status: ${invalidConsent.statusCode}`
  );

  // Valid Approval Transition: Partial (Requester only)
  const part1 = await sendReq(`/api/matches/${matchId}/consent`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { party: "requester", consent: "approved" }
  });
  record(
    "BB-04.3",
    "Single party approval keeps status as 'proposed'",
    part1.json?.data?.status === "proposed" && part1.json?.data?.requesterConsent === "approved",
    `Status: ${part1.json?.data?.status}`
  );

  // Valid Approval Transition: Dual (Provider approves -> introduced)
  const part2 = await sendReq(`/api/matches/${matchId}/consent`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { party: "provider", consent: "approved" }
  });
  record(
    "BB-04.4",
    "Dual approvals trigger transition to 'introduced' & create valid WhatsApp direct link",
    part2.json?.data?.status === "introduced" && part2.json?.autoIntro?.waLink?.startsWith("https://wa.me/"),
    `Status: ${part2.json?.data?.status}, WA: ${part2.json?.autoIntro?.waLink?.substring(0, 35)}...`
  );

  // ==========================================
  // SECTION 5: CRUD CONTRACT & RESIDUAL INTEGRITY
  // ==========================================
  console.log("\n--- 5. Full Lifecycle CRUD Contract Testing ---");

  // Create
  const itemC = await sendReq("/api/resources", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { title: "CRUD Lifecycle Resource", organizationName: "Lifecycle Corp", capacitySpec: "10 Ton" }
  });
  const cId = itemC.json?.data?.id;

  // Read
  const itemR = await sendReq(`/api/resources/${cId}`);
  record(
    "BB-05.1",
    "CRUD: Read newly created item matches creation payload",
    itemR.statusCode === 200 && itemR.json?.data?.capacitySpec === "10 Ton",
    `Spec: ${itemR.json?.data?.capacitySpec}`
  );

  // Update
  const itemU = await sendReq(`/api/resources/${cId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: { capacitySpec: "25 Ton (Expanded)" }
  });
  record(
    "BB-05.2",
    "CRUD: Update PATCH successfully alters attribute",
    itemU.statusCode === 200 && itemU.json?.data?.capacitySpec === "25 Ton (Expanded)",
    `Updated spec: ${itemU.json?.data?.capacitySpec}`
  );

  // Delete
  const itemD = await sendReq(`/api/resources/${cId}`, { method: "DELETE" });
  const itemVerifyDeleted = await sendReq(`/api/resources/${cId}`);
  record(
    "BB-05.3",
    "CRUD: DELETE completely purges record (Subsequent GET returns HTTP 404)",
    itemD.statusCode === 200 && itemVerifyDeleted.statusCode === 404,
    `Delete status: ${itemD.statusCode}, Re-fetch: ${itemVerifyDeleted.statusCode}`
  );

  // ==========================================
  // SECTION 6: CONCURRENCY & LOAD PROBE
  // ==========================================
  console.log("\n--- 6. Concurrency & Stress Stability Probe ---");
  const concurrentCalls = 25;
  const startTime = Date.now();
  const promises = [];
  for (let i = 0; i < concurrentCalls; i++) {
    promises.push(sendReq("/api/requests"));
  }
  const responses = await Promise.all(promises);
  const elapsedMs = Date.now() - startTime;
  const allOk = responses.every((res) => res.statusCode === 200);

  record(
    "BB-06.1",
    `25 concurrent requests handled seamlessly (${elapsedMs}ms total, ~${Math.round(elapsedMs / concurrentCalls)}ms/req)`,
    allOk && elapsedMs < 2000,
    `Success: ${responses.filter(r => r.statusCode === 200).length}/${concurrentCalls}, Duration: ${elapsedMs}ms`
  );

  // ==========================================
  // SUMMARY
  // ==========================================
  console.log("\n==========================================================");
  console.log(`📋 BLACKBOX TEST REPORT: ${passed} PASSED, ${failed} FAILED (TOTAL: ${passed + failed})`);
  console.log("==========================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runBlackbox().catch((err) => {
  console.error("Fatal error during blackbox execution:", err);
  process.exit(1);
});
