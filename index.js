#!/usr/bin/env node

require('make-promises-safe')

const argv = require('minimist')(process.argv.slice(2))

const { compileFromFile } = require('json-schema-to-typescript')
const { writeFileSync, existsSync } = require('fs')
const { join, basename, dirname, extname } = require('path')
const chokidar = require('chokidar')
const { sync } = require('globby')

const style =
  existsSync(join(process.cwd(), '.prettierrc.json')) &&
  require(join(process.cwd(), '.prettierrc.json'))

const bannerComment = `/* tslint:disable */\n/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* save, and this file will regenerate automatically.\n*/`

if (argv._.length > 1) {
  throw new Error(`Accepts one argument, found ${argv._.length}`)
}

let globs = argv._

if (argv.w) {
  globs = argv.w === true ? globs : [argv.w]
  chokidar.watch(globs).on('all', (event, originalFile) => {
    const [outPath] = splitPathAndName(originalFile)
    if (event === 'add') {
      console.log(`🔎 Watching ${originalFile}.`)
    }
    setTimeout(
      () =>
        generate(originalFile, outPath, argv.o).catch(err => {
          console.log(`❌ Error compiling ${originalFile}.`)
          console.log(`🔎 Watching for more changes...`)
        }),
      100,
    )
  })
} else {
  const paths = sync(globs)
  paths.forEach(path => {
    const [outPath] = splitPathAndName(path)
    generate(path, outPath, argv.o)
  })
}

async function generate(originalFile, outPath, fileName = 'interface') {
  const options = {
    bannerComment,
    cwd: outPath,
  }
  if (style) {
    options.style = style
  }
  writeFileSync(join(outPath, `${fileName}.ts`), await compileFromFile(originalFile, options))
}

function splitPathAndName(originalFile) {
  const outPath = dirname(originalFile)
  const fileName = basename(originalFile, extname(originalFile))
  return [outPath, fileName]
}
