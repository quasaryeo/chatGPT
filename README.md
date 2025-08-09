# README.md

## 📑 Project: CustomGPT Webhook → n8n → Notion API

This repository contains an **OpenAPI 3.1** specification that lets a *Custom GPT* fire web‑hooks to an **n8n** instance, which in turn executes the real Notion API call.
The spec is intentionally *NOT* a 1‑to‑1 mirror of the Notion endpoints; instead every operation is exposed as an n8n **web‑hook path** so that n8n can do payload massaging, authentication and error‑handling on its side.

### 🔍 Why this indirection?

* **Custom GPT Actions** can only call HTTPS endpoints described by an OpenAPI spec.
* n8n already holds the Notion credentials and business logic.
* Wrapping everything behind a single base‑URL (`https://qylabn8n.duckdns.org/webhook`) lets us keep tokens out of the GPT spec and evolve the n8n flows independently.

```
Custom GPT ──► (OpenAPI Action) ──► n8n Web‑hook ──► Function Node ──► Notion API
```

### ✨ Current Endpoints


| Path | Verb | Purpose |
| ----- | ----- | ------- |
| `/appendBlockChildren/{id}` | **PATCH** | Append blocks to a container block |
| `/createDatabase/{id}` | **POST** | Create a new database under a parent page |
| `/createFileUpload` | **POST** | Create a file upload |
| `/createPage/{id}` | **POST** | Create a page inside a database. Payload shape identical to Notion’s but wrapped in `body` |
| `/deleteBlock/{id}` | **DELETE** | Move a block to the trash |
| `/getBlock/{id}` | **GET** | Retrieve a single block by path ID |
| `/getBlockChildren/{id}` | **GET** | Fetch children blocks for a container block |
| `/getDB/{id}` | **GET** | Fetch database meta by path ID |
| `/getPage/{id}` | **GET** | Retrieve page details by path ID |
| `/queryDB/{id}` | **POST** | Complex database query.  **All user params MUST be nested under a top‑level `body` object** |
| `/search` | **POST** | Search across pages and databases |
| `/updateBlock/{id}` | **PATCH** | Update block content or archived state |
| `/updateDatabase/{id}` | **PATCH** | Update database title or properties |
| `/updatePage/{id}` | **PATCH** | Update page properties or archived state |
> **IMPORTANT RULES**
>
> 1. *Do not* change existing paths. They are the contract expected by n8n.
> 2. Parameters must stay wrapped under a single root object (`body`) so that the n8n Function node can consume them without extra parsing.
> 3. New functionality **must follow the same wrapping convention** and live under the `/` root, *not* the original Notion URL schema (e.g. **never** `/databases/{id}/query`).

### 🛠 Local Development

1. Clone repo & install dev tools

   ```bash
   npm install          # openapi-cli, prettier, markdownlint
   ```
2. Validate the specification

   ```bash
   npm run lint:spec    # openapi-cli validate openapi/notion-webhook.json
   ```
3. Lint Markdown

   ```bash
   npm run lint:md      # markdownlint '**/*.md'
   ```
4. Format on save

   ```bash
   npm run format       # prettier --write .
   ```
5. Add tests (optional)

   ```bash
   npm test             # jest specs validating example payloads
   ```

### 🤝 Contributing

* **Branch name**: `feat/<short-topic>` or `fix/<short-topic>`
* **Conventional commits** (`feat: …`, `fix: …`, `docs: …`).
* Open a PR into **main**—CI will lint & validate the spec.
