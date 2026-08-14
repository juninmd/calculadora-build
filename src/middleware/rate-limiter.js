/**
 * In-memory fixed-window rate limiter.
 *
 * Protects the application from brute-force and denial-of-service abuse by
 * capping the number of requests a single client may make within a time
 * window. Buckets are keyed by client IP; expired buckets are pruned to avoid
 * unbounded memory growth.
 *
 * Returns:
 *   function: Express middleware.
 */

'use strict';

const PRUNE_THRESHOLD = 1000;

/**
 * Create the rate limiting middleware.
 *
 * Args:
 *   config (object): Application settings; uses rateLimitWindowMs and
 *     rateLimitMax.
 *
 * Returns:
 *   function: Express middleware that responds 429 once the limit is exceeded.
 */
function createRateLimiter(config) {
  const windowMs = config.rateLimitWindowMs;
  const max = config.rateLimitMax;
  const buckets = new Map();

  return function rateLimiter(req, res, next) {
    const now = Date.now();
    const key = req.ip;

    if (buckets.size > PRUNE_THRESHOLD) {
      for (const [candidate, bucket] of buckets) {
        if (now - bucket.resetAt >= windowMs) {
          buckets.delete(candidate);
        }
      }
    }

    const bucket = buckets.get(key);
    if (!bucket || now >= bucket.resetAt) {
      buckets.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    bucket.count += 1;
    if (bucket.count > max) {
      const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);
      res.setHeader('Retry-After', String(retryAfter));
      res.status(429).type('text/plain').send('Too Many Requests');
      return undefined;
    }

    return next();
  };
}

module.exports = createRateLimiter;
