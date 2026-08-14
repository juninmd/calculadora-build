/**
 * Express application factory for the calculadora server.
 *
 * Assembles the hardened middleware chain: security headers, rate limiting,
 * request validation, sensitive file blocking, restricted static serving,
 * an index catch-all route and centralized error handling. Exported so tests
 * can build isolated application instances with custom settings.
 *
 * Returns:
 *   object: { createApp } factory that returns an Express application.
 */

'use strict';

const express = require('express');
const consolidate = require('consolidate');

const { loadConfig } = require('./src/config');
const securityHeaders = require('./src/middleware/security-headers');
const createRateLimiter = require('./src/middleware/rate-limiter');
const validateRequest = require('./src/middleware/validate-request');
const sensitiveFiles = require('./src/middleware/sensitive-files');
const createErrorHandler = require('./src/error-handler');

/**
 * Create a configured Express application.
 *
 * Args:
 *   overrides (object|undefined): Settings merged over environment config,
 *     used by tests to tune limits.
 *
 * Returns:
 *   object: Express application.
 */
function createApp(overrides) {
  const config = { ...loadConfig(), ...(overrides || {}) };
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', config.trustProxy);
  app.set('views', __dirname);
  app.engine('html', consolidate.mustache);
  app.set('view engine', 'html');

  app.use(securityHeaders(config));
  app.use(createRateLimiter(config));
  app.use(validateRequest(config));
  app.use(sensitiveFiles(config));
  app.use(express.static(__dirname, { dotfiles: 'deny', index: false }));

  app.get('/*', (req, res) => res.render('index.html'));

  app.use((req, res) => res.status(404).type('text/plain').send('Not Found'));
  app.use(createErrorHandler());

  return app;
}

module.exports = { createApp };
