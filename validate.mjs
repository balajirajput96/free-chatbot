import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
assert.match(html, /<title>Free Local Chatbot<\/title>/);
assert.match(html, /id="messages"/);
assert.match(html, /id="composer"/);
assert.match(html, /localStorage/);
assert.match(html, /No data leaves this browser/);
assert.doesNotMatch(html, /<script[^>]+src=/i);
assert.doesNotMatch(html, /https?:\/\//i);
assert.doesNotMatch(html, /(?:sk|ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}/);
assert.doesNotMatch(html, /BEGIN (?:RSA|OPENSSH|PRIVATE) KEY/);

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
assert.equal(scripts.length, 1, "expected one inline application script");
new Function(scripts[0]);
console.log(`Validated index.html: ${html.length} bytes, ${scripts[0].length} bytes of JavaScript`);
