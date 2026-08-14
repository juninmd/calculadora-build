/**
 * Integration tests for core application behavior and security headers.
 *
 * Verifies the index page is served, hardened headers are present, static
 * assets work, no sensitive server headers leak, and unsupported methods get
 * a clean 404.
 */

'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');

const { startServer, stopServer, rawRequest } = require('./helpers');

test('serves the index page on the root path', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await fetch(`${base}/`);
  assert.equal(res.status, 200);
  assert.match(await res.text(), /<app-root>/);
});

test('renders the index page for deep application routes', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await fetch(`${base}/some/deep/path`);
  assert.equal(res.status, 200);
  assert.match(await res.text(), /<app-root>/);
});

test('sets hardened security headers on responses', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await fetch(`${base}/`);
  assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(res.headers.get('x-frame-options'), 'DENY');
  assert.equal(res.headers.get('referrer-policy'), 'no-referrer');
  assert.equal(res.headers.get('x-xss-protection'), '0');
  assert.match(res.headers.get('content-security-policy'), /default-src 'self'/);
  assert.match(res.headers.get('strict-transport-security'), /max-age=\d+/);
});

test('does not leak the x-powered-by header', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await fetch(`${base}/`);
  assert.equal(res.headers.get('x-powered-by'), null);
});

test('serves public static assets', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await fetch(`${base}/favicon.ico`);
  assert.equal(res.status, 200);
});

test('serves asset subdirectories', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await fetch(`${base}/assets/css/font-awesome.min.css`);
  assert.equal(res.status, 200);
  assert.match(res.headers.get('content-type'), /css/);
});

test('returns 404 for unsupported HTTP methods', async (t) => {
  const { server, base } = await startServer();
  t.after(() => stopServer(server));

  const res = await rawRequest(base, '/', { method: 'POST' });
  assert.equal(res.status, 404);
});
