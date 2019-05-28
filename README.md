<div align="center">

![jsonschema-logo-v1](https://user-images.githubusercontent.com/6388707/58492913-2b0c6c00-8172-11e9-83e7-04579b9e9252.png)

</div>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/jsonschema-to-interface.svg?style=flat)](https://www.npmjs.com/package/jsonschema-to-interface)
[![NPM downloads](https://img.shields.io/npm/dm/jsonschema-to-interface.svg?style=flat)](https://www.npmjs.com/package/jsonschema-to-interface)
[![built with typescript-lib-starter](https://img.shields.io/badge/built%20with-typescript--lib--starter%20-blue.svg)](https://github.com/fox1t/typescript-lib-starter)

</div>

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

or run it in watch mode:

`generate-interfaces -w './src/**/schema.json'`

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
