const request = require('supertest');
const createApp = require('../src/app');

describe('createApp', () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  it('returns an express application', () => {
    expect(typeof app).toBe('function');
    expect(app).toHaveProperty('listen');
  });

  it('serves the calculator entry point on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<app-root>');
    expect(res.text).toContain('Carregando');
  });

  it('falls back to index.html for unknown SPA routes', async () => {
    const res = await request(app).get('/some/deep/route');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<app-root>');
  });

  it('serves static assets referenced by index.html', async () => {
    const css = await request(app).get('/assets/css/font-awesome.min.css');
    expect(css.status).toBe(200);
    expect(css.headers['content-type']).toMatch(/text\/css/);

    const icon = await request(app).get('/favicon.ico');
    expect(icon.status).toBe(200);
  });

  it('serves compiled JavaScript bundles', async () => {
    const bundle = await request(app).get('/main.bundle.js');
    expect(bundle.status).toBe(200);
    expect(bundle.headers['content-type']).toMatch(/javascript/);
  });
});
