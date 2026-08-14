/**
 * Unit tests for the centralized error handler.
 *
 * Verifies that internal errors are logged and never leak details to clients,
 * that client errors expose only their message, and that already-sent
 * responses are forwarded unchanged.
 */

'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');

const createErrorHandler = require('../src/error-handler');

/**
 * Build a minimal Express-like mock response object.
 *
 * Returns:
 *   object: Mock res with status/type/send tracking.
 */
function createMockRes() {
  const res = { headersSent: false };
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.type = () => res;
  res.send = (body) => {
    res.body = body;
    return res;
  };
  return res;
}

test('hides internal details for 5xx errors', () => {
  const logs = [];
  const logger = { error: (format, message) => logs.push(message) };
  const handler = createErrorHandler(logger);
  const res = createMockRes();
  const err = new Error('password=supersecret db connection failed');

  handler(err, {}, res, () => {});

  assert.equal(res.statusCode, 500);
  assert.equal(res.body, 'Internal Server Error');
  assert.ok(!res.body.includes('password'));
  assert.ok(!res.body.includes('supersecret'));
  assert.equal(logs.length, 1);
  assert.match(logs[0], /supersecret/);
});

test('logs 5xx errors server-side only', () => {
  const logs = [];
  const handler = createErrorHandler({ error: (f, m) => logs.push(m) });
  const res = createMockRes();

  handler(new Error('boom'), {}, res, () => {});

  assert.equal(logs.length, 1);
  assert.equal(res.body, 'Internal Server Error');
});

test('exposes only the message for 4xx client errors', () => {
  const handler = createErrorHandler();
  const res = createMockRes();
  const err = new Error('Invalid input supplied');
  err.status = 400;

  handler(err, {}, res, () => {});

  assert.equal(res.statusCode, 400);
  assert.equal(res.body, 'Invalid input supplied');
});

test('forwards to next when headers were already sent', () => {
  const handler = createErrorHandler();
  const res = createMockRes();
  res.headersSent = true;
  let forwarded = false;

  handler(new Error('late failure'), {}, res, () => {
    forwarded = true;
  });

  assert.equal(forwarded, true);
});
