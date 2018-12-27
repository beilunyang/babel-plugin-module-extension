# babel-plugin-module-extension
A babel plugin that transform the extension of the imported module

![MIT](https://camo.githubusercontent.com/a54c47c4dc66472c38a6d33b1833d9f6e5adfc8b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f657870726573732e737667)

[![NPM](https://nodei.co/npm/babel-plugin-module-extension.png)](https://nodei.co/npm/babel-plugin-module-extension/)

## Install
```javascript
npm install --save-dev babel-plugin-module-extension
// or
yarn add --dev babel-plugin-module-extension
```

## Usage
```javascript
// .babelrc
{
  "plugins": [
    ["module-extension", options]
  ]
}
```
### Options
options is a object
``` javascript
{
  less: 'css', // less is your original ext, css is your target ext
  js: '', // if target ext is empty string, plugin will remove the ext
}
```

## License
MIT
