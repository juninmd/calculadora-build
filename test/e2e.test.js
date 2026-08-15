const net = require('net');
const http = require('http');
const path = require('path');
const { spawn } = require('child_process');

const getFreePort = () =>
  new Promise((resolve) => {
    const srv = net.createServer();
    srv.listen(0, () => {
      const port = srv.address().port;
      srv.close(() => resolve(port));
    });
  });

const get = (port) =>
  new Promise((resolve, reject) => {
    const req = http.get({ hostname: '127.0.0.1', port, path: '/' }, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', reject);
  });

describe('e2e: real server boot', () => {
  let child;
  let port;

  beforeAll(async () => {
    port = await getFreePort();
    child = spawn(process.execPath, ['server.js'], {
      cwd: path.resolve(__dirname, '..'),
      env: { ...process.env, PORT: String(port) },
      stdio: ['ignore', 'pipe', 'inherit'],
    });

    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('server did not boot in time')), 15000);
      child.stdout.on('data', (chunk) => {
        if (String(chunk).includes('Aplicação ativa')) {
          clearTimeout(timer);
          resolve();
        }
      });
      child.on('exit', (code) => reject(new Error(`server exited early with code ${code}`)));
    });
  });

  afterAll(() => {
    if (child && !child.killed) {
      child.kill('SIGTERM');
    }
  });

  it('boots the real process and serves the calculator critical flow', async () => {
    const res = await get(port);
    expect(res.status).toBe(200);
    expect(res.body).toContain('<app-root>');
    expect(res.body).toContain('Carregando');
  });
});
