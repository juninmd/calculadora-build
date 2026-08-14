/**
 * Central error handler.
 *
 * Converts thrown errors into safe HTTP responses. Internal errors (5xx) are
 * logged server-side and returned to the client as a generic message so no
 * stack traces or internal details leak to users. Client errors (4xx) expose
 * only their message.
 *
 * Returns:
 *   function: Express error-handling middleware.
 */

'use strict';

/**
 * Create the error handler middleware.
 *
 * Args:
 *   logger (object): Logger with an error method, defaults to console.
 *
 * Returns:
 *   function: Express error-handling middleware (err, req, res, next).
 */
function createErrorHandler(logger) {
  const log = logger || console;

  return function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    const status = Number.isInteger(err.status) ? err.status : 500;
    if (status >= 500) {
      log.error('Unhandled error: %s', err.stack || err.message);
    }

    const expose = status >= 400 && status < 500;
    const message = expose ? err.message || 'Error' : 'Internal Server Error';

    res.status(status).type('text/plain').send(message);
    return undefined;
  };
}

module.exports = createErrorHandler;
