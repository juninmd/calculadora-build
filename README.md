# Calculadora Build

[![CI/CD Pipeline](https://github.com/juninmd/calculadora-build/actions/workflows/ci.yml/badge.svg)](https://github.com/juninmd/calculadora-build/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/juninmd/calculadora-build/branch/main/graph/badge.svg)](https://codecov.io/gh/juninmd/calculadora-build)
[![GitHub release](https://img.shields.io/github/release/juninmd/calculadora-build.svg)](https://github.com/juninmd/calculadora-build/releases)

Sistema de Informação — Calculadora. Aplicação web servida por um servidor
[Express](https://expressjs.com/) (Node.js) a partir de artefatos de build já
compilados (Angular).

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalação

```bash
npm install
```

## Execução local

```bash
npm start
```

O servidor sobe em `http://localhost:8080` (ou na porta definida por `PORT`).

## Testes

```bash
# Rodar os testes com cobertura (mínimo exigido: 80%)
npm test

# Modo watch
npm run test:watch

# Modo CI (gera relatórios de cobertura + JUnit em coverage/)
npm run test:ci
```

Os relatórios são gerados em `coverage/` (`lcov.info` e `junit.xml`).

## Qualidade

```bash
npm run lint          # ESLint
npm run format:check  # Prettier (verificação)
npm run format        # Prettier (formatação)
npm run audit         # npm audit --audit-level=high
```

## Build

O repositório já contém os artefatos compilados. O script de build valida a
integridade deles (referências em `index.html` existentes e sintaxe dos bundles):

```bash
npm run build
```

## CI/CD

O pipeline está em `.github/workflows/ci.yml` e é acionado por eventos:

- `push` para `main` e `develop`
- `pull_request` para `main` e `develop`

| Stage            | O que faz                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------- |
| `lint`           | ESLint, Prettier e `npm audit`                                                                |
| `test`           | Jest + cobertura (>= 80%) + upload para Codecov                                               |
| `build`          | Verifica artefatos e publica build versionado                                                 |
| `deploy-staging` | Deploy automático para staging ao dar push em `develop`                                       |
| `deploy-prod`    | Deploy para produção ao dar push em `main` (requer aprovação manual no ambiente `production`) |

### Variáveis de ambiente / secrets

| Variável                        | Obrigatória | Descrição                                      |
| ------------------------------- | ----------- | ---------------------------------------------- |
| `PORT`                          | Não         | Porta do servidor (padrão: `8080`)             |
| `DEPLOY_WEBHOOK_URL`            | Não         | Webhook disparado no deploy (staging/produção) |
| `APP_URL`                       | Não         | URL usada no health check pós-deploy           |
| `SLACK_WEBHOOK`                 | Não         | Webhook do Slack para notificações de falha    |
| `CODECOV_TOKEN`                 | Não         | Token de upload para o Codecov                 |
| `SENTRY_AUTH_TOKEN`             | Não         | Token do Sentry para upload de source maps     |
| `SENTRY_ORG` / `SENTRY_PROJECT` | Não         | Organização/projeto Sentry                     |

> Os steps de deploy são condicionados à presença dos secrets — sem eles o
> pipeline executa normalmente até o stage `build`.

## Deploy

- **Staging:** automático via push em `develop` (ambiente `staging`).
- **Produção:** automático via push em `main` (ambiente `production`), pausado
  até aprovação manual na interface do GitHub.
- **Health check:** pós-deploy, o pipeline verifica `APP_URL`.
- **Rollback:** re-execute o último deploy bem-sucedido (Re-run jobs) ou reverta
  o release/commit e faça push. Para apps Heroku: `heroku releases:rollback`.

## Estrutura

```
server.js            # Entrypoint (node server.js)
src/app.js           # Criação do app Express (testável)
src/server.js        # Boot do servidor (createServer/main)
test/                # Testes unitários, de integração e E2E
scripts/             # Scripts auxiliares (ex.: verify-build)
.github/workflows/   # Pipelines de CI/CD
```

## Contribuindo

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para as diretrizes de desenvolvimento,
qualidade e CI/CD.

## Licença

ISC
