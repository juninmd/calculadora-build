/**
 * Shared integration test helpers.
 *
 * Starts isolated application instances on ephemeral ports and sends raw HTTP
 * requests so malicious request-targets reach the server unnormalized.
 */

'use strict';

const http = require('node:http');

const { createApp } = require('../app');

/**
 * Start a fresh server instance on an ephemeral port.
 *
 * Args:
 *   overrides (object): Settings merged over environment config.
 *
 * Returns:
 *   object: { server, base } where base is the http://127.0.0.1:port prefix.
 */
async function startServer(overrides) {
  const server = createApp(overrides).listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  const { port } = server.address();
  return { server, base: `http://127.0.0.1:${port}` };
}

/**
 * Stop a server, forcefully closing lingering keep-alive connections.
 *
 * Args:
 *   server (object): Node http server.
 */
async function stopServer(server) {
  server.closeAllConnections();
  await new Promise((resolve) => server.close(resolve));
}

/**
 * Send a raw HTTP request without client-side URL normalization.
 *
 * Args:
 *   base (str): Server origin.
 *   requestPath (str): Raw request-target.
 *   options (object): Optional method and headers.
 *
 * Returns:
 *   object: { status, headers, body }.
 */
function rawRequest(base, requestPath, options = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(base);
    const req = http.request(
      {
        hostname: url.hostname,
        port: url.port,
        path: requestPath,
        method: options.method || 'GET',
        headers: options.headers || {},
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () =>
          resolve({ status: res.statusCode, headers: res.headers, body })
        );
      }
    );
    req.on('error', reject);
    req.end();
  });
}

module.exports = { startServer, stopServer, rawRequest };
