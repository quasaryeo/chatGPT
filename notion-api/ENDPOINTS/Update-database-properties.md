# Update database properties

The API represents columns of a database in the Notion UI as database properties. To use the API to update a database’s properties, send a PATCH request with a properties body param. Remove a property To remove a database property, set the property object to null. "properties": { "J@cT": null, } "pr...

The API represents columns of a database in the Notion UI as database properties. 

To use the API to update a database’s properties, send a [PATCH request](https://developers.notion.com/reference/update-a-database) with a `properties` body param.

## Remove a property

To remove a database property, set the property object to null.
[block:code]
{
  "codes": [
    {
      "code": "\"properties\": {\n  \"J@cT\": null,\n}",
      "language": "json",
      "name": "removing properties by ID"
    }
  ],
  "sidebar": true
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "\"properties\": {\n  \"propertyToDelete\": null\n}",
      "language": "json",
      "name": "removing properties by name"
    }
  ],
  "sidebar": true
}
[/block]
## Rename a property

To change the name of a database property, indicate the new name in the `name` property object value.
[block:code]
{
  "codes": [
    {
      "code": "\"properties\": {\n\t\"J@cT\": {\n\t\t\"name\": \"New Property Name\"\n  }\n}",
      "language": "json",
      "name": "renaming properties by ID"
    }
  ],
  "sidebar": true
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "\"properties\": {\n  \"Old Property Name\": {\n    \"name\": \"New Property Name\n  }\n}",
      "language": "json",
      "name": "renaming properties by name"
    }
  ],
  "sidebar": true
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`name`",
    "0-1": "`string`",
    "0-2": "The name of the property as it appears in Notion."
  },
  "cols": 3,
  "rows": 1
}
[/block]
## Update property type

To update the property type, the property schema object should contain the key of the type. This type contains behavior of this property. Possible values of this key are `"title"`, `"rich_text"`, `"number"`, `"select"`, `"multi_select"`, `"date"`, `"people"`, `"files"`, `"checkbox"`, `"url"`, `"email"`, `"phone_number"`, `"formula"`, `"relation"`, `"rollup"`, `"created_time"`, `"created_by"`, `"last_edited_time"`, `"last_edited_by"`. Within this property, the configuration is a [property schema object](https://developers.notion.com/reference/property-schema-object).

[block:callout]
{
  "type": "danger",
  "title": "Limitations",
  "body": "Note that the property type of the `title` cannot be changed.\n\nIt's not possible to update the `name` or `options` values of a `status` property via the API."
}
[/block]
### Select configuration updates

To update an existing select configuration, the property schema object optionally contains the following configuration within the `select` property:
[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Example value",
    "0-0": "`options`",
    "0-1": "optional array of [existing select options](#existing-select-options) and [select option objects](ref:create-a-database#select-options)",
    "0-2": "Settings for select properties. If an existing option is omitted, it will be removed from the database property. New options will be added to the database property."
  },
  "cols": 4,
  "rows": 1
}
[/block]
#### Existing select options

Note that the name and color of an existing option cannot be updated. 
[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Example value",
    "0-0": "`name`",
    "0-1": "optional `string`",
    "0-2": "Name of the option.",
    "0-3": "`\"Fruit\"`",
    "1-0": "`id`",
    "1-1": "optional `string`",
    "1-2": "ID of the option.",
    "1-3": "`\"ff8e9269-9579-47f7-8f6e-83a84716863c\"\n`"
  },
  "cols": 4,
  "rows": 2
}
[/block]
### Multi-select configuration updates

To update an existing select configuration, the property schema object optionally contains the following configuration within the `multi_select` property:
[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Example value",
    "0-0": "`options`",
    "0-1": "optional array of [existing select options](#existing-multi-select-options) and [multi-select option objects](ref:create-a-database#multi-select-options)",
    "0-2": "Settings for multi select properties. If an existing option is omitted, it will be removed from the database property. New options will be added to the database property."
  },
  "cols": 4,
  "rows": 1
}
[/block]
#### Existing multi-select options

Note that the name and color of an existing option cannot be updated. 
[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Example value",
    "0-0": "`name`",
    "0-1": "`string`",
    "0-2": "Name of the option as it appears in Notion.",
    "0-3": "`\"Fruit\"`",
    "1-0": "`id`",
    "1-1": "optional `string`",
    "1-2": "ID of the option.",
    "1-3": "`\"ff8e9269-9579-47f7-8f6e-83a84716863c\"\n`"
  },
  "cols": 4,
  "rows": 2
}
[/block]
 ## Limitations

### Formula maximum depth
Formulas in Notion can have high levels of complexity beyond what the API can compute in a single request. For `formula` property values that exceed *have or exceed depth of 10*  referenced tables, the API will return a "Formula depth" error as a [`"validation_error"`](https://developers.notion.com/reference/errors)

As a workaround, you can retrieve the `formula` property object from the Retrieve a Database endpoint and use the formula expression to compute the value of more complex formulas. 

### Unsupported Rollup Aggregations
Due to the encoded cursor nature of computing rollup values, a subset of aggregation types are not supported. Instead the endpoint returns a list of *all* property_item objects for the following rollup aggregations:
* `show_unique` (Show unique values)
* `unique` (Count unique values)
* `median` (Median)

### `Could not find page/database` Error
A page property of type `rollup` and `formula` can involve computing a value based on the properties in another `relation` page. As such the integration needs permissions to the other `relation` page. If the integration doesn't have permissions page needed to compute the property value, the API will return a [`"object_not_found"`](https://developers.notion.com/reference/errors) error specifying the page the integration lacks permissions to. 

### Property value doesn't match UI after pagination
If a property value involves [pagination](https://developers.notion.com/reference/pagination) and the underlying properties or pages used to compute the property value change whilst the integration is paginating through results, the final value will impacted and is not guaranteed to be accurate.
