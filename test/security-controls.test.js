/**
 * Integration tests for the security controls.
 *
 * Exercises sensitive-file blocking, path traversal detection, request size
 * limits, rate limiting and Host header validation with both legitimate and
 * malicious inputs.
 */

'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');

const { startServer, stopServer, rawRequest } = require('./helpers');

const SENSITIVE_PATHS = [
  '/package.json',
  '/package-lock.json',
  '/server.js',
  '/app.js',
  '/Procfile',
  '/README.md',
  '/AGENTS.md',
  '/renovate.json',
  '/3rdpartylicenses.txt',
];

for (const path of SENSITIVE_PATHS) {
  test(`blocks disclosure of ${path}`, async (t) => {
    const { server, base } = await startServer();
    t.after(() => stopServer(server));

    const res = await fetch(`${base}${path}`);
    assert.equal(res.status, 403);
  });
}

test('blocks source map disclosure', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  for (const map of ['/vendor.bundle.js.map', '/main.bundle.js.map']) {
    const res = await fetch(`${base}${map}`);
    assert.equal(res.status, 403, map);
  }
});

test('blocks environment and secret files', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  for (const path of ['/.env', '/.env.local', '/.npmrc', '/.gitignore']) {
    const res = await fetch(`${base}${path}`);
    assert.equal(res.status, 403, path);
  }
});

test('blocks server source and dependency directories', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  for (const path of ['/src/config.js', '/node_modules/express/package.json']) {
    const res = await fetch(`${base}${path}`);
    assert.equal(res.status, 403, path);
  }
});

test('rejects path traversal payloads', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const payloads = [
    '/../../etc/passwd',
    '/..%2f..%2fetc%2fpasswd',
    '/%2e%2e/%2e%2e/etc/passwd',
    '/..%5c..%5c..%5cetc%5cpasswd',
  ];

  for (const payload of payloads) {
    const res = await rawRequest(base, payload);
    assert.equal(res.status, 400, payload);
  }
});

test('rejects null bytes in the request path', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await rawRequest(base, '/foo%00bar');
  assert.equal(res.status, 400);
});

test('rejects oversized request URLs', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await rawRequest(base, `/${'a'.repeat(3000)}`);
  assert.equal(res.status, 414);
});

test('rate limits clients that exceed the configured limit', async (t) => {
  const { server, base } = await startServer({
    rateLimitMax: 2,
    rateLimitWindowMs: 60000,
  });
  t.after(() => stopServer(server));

  assert.equal((await fetch(`${base}/`)).status, 200);
  assert.equal((await fetch(`${base}/`)).status, 200);

  const limited = await fetch(`${base}/`);
  assert.equal(limited.status, 429);
  assert.ok(Number(limited.headers.get('retry-after')) >= 0);
});

test('rejects disallowed Host headers and accepts allowed ones', async (t) => {
  const { server, base } = await startServer({
    allowedHosts: ['example.com'],
  });
  t.after(() => stopServer(server));

  const allowed = await rawRequest(base, '/', {
    headers: { Host: 'example.com' },
  });
  assert.equal(allowed.status, 200);

  const forbidden = await rawRequest(base, '/', {
    headers: { Host: 'evil.example.net' },
  });
  assert.equal(forbidden.status, 403);
});
