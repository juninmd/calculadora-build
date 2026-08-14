/**
 * Runtime configuration for the calculadora application.
 *
 * Loads settings from environment variables with safe defaults so the
 * application works out of the box while remaining configurable for
 * production deployments. No secrets are ever read or stored here.
 *
 * Attributes:
 *   port (number): HTTP port the server listens on.
 *   trustProxy (bool): Trust X-Forwarded-* headers (needed behind TLS proxies).
 *   rateLimitWindowMs (number): Rate limiting window in milliseconds.
 *   rateLimitMax (number): Maximum requests allowed per window per client.
 *   allowedHosts (list[str]): Host header allow-list; empty disables the check.
 *   maxUrlLength (number): Maximum accepted request URL length.
 *   cspPolicy (str): Content-Security-Policy header value.
 *   hstsMaxAge (number): Strict-Transport-Security max-age in seconds.
 */

'use strict';

const DEFAULTS = {
  port: 8080,
  trustProxy: false,
  rateLimitWindowMs: 60000,
  rateLimitMax: 100,
  maxUrlLength: 2048,
  hstsMaxAge: 31536000,
  cspPolicy:
    "default-src 'self'; script-src 'self' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; img-src 'self' data:; " +
    "font-src 'self' data:; connect-src 'self'; object-src 'none'; " +
    "base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
};

/**
 * Parse an integer environment value, falling back to a default.
 *
 * Args:
 *   raw (str|undefined): Raw environment value.
 *   fallback (number): Default used when parsing fails.
 *
 * Returns:
 *   number: The parsed integer.
 */
function toInt(raw, fallback) {
  const parsed = parseInt(raw, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

/**
 * Load configuration from environment variables.
 *
 * Args:
 *   env (object): Environment lookup, defaults to process.env.
 *
 * Returns:
 *   object: Fully populated settings object.
 */
function loadConfig(env) {
  const source = env || process.env;
  return {
    port: toInt(source.PORT, DEFAULTS.port),
    trustProxy: source.TRUST_PROXY === 'true' || source.TRUST_PROXY === '1',
    rateLimitWindowMs: toInt(
      source.RATE_LIMIT_WINDOW_MS,
      DEFAULTS.rateLimitWindowMs
    ),
    rateLimitMax: toInt(source.RATE_LIMIT_MAX, DEFAULTS.rateLimitMax),
    maxUrlLength: toInt(source.MAX_URL_LENGTH, DEFAULTS.maxUrlLength),
    hstsMaxAge: toInt(source.HSTS_MAX_AGE, DEFAULTS.hstsMaxAge),
    cspPolicy: source.CSP_POLICY || DEFAULTS.cspPolicy,
    allowedHosts: (source.ALLOWED_HOSTS || '')
      .split(',')
      .map((host) => host.trim().toLowerCase())
      .filter(Boolean),
  };
}

module.exports = { loadConfig, DEFAULTS };
