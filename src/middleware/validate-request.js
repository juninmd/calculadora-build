/**
 * Request validation middleware.
 *
 * Rejects malformed, oversized or malicious requests before they reach the
 * static file handler. This is the input-validation layer for the only user
 * input the application accepts (the URL path and Host header). It blocks
 * path traversal attempts, null bytes, backslashes and Host header injection.
 *
 * Returns:
 *   function: Express middleware.
 */

'use strict';

const { parse } = require('url');

/**
 * Safely percent-decode a pathname, returning the raw value on failure.
 *
 * Args:
 *   value (string): Raw URL pathname.
 *
 * Returns:
 *   string: Decoded pathname.
 */
function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch (err) {
    return value;
  }
}

/**
 * Create the request validation middleware.
 *
 * Args:
 *   config (object): Application settings; uses allowedHosts and maxUrlLength.
 *
 * Returns:
 *   function: Express middleware.
 */
function validateRequest(config) {
  return function validateRequestMiddleware(req, res, next) {
    const pathname = parse(req.url).pathname || '';
    const decoded = safeDecode(pathname);

    if (decoded.includes('\0')) {
      res.status(400).type('text/plain').send('Bad Request');
      return undefined;
    }

    if (
      decoded.includes('\\') ||
      decoded.split('/').some((segment) => segment.includes('..'))
    ) {
      res.status(400).type('text/plain').send('Bad Request');
      return undefined;
    }

    if (req.url.length > config.maxUrlLength) {
      res.status(414).type('text/plain').send('URI Too Long');
      return undefined;
    }

    if (config.allowedHosts.length > 0) {
      const host = (req.headers.host || '').split(':')[0].toLowerCase();
      if (!config.allowedHosts.includes(host)) {
        res.status(403).type('text/plain').send('Forbidden');
        return undefined;
      }
    }

    return next();
  };
}

module.exports = validateRequest;
