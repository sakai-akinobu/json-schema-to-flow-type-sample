const fs = require('fs');
const path = require('path');
const jsYaml = require('js-yaml');
const toFlowType = require('json-schema-to-flow-type');

const schemaFile = path.resolve(__dirname, '../schema/user.yml');
const schema = jsYaml.safeLoad(
  fs.readFileSync(schemaFile, 'utf8'),
  {schema: jsYaml.JSON_SCHEMA}
);

const flowType = toFlowType.parseSchema(schema);

const flowTypeFile = path.resolve(__dirname, '../flow-type/user.js');
fs.writeFileSync(flowTypeFile, `// @flow\n${flowType}`);
