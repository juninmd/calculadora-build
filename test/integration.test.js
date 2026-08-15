const http = require('http');
const net = require('net');
const { createServer } = require('../src/server');

const getFreePort = () =>
  new Promise((resolve) => {
    const srv = net.createServer();
    srv.listen(0, () => {
      const port = srv.address().port;
      srv.close(() => resolve(port));
    });
  });

const get = (port, path = '/') =>
  new Promise((resolve, reject) => {
    const req = http.get({ hostname: '127.0.0.1', port, path }, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', reject);
  });

describe('integration: HTTP API', () => {
  let server;
  let port;

  beforeAll(async () => {
    port = await getFreePort();
    server = createServer(port);
    await new Promise((resolve) => server.once('listening', resolve));
  });

  afterAll(() => new Promise((resolve) => server.close(resolve)));

  it('responds to GET / with the calculator page', async () => {
    const res = await get(port, '/');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.body).toContain('<app-root>');
  });

  it('responds to unknown routes with the SPA fallback', async () => {
    const res = await get(port, '/api/nao-existe');
    expect(res.status).toBe(200);
    expect(res.body).toContain('Carregando');
  });

  it('serves the main bundle over HTTP', async () => {
    const res = await get(port, '/main.bundle.js');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/javascript/);
  });

  it('serves static CSS assets', async () => {
    const res = await get(port, '/assets/css/font-awesome.min.css');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/css/);
  });
});
