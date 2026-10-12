import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
assert.match(html, /<title>Meridian — World Time & Currency<\/title>/, 'page title exists');
assert.match(html, /geocoding-api\.open-meteo\.com/, 'city search provider is configured');
assert.match(html, /api\.frankfurter\.dev\/v2\/rate\//, 'exchange-rate provider is configured');
assert.match(html, /restcountries\.com\/v3\.1\/alpha\//, 'country currency lookup is configured');
assert.match(html, /Intl\.DateTimeFormat/, 'IANA time-zone formatting is used');
assert.match(html, /setInterval\(tick,1000\)/, 'live clocks update every second');
assert.match(html, /localStorage\.setItem\(STORAGE_KEY/, 'city preferences are persisted');
assert.match(html, /openstreetmap\.org/, 'map attribution/provider is present');
assert.match(html, /prefers-reduced-motion/, 'reduced-motion preference is respected');

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1].trim())
  .filter(Boolean);
assert.ok(inlineScripts.length > 0, 'at least one inline application script exists');
for (const source of inlineScripts) new Script(source);
console.log('PASS: static feature smoke checks and inline JavaScript syntax validation');
