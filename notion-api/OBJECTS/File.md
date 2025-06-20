# File

This document explains how file objects function in the Notion API, detailing the types of file sources available—Notion-hosted files, files uploaded via API, and external files—and provides guidance on selecting the appropriate type for integration.

Files, images, and other media bring Notion pages to life — from rich visuals in image blocks to downloadable attachments in databases, or branded page icons and covers.

This guide introduces how file objects work in the Notion API, the different types of file sources you can work with, and how to choose the right type for your integration.

You’ll learn about:

- Files uploaded manually in the Notion UI — returned as Notion-hosted file objects (type: `file`)
- Files uploaded via API — created using the File Upload API (type: `file_upload`)
- External files — linked via a public URL (type: `external`)

## What is a file object?

In the Notion API, any media asset is represented as a file object. A file object stores metadata about the file and indicates where and how the file is hosted.

Each file object has a required type field that determines the structure of its contents:

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`type`",
    "0-1": "`string` (enum)",
    "0-2": "The type of the file object.  Possible type values are:  `\"file\"`, `\"file_upload\"`, `\"external\"`.",
    "1-0": "`file`\\|`file_upload`  \\| `external`",
    "1-1": "`object`",
    "1-2": "An object containing type-specific configuration.  \n  \nRefer to the type sections below for details on type-specific values."
  },
  "cols": 3,
  "rows": 2,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


Here’s what each type looks like:

```Text javascript
// Notion-hosted file (uploaded via UI)  
{  
  "type": "file",  
  "file": {  
    "url": "<https://s3.us-west-2.amazonaws.com/...">,  
    "expiry_time": "2025-04-24T22:49:22.765Z"  
  }  
}

// File uploaded via the Notion API  
{  
  "type": "file_upload",  
  "file_upload": {  
    "id": "43833259-72ae-404e-8441-b6577f3159b4"  
  }  
}

// External file  
{  
  "type": "external",  
  "external": {  
    "url": "<https://example.com/image.png">  
  }  
}
```

### Notion-hosted files (type: `file`)

These are files that users upload manually through the Notion app — such as dragging an image into a page, adding a PDF block, or setting a page cover.

**When to use:**

- You're working with existing content in a Notion workspace
- You’re accessing files that users manually added via drag-and-drop or upload

**Tips**

- Each time you fetch a Notion-hosted file, it includes a temporary public url valid for 1 hour.
- Don’t cache or statically reference these URLs. To refresh access, re-fetch the file object.

**These corresponding file objects contain the following fields:**

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Example value",
    "0-0": "`url`",
    "0-1": "`string`",
    "0-2": "An authenticated HTTP GET URL to the file.  \n  \nThe URL is valid for one hour. If the link expires, send an API request to get an updated URL.",
    "0-3": "`\"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bc6c6e0-32b8-4d55-8c12-3ae931f43a01/brocolli.jpeg?...\"`",
    "1-0": "`expiry_time`",
    "1-1": "`string` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date time)",
    "1-2": "The date and time when the link expires.",
    "1-3": "`\"2020-03-17T19:10:04.968Z\"`"
  },
  "cols": 4,
  "rows": 2,
  "align": [
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]


**Example snippet**:

```Text json
{  
  "type": "file",  
  "file": {  
    "url": "<https://s3.us-west-2.amazonaws.com/...">,  
    "expiry_time": "2025-04-24T22:49:22.765Z"  
  }  
}
```

<br />

### Files uploaded in the API (type: `file_upload`)

These are files uploaded using the File Upload API. You first create a [File Upload](ref:file-upload), send file content, and then reference it by ID to attach it.

**When to use:**

1. You want to programmatically upload files to Notion
2. You’re building automations or file-rich integrations

**Tips**

- Once uploaded, you can reuse the File Upload ID to attach the same file to multiple pages or blocks
- To learn more about file uploads, view the [Working with files and media](doc:working-with-files-and-media) guide

**These corresponding file objects contain the following fields:**

| Field | Type | Description                                                                       | Example Value                            |
| :---- | :--- | :-------------------------------------------------------------------------------- | :--------------------------------------- |
| `id`  | UUID | ID of a [File Upload](ref:file-upload) object that has a `status` of `"uploaded"` | `"43833259-72ae-404e-8441-b6577f3159b4"` |

**Example snippet**:

```Text json
{  
  "type": "file_upload",  
  "file_upload": {  
    "id": "43833259-72ae-404e-8441-b6577f3159b4"  
  }  
}
```

## External files (type: `external`)

Use this approach if you have already hosted your files elsewhere (e.g., S3, Dropbox, CDN) and want Notion to link to them.

**When to use:**

- You have an existing CDN or media server
- You have stable, permanent URLs
- Your files are publicly accessible and don’t require authentication
- You don’t want to upload files into Notion

**How to use:**

- Pass an HTTPS URL when creating or updating file-supporting blocks or properties.
- These links never expire and will always be returned as-is in API responses.

**These corresponding file objects contain the following fields:**

| Field | Type     | Description                              | Example value                            |
| :---- | :------- | :--------------------------------------- | :--------------------------------------- |
| `url` | `string` | A link to the externally hosted content. | `"https://website.domain/files/doc.txt"` |

**Example snippet**:

```Text json
{  
  "type": "external",  
  "external": {  
    "url": "<https://example.com/photo.png">  
  }  
}
```
