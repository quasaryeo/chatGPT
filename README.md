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

| Path          | Verb     | Purpose                                                                                     |
| ------------- | -------- | ------------------------------------------------------------------------------------------- |
| `/getDB`      | **GET**  | Fetch database meta by `database_id` query param                                            |
| `/queryDB`    | **POST** | Complex database query.  **All user params MUST be nested under a top‑level `body` object** |
| `/createPage` | **POST** | Create a page inside a database. Payload shape identical to Notion’s but wrapped in `body`  |
| `/appendBlock` | **POST** | Append children to an existing block. Parameters nested under `body` |
| `/getBlock` | **GET** | Fetch block content by `block_id` query param |
| `/searchObjects` | **POST** | Search pages and blocks. All user params nested under `body` |
| `/updateBlock` | **POST** | Update an existing block. All user params nested under `body` |
| `/uploadFile` | **POST** | Upload a file to a page. All user params nested under `body` |

> **IMPORTANT RULES**
>
> 1. *Do not* change existing paths. They are the contract expected by n8n.
> 2. Parameters must stay wrapped under a single root object (`body`) so that the n8n Function node can consume them without extra parsing.
> 3. New functionality **must follow the same wrapping convention** and live under the `/` root, *not* the original Notion URL schema (e.g. **never** `/databases/{id}/query`).

### 🛠 Local Development

1. Clone repo & install dev tools

   ```bash
   npm install          # prettier / openapi‑cli / husky hooks
   ```
2. Validate the specification

   ```bash
   npm run lint:spec    # openapi-cli validate openapi/notion-webhook.json
   ```
3. Format on save

   ```bash
   npm run format       # prettier --write .
   ```
4. Add tests (optional)

   ```bash
   npm test             # jest specs validating example payloads
   ```

### 🤝 Contributing

* **Branch name**: `feat/<short-topic>` or `fix/<short-topic>`
* **Conventional commits** (`feat: …`, `fix: …`, `docs: …`).
* Open a PR into **main**—CI will lint & validate the spec.
