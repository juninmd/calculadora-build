/**
 * Sensitive file blocking middleware.
 *
 * Prevents disclosure of server-side files that live next to the static
 * assets (package.json, server.js, source maps, keys, etc.) through direct
 * URL access. It is the defense-in-depth complement to express.static
 * dotfile denial.
 *
 * Returns:
 *   function: Express middleware.
 */

'use strict';

const { parse } = require('url');
const path = require('path');

const BLOCKED_NAMES = new Set([
  'server.js',
  'app.js',
  'package.json',
  'package-lock.json',
  'Procfile',
  'README.md',
  'AGENTS.md',
  'renovate.json',
  '3rdpartylicenses.txt',
  'npm-debug.log',
]);

const BLOCKED_EXTENSIONS = new Set([
  '.map',
  '.pem',
  '.key',
  '.p12',
  '.pfx',
  '.crt',
  '.csr',
  '.log',
]);

const BLOCKED_PREFIXES = ['node_modules/', 'src/', 'test/', 'secrets/', '.git/'];

/**
 * Create the sensitive file blocking middleware.
 *
 * Args:
 *   config (object): Application settings (unused but kept for consistency).
 *
 * Returns:
 *   function: Express middleware that responds 403 for blocked paths.
 */
function sensitiveFiles(config) {
  return function sensitiveFilesMiddleware(req, res, next) {
    const pathname = parse(req.url).pathname || '';
    const normalized = pathname.replace(/^\/+/, '');
    const lower = normalized.toLowerCase();
    const basename = path.basename(normalized);
    const extension = path.extname(basename).toLowerCase();

    const isEnvFile = basename.startsWith('.env');
    const isDotfile = basename.startsWith('.') && basename !== '.';
    const blockedPrefix = BLOCKED_PREFIXES.some((prefix) =>
      lower.startsWith(prefix)
    );

    if (
      BLOCKED_NAMES.has(basename) ||
      BLOCKED_EXTENSIONS.has(extension) ||
      isEnvFile ||
      isDotfile ||
      blockedPrefix
    ) {
      res.status(403).type('text/plain').send('Forbidden');
      return undefined;
    }

    return next();
  };
}

module.exports = sensitiveFiles;
