// Smoke test against the production build. Run `npm run build` first.
import { spawn } from "node:child_process";
import assert from "node:assert/strict";

const PORT = 3123;
const BASE = `http://localhost:${PORT}`;

const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
  stdio: ["ignore", "pipe", "inherit"],
});

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(BASE);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("server did not start");
}

const results = [];
async function check(name, fn) {
  try {
    await fn();
    results.push({ name, ok: true });
  } catch (err) {
    results.push({ name, ok: false, err });
  }
}

try {
  await waitForServer();
  const res = await fetch(BASE);
  const html = await res.text();

  await check("homepage returns 200 HTML", () => {
    assert.equal(res.status, 200);
    assert.match(res.headers.get("content-type") ?? "", /text\/html/);
  });

  await check("has title, lang and description", () => {
    assert.match(html, /<title>Yellow Cab Utah \| Home of the Great Ride!<\/title>/);
    assert.match(html, /<html lang="en"/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
  });

  await check("renders every section", () => {
    for (const text of [
      "Yellow Cab Airport Taxi Services",
      "Airport ADA Services",
      "Yellow Cab Meter Rates",
      "minimum zone charge",
      "SkiUtah Destinations",
      "Professional Independent Contractor Drivers",
      "Fighting for the Taxi industry",
      "Looking for a great deal?",
      "Town Car Service at Taxi Rates",
      "All the ways Yellow moves you",
      "favorite places and events",
    ]) {
      assert.ok(html.includes(text), `missing section text: ${text}`);
    }
  });

  await check("exactly one h1", () => {
    assert.equal(html.match(/<h1[\s>]/g)?.length, 1);
  });

  await check("every in-page anchor has a target id", () => {
    const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
    const anchors = [...html.matchAll(/href="#([^"!][^"]*)"/g)].map((m) => m[1]);
    assert.ok(anchors.length > 0);
    const missing = [...new Set(anchors)].filter((a) => !ids.has(a));
    assert.deepEqual(missing, [], `anchors without target: ${missing.join(", ")}`);
  });

  await check("every image has alt text", () => {
    const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
    assert.ok(imgs.length > 0);
    const bad = imgs.filter((tag) => !/\salt="[^"]+"/.test(tag));
    assert.deepEqual(bad, []);
  });

  await check("all referenced local assets load", async () => {
    const urls = new Set();
    for (const m of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) urls.add(m[1]);
    for (const m of html.matchAll(/srcSet="([^"]+)"/gi))
      for (const part of m[1].split(",")) urls.add(part.trim().split(" ")[0]);
    for (const m of html.matchAll(/url\((\/images\/[^)]+)\)/g)) urls.add(m[1]);
    const failed = [];
    for (const u of urls) {
      const r = await fetch(BASE + u.replaceAll("&amp;", "&"));
      if (!r.ok) failed.push(`${r.status} ${u}`);
    }
    assert.deepEqual(failed, []);
  });

  await check("tel and mailto links are well formed", () => {
    for (const m of html.matchAll(/href="tel:([^"]+)"/g))
      assert.match(m[1], /^\+1\d{10}$/, `bad tel: ${m[1]}`);
    for (const m of html.matchAll(/href="mailto:([^"]+)"/g))
      assert.match(m[1], /^[^@\s]+@[^@\s]+\.\w+$/, `bad mailto: ${m[1]}`);
  });

  await check("no dead services or inert play button", () => {
    assert.ok(!html.includes("plus.google.com"), "Google+ link present");
    assert.ok(!/aria-label="Play video"/.test(html), "play button that does nothing");
  });

  await check("copyright year is current", () => {
    const text = html.replaceAll("<!-- -->", "");
    assert.ok(text.includes(`© ${new Date().getFullYear()}.`));
  });

  await check("unknown route returns 404", async () => {
    const r = await fetch(`${BASE}/does-not-exist`);
    assert.equal(r.status, 404);
  });
} finally {
  server.kill();
}

for (const r of results) {
  console.log(`${r.ok ? "✓" : "✗"} ${r.name}${r.ok ? "" : `\n    ${r.err.message}`}`);
}
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
