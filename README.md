# JSONSchema to TypeScript Interface

This is a **proof of concept.** This is just a convenient cli to add to your package.json and watch for changes on JSONSchemas.

## Usage as project dependency

### Install

`npm i -D jsonschema-to-interface`

Add scripts to your package.json

```javascript
"generate-interfaces": "generate-interfaces './src/**/schema.json'",
"generate-interfaces:watch": "generate-interfaces -w './src/**/schema.json'"
```

Call `generate-interfaces:watch` in parallel with your dev server.

## Usage as global CLI

### Install

`npm i -g jsonschema-to-interface`

Call it from the terminal

`generate-interfaces './src/**/schema.json'`

### Note on code style

If there is a `.prettierrc.json` in che current working dir, it will be used to style the output interface.

## Options

- `-w './glob/path/**/schema.json'`: wathces a glob for changes
- `-o filename`: set output file name. Defaults to schema `"title"` property or, if the `"title"` is missing, the input filename.

## Dependencies

- [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript): jsonschema parse jsonschema and generate interfaces.
- [globby](https://github.com/sindresorhus/globby): resloves globs to paths
- [chokidar](https://github.com/paulmillr/chokidar): watches for changes

## License

MIT
