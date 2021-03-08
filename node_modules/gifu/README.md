# Gifu

[![npm (scoped)](https://img.shields.io/npm/v/gifu.svg)](https://www.npmjs.com/package/gifu)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/gifu.svg)](https://www.npmjs.com/package/gifu)

All your anime gifs

## Contribute

All the gifs are hand picked for quality assurance, feel free to add some of your favorites by creating a pull request. For any questions, contact me on Discord at [Nina#3643](https://discord.com/users/568824243396149248)

## Install

```
$ npm install gifu
```

## Usage

```js
const { gifu } = require("gifu");

gifu("bite")
  .then(result => console.log(result))
//=> "https://media1.tenor.com/images/1169d1ab96669e13062c1b23ce5b9b01/tenor.gif"
```
