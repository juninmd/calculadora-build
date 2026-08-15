const net = require('net');
const { createServer, main } = require('../src/server');

const getFreePort = () =>
  new Promise((resolve) => {
    const srv = net.createServer();
    srv.listen(0, () => {
      const port = srv.address().port;
      srv.close(() => resolve(port));
    });
  });

describe('src/server', () => {
  describe('createServer', () => {
    it('returns a listening server on the requested port', async () => {
      const port = await getFreePort();
      const server = createServer(port);

      await new Promise((resolve) => server.once('listening', resolve));
      expect(server.address().port).toBe(port);

      await new Promise((resolve) => server.close(resolve));
    });
  });

  describe('main', () => {
    const originalPort = process.env.PORT;

    afterEach(() => {
      process.env.PORT = originalPort;
    });

    it('uses PORT when set', async () => {
      const port = await getFreePort();
      process.env.PORT = String(port);
      const server = main();

      await new Promise((resolve) => server.once('listening', resolve));
      expect(server.address().port).toBe(port);

      await new Promise((resolve) => server.close(resolve));
    });

    it('defaults to port 8080 when PORT is unset', async () => {
      delete process.env.PORT;
      const server = main();

      await new Promise((resolve) => server.once('listening', resolve));
      expect(server.address().port).toBe(8080);

      await new Promise((resolve) => server.close(resolve));
    });
  });
});
