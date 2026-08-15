# Contribuindo

Obrigado por contribuir com o **Calculadora Build**! Este documento define as
diretrizes de desenvolvimento, testes e integração contínua.

## Fluxo de trabalho

1. Crie uma branch a partir de `develop` (ou `main` para correções urgentes):
   `git checkout -b feat/nome-da-feature develop`
2. Implemente a mudança seguindo os padrões do projeto.
3. Adicione testes para a mudança (TDD sempre que possível).
4. Rode os checks locais (seção [Qualidade](#qualidade)).
5. Abra um Pull Request para `main` com uma descrição clara.

## Qualidade

Todo código precisa passar por estes checks **antes** do merge:

```bash
npm run lint          # ESLint
npm run format:check  # Prettier
npm run test          # Jest com cobertura
npm run build         # Validação dos artefatos de build
npm run audit         # Vulnerabilidades em dependências
```

O pipeline de CI (`.github/workflows/ci.yml`) executa todos esses checks em cada
`push`/`pull_request`. **Não pule stages** — o merge depende deles.

## Testes

- **Cobertura mínima: 80%** (verificado em `jest.config.js`).
- Unitários para a lógica de negócio (`test/app.test.js`, `test/server.test.js`).
- Integração para os endpoints HTTP (`test/integration.test.js`).
- E2E para fluxos críticos do usuário (`test/e2e.test.js`).
- Isolamento: cada teste possui suas próprias dependências; sem chamadas
  externas a APIs ou serviços reais.

## Padrões de código

- Seguir AGENTS.md (DRY, KISS, SOLID, YAGNI).
- Arquivos com no máximo 180 linhas.
- Módulos com docstring/descrição clara do propósito.
- Sem comentários desnecessários.

## CI/CD

- **Proibido adicionar triggers agendados (cron)** aos workflows. Use apenas
  eventos (`push`, `pull_request`, `workflow_dispatch`, `workflow_call`).
- Alterações no pipeline devem manter os stages `lint` → `test` → `build` →
  `deploy`.
- Segredos de CI (`DEPLOY_WEBHOOK_URL`, `APP_URL`, `SLACK_WEBHOOK`,
  `SENTRY_*`) são configurados como GitHub Secrets/Environments; nunca
  commite segredos.

## Deploy

- **Staging:** automático no push para `develop`.
- **Produção:** automático no push para `main`, com **aprovação manual**
  obrigatória no ambiente `production` do GitHub.
- **Rollback:** re-executar o deploy anterior bem-sucedido no GitHub Actions ou
  reverter o commit/release. Em Heroku: `heroku releases:rollback`.
- Após o deploy, o pipeline executa um health check contra `APP_URL`.

## Code review

Todo Pull Request deve ser revisado por pelo menos um outro desenvolvedor antes
do merge. Sinalize problemas de segurança, performance e cobertura de testes.
