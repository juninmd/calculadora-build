/**
 * Security headers middleware.
 *
 * Sets hardened response headers (CSP, HSTS, X-Frame-Options, etc.) on every
 * response to mitigate clickjacking, MIME sniffing, referrer leakage and
 * mixed-content risks. The Content-Security-Policy is overridable through the
 * CSP_POLICY environment variable (see src/config.js).
 *
 * Returns:
 *   function: Express middleware.
 */

'use strict';

/**
 * Create the security headers middleware.
 *
 * Args:
 *   config (object): Application settings (see src/config.js).
 *
 * Returns:
 *   function: Express middleware.
 */
function securityHeaders(config) {
  const hstsValue = `max-age=${config.hstsMaxAge}; includeSubDomains`;

  return function securityHeadersMiddleware(req, res, next) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('X-XSS-Protection', '0');
    res.setHeader('Content-Security-Policy', config.cspPolicy);
    res.setHeader('Strict-Transport-Security', hstsValue);
    next();
  };
}

module.exports = securityHeaders;
