# AGENTS.md

## Purpose

This file gives **OpenAI Codex** the exact rules it must follow when editing or extending this repository.  *All instructions below override Codex defaults.*

## 1. Repository Layout

```
/               # ← repo root
|-- openapi/    # OpenAPI specs live here
|     |-- notion-webhook.json   # <—— primary spec
|-- tests/      # payload/contract tests (jest)
|-- scripts/    # helper scripts (lint, build)
|-- README.md
|-- AGENTS.md   # ← you are here ⚡
```

## 2. Coding & Formatting Rules

* **Indentation**: 2 spaces, no tabs.
* **Key ordering**: keep properties alphabetically sorted *within each level*.
* **File naming**: use kebab‑case and `.json` for specs.
* **Line length**: soft‑wrap at 100 chars.
* **Linter**: run `npm run lint:spec` after every change.

## 3. OpenAPI Contract Rules

1. **Paths must remain as web‑hook routes**—never mirror original Notion REST paths.
2. Every user‑supplied input **must appear directly at the root of the request body** unless the parameter is a simple `query` string.
3. Preserve existing `operationId` values.
4. All new endpoints **require**:

   * `summary`, `description` (clear, user‑oriented)
   * `operationId` (lowerCamelCase, unique)
   * `x-openai-isConsequential: false`
   * `x-openai-requiresUserConfirmation: false`
5. Response examples are encouraged but may be omitted if not available.
6. Keep the schema **OpenAPI 3.1** compliant—validate with `openapi-cli`.

## 4. Lint & Test Commands

```bash
# Lint spec & markdown
npm run lint:spec   # openapi-cli validate
npm run lint:md     # markdownlint **/*.md

# Jest contract tests
npm test
```

Codex, when you execute shell commands, you **must** prepend them with `npm run` if an npm script exists; otherwise call the binary directly.

## 5. Git & PR Workflow

1. Create a feature branch from `main`.
2. Commit with Conventional Commit messages.
3. Ensure `npm run lint:spec` passes locally **before pushing**.
4. Open a PR—CI will re‑run lint & tests.
5. If PR adds a new endpoint, automatically update the endpoint table in `README.md`.

## 6. Prohibited Actions

* Do **NOT** rename or delete existing paths.
* Do **NOT** wrap payload fields under a `body` object.
* Do **NOT** change the `servers[0].url` unless explicitly instructed.
* Do **NOT** bump `info.version` without updating changelog in PR description.

---

🙏  **Thank you, Codex!**  Please follow this AGENTS.md every time you modify the repo.
