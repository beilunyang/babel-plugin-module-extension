const pluginTester = require('babel-plugin-tester');
const moduleExtension = require('../index');

pluginTester({
  plugin: moduleExtension,
  pluginName: 'module extension',
  tests: {
    'transform .ts to .js in the imported module path': {
      code: 'import hello from "hello.ts";',
      output: 'import hello from "hello.js";',
      pluginOptions: {
        ts: 'js',
      },
    },
    'transform .ts to .js in the required module path': {
      code: 'const hello = require("./hello.ts");',
      output: 'const hello = require("./hello.js");',
      pluginOptions: {
        ts: 'js',
      },
    },
    'remove .ts in the imported module path': {
      code: 'import hello from "./hello.ts";',
      output: 'import hello from "./hello";',
      pluginOptions: {
        ts: '',
      },
    },
    'remove .ts in the required module path': {
      code: 'const hello = require("hello.ts");',
      output: 'const hello = require("hello");',
      pluginOptions: {
        ts: '',
      },
    },
  },
});
