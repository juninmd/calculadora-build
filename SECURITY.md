# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |

## Reporting a Vulnerability

Please **do not open a public issue** for security problems. Report them
privately using GitHub's [private vulnerability reporting](https://docs.github.com/code-security/security-advisories)
on the repository, or contact the maintainers directly. Include:

- The affected component and version.
- A description of the vulnerability.
- Steps to reproduce and, if possible, a proof of concept.
- Any suggested fix.

Reports are acknowledged and triaged promptly. Do not disclose the issue
publicly until it has been addressed.

## Security Controls

### Secrets Management

- Environment and secret files (`.env`, `.env.*.local`, `*.key`, `*.pem`,
  `*.p12`, `secrets/`, `config/secrets.yml`) are git-ignored.
- All configuration and sensitive data must be provided through environment
  variables at deploy time — never committed to the repository.
- `.github/workflows/security.yml` runs a gitleaks secret scan (via
  `juninmd/base-actions`) on every push to `main`/`master`.
- Source maps (which can expose application source) are no longer tracked and
  are blocked from being served.

### Dependency Security

- Versions are pinned exactly in `package.json` for reproducible builds.
- Dependabot (`.github/dependabot.yml`) and Renovate (`renovate.json`) open
  dependency update PRs weekly across npm, pip, GitHub Actions and Docker.
- `.github/workflows/audit.yml` runs `npm audit` on every push and PR so
  vulnerable dependencies fail CI.

### Server Hardening

- Static files are served from the application root with dotfiles denied;
  server files (`server.js`, `app.js`, `package.json`, `Procfile`, source
  maps, keys, secrets) are explicitly blocked (`src/middleware/sensitive-files.js`).
- A Content Security Policy plus HSTS, `X-Frame-Options: DENY`,
  `X-Content-Type-Options: nosniff` and `Referrer-Policy` headers are applied
  to every response (`src/middleware/security-headers.js`).
- Requests are rate limited per client IP to blunt brute force and abuse
  (`src/middleware/rate-limiter.js`).
- User input (the URL path and Host header) is validated: path traversal,
  null bytes, backslashes and oversized URLs are rejected, and an optional
  Host allow-list prevents host-header injection
  (`src/middleware/validate-request.js`).
- Errors are normalized so internal details and stack traces never reach
  clients (`src/error-handler.js`); `X-Powered-By` is disabled.

### Least Privilege

- CI workflows run with `permissions: contents: read` unless a job explicitly
  requires more.
- `trust proxy` is disabled by default; enable it only behind a TLS-terminating
  reverse proxy with `TRUST_PROXY=true`.
- The rate limiter and host validation are opt-in/opt-configurable; start
  strict and relax only with justification.

## Configuration Reference

| Variable               | Default                                | Purpose                                   |
| ---------------------- | -------------------------------------- | ----------------------------------------- |
| `PORT`                 | `8080`                                 | HTTP port                                 |
| `TRUST_PROXY`          | `false`                                | Trust `X-Forwarded-*` headers             |
| `RATE_LIMIT_WINDOW_MS` | `60000`                                | Rate limit window (ms)                    |
| `RATE_LIMIT_MAX`       | `100`                                  | Max requests per window per client        |
| `MAX_URL_LENGTH`       | `2048`                                 | Max accepted request URL length           |
| `ALLOWED_HOSTS`        | (empty)                                | Comma-separated allowed Host headers      |
| `CSP_POLICY`           | restrictive default (see `src/config.js`) | Content-Security-Policy value          |
| `HSTS_MAX_AGE`         | `31536000`                             | HSTS max-age in seconds                   |

## OWASP Top 10 (2021) Alignment

1. **Broken Access Control** – sensitive file blocking, dotfile denial, Host
   allow-list, least-privilege CI permissions.
2. **Cryptographic Failures** – TLS terminated at the proxy, HSTS advertised,
   secrets never stored in code.
3. **Injection** – request path validation (traversal/null-byte/oversized),
   no database access, no unsafe rendering of user input.
4. **Insecure Design** – input validation and rate limiting designed in from
   the start; tests cover both normal and malicious inputs.
5. **Security Misconfiguration** – hardened headers, `X-Powered-By` disabled,
   restricted static serving.
6. **Vulnerable and Outdated Components** – pinned versions, Dependabot +
   Renovate, `npm audit` in CI.
7. **Identification and Authentication Failures** – no sensitive endpoints;
   rate limiting mitigates enumeration/abuse.
8. **Software and Data Integrity Failures** – dependency PRs are human
   reviewed (no auto-merge), pinned transitive dependencies via lockfile.
9. **Security Logging and Monitoring** – internal errors are logged
   server-side with generic client responses.
10. **SSRF** – the application performs no outbound server-side requests.

## Deployment Checklist

- [ ] Serve over HTTPS only (terminate TLS at the proxy).
- [ ] Set `TRUST_PROXY=true` behind a TLS-terminating proxy.
- [ ] Set `ALLOWED_HOSTS` to the public hostname(s).
- [ ] Provide secrets via environment variables / platform secret store.
- [ ] Confirm `npm audit` reports no production vulnerabilities.
