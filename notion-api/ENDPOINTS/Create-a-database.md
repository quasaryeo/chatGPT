Create a database

# OpenAPI definition
```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Notion API",
    "version": "1"
  },
  "servers": [
    {
      "url": "https://api.notion.com"
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "oauth2",
        "flows": {}
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/v1/databases": {
      "post": {
        "summary": "Create a database",
        "description": "",
        "operationId": "create-a-database",
        "parameters": [
          {
            "name": "Notion-Version",
            "in": "header",
            "description": "The [API version](/reference/versioning) to use for this request. The latest version is `<<latestNotionVersion>>`.",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "parent",
                  "properties"
                ],
                "properties": {
                  "parent": {
                    "type": "string",
                    "description": "A [page parent](/reference/database#page-parent)",
                    "format": "json"
                  },
                  "title": {
                    "type": "array",
                    "description": "Title of database as it appears in Notion. An array of [rich text objects](ref:rich-text)."
                  },
                  "properties": {
                    "type": "string",
                    "description": "Property schema of database. The keys are the names of properties as they appear in Notion and the values are [property schema objects](https://developers.notion.com/reference/property-schema-object).",
                    "format": "json"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"object\": \"database\",\n    \"id\": \"bc1211ca-e3f1-4939-ae34-5260b16f627c\",\n    \"created_time\": \"2021-07-08T23:50:00.000Z\",\n    \"last_edited_time\": \"2021-07-08T23:50:00.000Z\",\n    \"icon\": {\n        \"type\": \"emoji\",\n        \"emoji\": \"🎉\"\n    },\n    \"cover\": {\n        \"type\": \"external\",\n        \"external\": {\n            \"url\": \"https://website.domain/images/image.png\"\n        }\n    },\n    \"url\": \"https://www.notion.so/bc1211cae3f14939ae34260b16f627c\",\n    \"title\": [\n        {\n            \"type\": \"text\",\n            \"text\": {\n                \"content\": \"Grocery List\",\n                \"link\": null\n            },\n            \"annotations\": {\n                \"bold\": false,\n                \"italic\": false,\n                \"strikethrough\": false,\n                \"underline\": false,\n                \"code\": false,\n                \"color\": \"default\"\n            },\n            \"plain_text\": \"Grocery List\",\n            \"href\": null\n        }\n    ],\n    \"properties\": {\n        \"+1\": {\n            \"id\": \"Wp%3DC\",\n            \"name\": \"+1\",\n            \"type\": \"people\",\n            \"people\": {}\n        },\n        \"In stock\": {\n            \"id\": \"fk%5EY\",\n            \"name\": \"In stock\",\n            \"type\": \"checkbox\",\n            \"checkbox\": {}\n        },\n        \"Price\": {\n            \"id\": \"evWq\",\n            \"name\": \"Price\",\n            \"type\": \"number\",\n            \"number\": {\n                \"format\": \"dollar\"\n            }\n        },\n        \"Description\": {\n            \"id\": \"V}lX\",\n            \"name\": \"Description\",\n            \"type\": \"rich_text\",\n            \"rich_text\": {}\n        },\n        \"Last ordered\": {\n            \"id\": \"eVnV\",\n            \"name\": \"Last ordered\",\n            \"type\": \"date\",\n            \"date\": {}\n        },\n        \"Meals\": {\n            \"id\": \"%7DWA~\",\n            \"name\": \"Meals\",\n            \"type\": \"relation\",\n            \"relation\": {\n                \"database_id\": \"668d797c-76fa-4934-9b05-ad288df2d136\",\n                \"single_property\": {}\n            }\n        },\n        \"Number of meals\": {\n            \"id\": \"Z\\\\Eh\",\n            \"name\": \"Number of meals\",\n            \"type\": \"rollup\",\n            \"rollup\": {\n                \"rollup_property_name\": \"Name\",\n                \"relation_property_name\": \"Meals\",\n                \"rollup_property_id\": \"title\",\n                \"relation_property_id\": \"mxp^\",\n                \"function\": \"count\"\n            }\n        },\n        \"Store availability\": {\n            \"id\": \"s}Kq\",\n            \"name\": \"Store availability\",\n            \"type\": \"multi_select\",\n            \"multi_select\": {\n                \"options\": [\n                    {\n                        \"id\": \"cb79b393-d1c1-4528-b517-c450859de766\",\n                        \"name\": \"Duc Loi Market\",\n                        \"color\": \"blue\"\n                    },\n                    {\n                        \"id\": \"58aae162-75d4-403b-a793-3bc7308e4cd2\",\n                        \"name\": \"Rainbow Grocery\",\n                        \"color\": \"gray\"\n                    },\n                    {\n                        \"id\": \"22d0f199-babc-44ff-bd80-a9eae3e3fcbf\",\n                        \"name\": \"Nijiya Market\",\n                        \"color\": \"purple\"\n                    },\n                    {\n                        \"id\": \"0d069987-ffb0-4347-bde2-8e4068003dbc\",\n                        \"name\": \"Gus's Community Market\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"Photo\": {\n            \"id\": \"yfiK\",\n            \"name\": \"Photo\",\n            \"type\": \"files\",\n            \"files\": {}\n        },\n        \"Food group\": {\n            \"id\": \"CM%3EH\",\n            \"name\": \"Food group\",\n            \"type\": \"select\",\n            \"select\": {\n                \"options\": [\n                    {\n                        \"id\": \"6d4523fa-88cb-4ffd-9364-1e39d0f4e566\",\n                        \"name\": \"🥦Vegetable\",\n                        \"color\": \"green\"\n                    },\n                    {\n                        \"id\": \"268d7e75-de8f-4c4b-8b9d-de0f97021833\",\n                        \"name\": \"🍎Fruit\",\n                        \"color\": \"red\"\n                    },\n                    {\n                        \"id\": \"1b234a00-dc97-489c-b987-829264cfdfef\",\n                        \"name\": \"💪Protein\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"Name\": {\n            \"id\": \"title\",\n            \"name\": \"Name\",\n            \"type\": \"title\",\n            \"title\": {}\n        }\n    },\n    \"parent\": {\n        \"type\": \"page_id\",\n        \"page_id\": \"98ad959b-2b6a-4774-80ee-00246fb0ea9b\"\n    },\n    \"archived\": false\n}{\n    \"object\": \"database\",\n    \"id\": \"bc1211ca-e3f1-4939-ae34-5260b16f627c\",\n    \"created_time\": \"2021-07-08T23:50:00.000Z\",\n    \"last_edited_time\": \"2021-07-08T23:50:00.000Z\",\n    \"icon\": {\n        \"type\": \"emoji\",\n        \"emoji\": \"🎉\"\n    },\n    \"cover\": {\n        \"type\": \"external\",\n        \"external\": {\n            \"url\": \"https://website.domain/images/image.png\"\n        }\n    },\n    \"url\": \"https://www.notion.so/bc1211cae3f14939ae34260b16f627c\",\n    \"title\": [\n        {\n            \"type\": \"text\",\n            \"text\": {\n                \"content\": \"Grocery List\",\n                \"link\": null\n            },\n            \"annotations\": {\n                \"bold\": false,\n                \"italic\": false,\n                \"strikethrough\": false,\n                \"underline\": false,\n                \"code\": false,\n                \"color\": \"default\"\n            },\n            \"plain_text\": \"Grocery List\",\n            \"href\": null\n        }\n    ],\n    \"properties\": {\n        \"+1\": {\n            \"id\": \"Wp%3DC\",\n            \"name\": \"+1\",\n            \"type\": \"people\",\n            \"people\": {}\n        },\n        \"In stock\": {\n            \"id\": \"fk%5EY\",\n            \"name\": \"In stock\",\n            \"type\": \"checkbox\",\n            \"checkbox\": {}\n        },\n        \"Price\": {\n            \"id\": \"evWq\",\n            \"name\": \"Price\",\n            \"type\": \"number\",\n            \"number\": {\n                \"format\": \"dollar\"\n            }\n        },\n        \"Description\": {\n            \"id\": \"V}lX\",\n            \"name\": \"Description\",\n            \"type\": \"rich_text\",\n            \"rich_text\": {}\n        },\n        \"Last ordered\": {\n            \"id\": \"eVnV\",\n            \"name\": \"Last ordered\",\n            \"type\": \"date\",\n            \"date\": {}\n        },\n        \"Meals\": {\n            \"id\": \"%7DWA~\",\n            \"name\": \"Meals\",\n            \"type\": \"relation\",\n            \"relation\": {\n                \"database_id\": \"668d797c-76fa-4934-9b05-ad288df2d136\",\n                \"synced_property_name\": \"Related to Grocery List (Meals)\"\n            }\n        },\n        \"Number of meals\": {\n            \"id\": \"Z\\\\Eh\",\n            \"name\": \"Number of meals\",\n            \"type\": \"rollup\",\n            \"rollup\": {\n                \"rollup_property_name\": \"Name\",\n                \"relation_property_name\": \"Meals\",\n                \"rollup_property_id\": \"title\",\n                \"relation_property_id\": \"mxp^\",\n                \"function\": \"count\"\n            }\n        },\n        \"Store availability\": {\n            \"id\": \"s}Kq\",\n            \"name\": \"Store availability\",\n            \"type\": \"multi_select\",\n            \"multi_select\": {\n                \"options\": [\n                    {\n                        \"id\": \"cb79b393-d1c1-4528-b517-c450859de766\",\n                        \"name\": \"Duc Loi Market\",\n                        \"color\": \"blue\"\n                    },\n                    {\n                        \"id\": \"58aae162-75d4-403b-a793-3bc7308e4cd2\",\n                        \"name\": \"Rainbow Grocery\",\n                        \"color\": \"gray\"\n                    },\n                    {\n                        \"id\": \"22d0f199-babc-44ff-bd80-a9eae3e3fcbf\",\n                        \"name\": \"Nijiya Market\",\n                        \"color\": \"purple\"\n                    },\n                    {\n                        \"id\": \"0d069987-ffb0-4347-bde2-8e4068003dbc\",\n                        \"name\": \"Gus's Community Market\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"Photo\": {\n            \"id\": \"yfiK\",\n            \"name\": \"Photo\",\n            \"type\": \"files\",\n            \"files\": {}\n        },\n        \"Food group\": {\n            \"id\": \"CM%3EH\",\n            \"name\": \"Food group\",\n            \"type\": \"select\",\n            \"select\": {\n                \"options\": [\n                    {\n                        \"id\": \"6d4523fa-88cb-4ffd-9364-1e39d0f4e566\",\n                        \"name\": \"🥦Vegetable\",\n                        \"color\": \"green\"\n                    },\n                    {\n                        \"id\": \"268d7e75-de8f-4c4b-8b9d-de0f97021833\",\n                        \"name\": \"🍎Fruit\",\n                        \"color\": \"red\"\n                    },\n                    {\n                        \"id\": \"1b234a00-dc97-489c-b987-829264cfdfef\",\n                        \"name\": \"💪Protein\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"Name\": {\n            \"id\": \"title\",\n            \"name\": \"Name\",\n            \"type\": \"title\",\n            \"title\": {}\n        }\n    },\n    \"parent\": {\n        \"type\": \"page_id\",\n        \"page_id\": \"98ad959b-2b6a-4774-80ee-00246fb0ea9b\"\n    },\n    \"archived\": false,\n    \"is_inline\": false\n}"
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false,
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location --request POST 'https://api.notion.com/v1/databases/' \\\n--header 'Authorization: Bearer '\"$NOTION_API_KEY\"'' \\\n--header 'Content-Type: application/json' \\\n--header 'Notion-Version: 2022-06-28' \\\n--data '{\n    \"parent\": {\n        \"type\": \"page_id\",\n        \"page_id\": \"98ad959b-2b6a-4774-80ee-00246fb0ea9b\"\n    },\n    \"icon\": {\n    \t\"type\": \"emoji\",\n\t\t\t\"emoji\": \"📝\"\n  \t},\n  \t\"cover\": {\n  \t\t\"type\": \"external\",\n    \t\"external\": {\n    \t\t\"url\": \"https://website.domain/images/image.png\"\n    \t}\n  \t},\n    \"title\": [\n        {\n            \"type\": \"text\",\n            \"text\": {\n                \"content\": \"Grocery List\",\n                \"link\": null\n            }\n        }\n    ],\n    \"properties\": {\n        \"Name\": {\n            \"title\": {}\n        },\n        \"Description\": {\n            \"rich_text\": {}\n        },\n        \"In stock\": {\n            \"checkbox\": {}\n        },\n        \"Food group\": {\n            \"select\": {\n                \"options\": [\n                    {\n                        \"name\": \"🥦Vegetable\",\n                        \"color\": \"green\"\n                    },\n                    {\n                        \"name\": \"🍎Fruit\",\n                        \"color\": \"red\"\n                    },\n                    {\n                        \"name\": \"💪Protein\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"Price\": {\n            \"number\": {\n                \"format\": \"dollar\"\n            }\n        },\n        \"Last ordered\": {\n            \"date\": {}\n        },\n        \"Meals\": {\n          \"relation\": {\n            \"database_id\": \"668d797c-76fa-4934-9b05-ad288df2d136\",\n            \"single_property\": {}\n          }\n    \t\t},\n        \"Number of meals\": {\n          \"rollup\": {\n            \"rollup_property_name\": \"Name\",\n            \"relation_property_name\": \"Meals\",\n            \"function\": \"count\"\n          }\n        },\n        \"Store availability\": {\n            \"type\": \"multi_select\",\n            \"multi_select\": {\n                \"options\": [\n                    {\n                        \"name\": \"Duc Loi Market\",\n                        \"color\": \"blue\"\n                    },\n                    {\n                        \"name\": \"Rainbow Grocery\",\n                        \"color\": \"gray\"\n                    },\n                    {\n                        \"name\": \"Nijiya Market\",\n                        \"color\": \"purple\"\n                    },\n                    {\n                        \"name\": \"Gus'\\''s Community Market\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"+1\": {\n            \"people\": {}\n        },\n        \"Photo\": {\n            \"files\": {}\n        }\n    }\n}'"
            },
            {
              "language": "javascript",
              "code": "const { Client } = require('@notionhq/client');\n\nconst notion = new Client({ auth: process.env.NOTION_API_KEY });\n\n(async () => {\n  const response = await notion.databases.create({\n      parent: {\n        type: \"page_id\",\n        page_id: \"98ad959b-2b6a-4774-80ee-00246fb0ea9b\",\n      },\n      icon: {\n        type: \"emoji\",\n        emoji: \"📝\",\n      },\n      cover: {\n        type: \"external\",\n        external: {\n          url: \"https://website.domain/images/image.png\",\n        },\n      },\n      title: [\n        {\n          type: \"text\",\n          text: {\n            content: \"Grocery List\",\n            link: null,\n          },\n        },\n      ],\n      properties: {\n        Name: {\n          title: {},\n        },\n        Description: {\n          rich_text: {},\n        },\n        \"In stock\": {\n          checkbox: {},\n        },\n        \"Food group\": {\n          select: {\n            options: [\n              {\n                name: \"🥦Vegetable\",\n                color: \"green\",\n              },\n              {\n                name: \"🍎Fruit\",\n                color: \"red\",\n              },\n              {\n                name: \"💪Protein\",\n                color: \"yellow\",\n              },\n            ],\n          },\n        },\n        Price: {\n          number: {\n            format: \"dollar\",\n          },\n        },\n        \"Last ordered\": {\n          date: {},\n        },\n        Meals: {\n          relation: {\n            database_id: \"668d797c-76fa-4934-9b05-ad288df2d136\",\n            single_property: {},\n          },\n        },\n        \"Number of meals\": {\n          rollup: {\n            rollup_property_name: \"Name\",\n            relation_property_name: \"Meals\",\n            function: \"count\",\n          },\n        },\n        \"Store availability\": {\n          type: \"multi_select\",\n          multi_select: {\n            options: [\n              {\n                name: \"Duc Loi Market\",\n                color: \"blue\",\n              },\n              {\n                name: \"Rainbow Grocery\",\n                color: \"gray\",\n              },\n              {\n                name: \"Nijiya Market\",\n                color: \"purple\",\n              },\n              {\n                name: \"Gus'''s Community Market\",\n                color: \"yellow\",\n              },\n            ],\n          },\n        },\n        \"+1\": {\n          people: {},\n        },\n        Photo: {\n          files: {},\n        },\n      },\n    });\n  console.log(response);\n})();",
              "name": "Notion SDK for JavaScript"
            }
          ],
          "samples-languages": [
            "curl",
            "javascript"
          ]
        }
      }
    }
  },
  "x-readme": {
    "headers": [],
    "explorer-enabled": false,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true,
  "_id": "606ecc2cd9e93b0044cf6e47:6120015748fd6b0042985409"
}
```
