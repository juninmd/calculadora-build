const { after, before, describe, it } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const { createApp, resolvePort, DEFAULT_PORT, ROOT_DIR } = require('../src/app');

const FIXTURES_DIR = path.join(__dirname, 'fixtures', 'public');

describe('resolvePort', () => {
  it('parses a valid numeric port', () => {
    assert.equal(resolvePort('3000'), 3000);
    assert.equal(resolvePort(3000), 3000);
  });

  it('falls back to the default when the value is missing', () => {
    assert.equal(resolvePort(undefined), DEFAULT_PORT);
  });

  it('falls back to the default when the value is not a positive integer', () => {
    assert.equal(resolvePort(''), DEFAULT_PORT);
    assert.equal(resolvePort('abc'), DEFAULT_PORT);
    assert.equal(resolvePort('0'), DEFAULT_PORT);
    assert.equal(resolvePort('-1'), DEFAULT_PORT);
    assert.equal(resolvePort('1.5'), DEFAULT_PORT);
  });
});

describe('createApp', () => {
  let server;
  let baseUrl;

  before(async () => {
    const app = createApp({ publicDir: FIXTURES_DIR, viewsDir: FIXTURES_DIR });
    server = app.listen(0);
    await new Promise((resolve) => server.on('listening', resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
  });

  after(() => {
    server.close();
  });

  it('serves index.html at the root', async () => {
    const res = await fetch(baseUrl);
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-type'), /text\/html/);
    assert.match(await res.text(), /<app-root>/);
  });

  it('serves static assets', async () => {
    const res = await fetch(`${baseUrl}/app.js`);
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-type'), /javascript/);
    assert.match(await res.text(), /window\.__FIXTURE__/);
  });

  it('falls back to index.html for SPA deep links', async () => {
    const res = await fetch(`${baseUrl}/relatorio/2024`);
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-type'), /text\/html/);
    assert.match(await res.text(), /<app-root>/);
  });

  it('falls back to index.html for missing assets (SPA behavior)', async () => {
    const res = await fetch(`${baseUrl}/missing/file.txt`);
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-type'), /text\/html/);
  });
});

describe('createApp with default directories', () => {
  let server;
  let baseUrl;

  before(async () => {
    server = createApp().listen(0);
    await new Promise((resolve) => server.on('listening', resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
  });

  after(() => {
    server.close();
  });

  it('serves the real application entry point', async () => {
    const res = await fetch(baseUrl);
    assert.equal(res.status, 200);
    assert.match(await res.text(), /<app-root>/);
  });

  it('serves a real hashed bundle referenced by index.html', async () => {
    const res = await fetch(`${baseUrl}/main.7742122e22da277cc378.bundle.js`);
    assert.equal(res.status, 200);
    assert.match(res.headers.get('content-type'), /javascript/);
    assert.ok((await res.text()).length > 0);
  });

  it('exposes ROOT_DIR pointing at the repository root', () => {
    assert.equal(ROOT_DIR, path.join(__dirname, '..'));
  });
});