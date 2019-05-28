# JSONSchema to TypeScript Interface

This is a proof of concept.

## Usage

1. Clone this repo.

2. `npm i`

3. `node index.js examples/schema.json`

### Note on style

If there is a `.prettierrc.json` in che current working dir, it will be used to style the output interface.

## Options

- `-w './glob/path/**/schema.json'`: wathces a glob for changes
- `-o filename`: set output file name. Defaults to schema `"title"` property or input filename if missing.

## Dependencies

- [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript): jsonschema parse jsonschema and generate interfaces.
- [globby](https://github.com/sindresorhus/globby): resloves globs to paths
- [chokidar](https://github.com/paulmillr/chokidar): watches for changes

## License

MIT
