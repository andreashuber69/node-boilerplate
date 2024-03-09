<h1 align="center">
  node-boilerplate
</h1>
<p align="center">
  <a href="https://github.com/andreashuber69/node-boilerplate/releases">
    <img src="https://img.shields.io/github/release-date/andreashuber69/node-boilerplate.svg" alt="Release Date">
  </a>
  <a href="https://github.com/andreashuber69/node-boilerplate/actions/workflows/ci.yml">
    <img src="https://github.com/andreashuber69/node-boilerplate/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
  <a href="https://github.com/andreashuber69/node-boilerplate/issues">
    <img src="https://img.shields.io/github/issues-raw/andreashuber69/node-boilerplate.svg" alt="Issues">
  </a>
  <a href="https://codeclimate.com/github/andreashuber69/node-boilerplate/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/f3afec1c547d0c33bf94/maintainability" alt="Maintainability">
  </a>
  <a href="https://coveralls.io/github/andreashuber69/node-boilerplate?branch=develop">
    <img src="https://coveralls.io/repos/github/andreashuber69/node-boilerplate/badge.svg?branch=develop" alt="Coverage">
  </a>
  <a href="https://github.com/andreashuber69/node-boilerplate/blob/develop/LICENSE">
    <img src="https://img.shields.io/github/license/andreashuber69/node-boilerplate.svg" alt="License">
  </a>
</p>

Provides a boilerplate for [Node.js](https://nodejs.org/) projects written in
[TypeScript](https://www.typescriptlang.org/). Features include:

- `npm run lint`: Spell check with [cspell](https://www.npmjs.com/package/cspell) and lint with
  [markdownlint-cli](https://www.npmjs.com/package/markdownlint-cli) and
  [@andreashuber69/eslint-config](https://www.npmjs.com/package/@andreashuber69/eslint-config).
- `npm run build`: Compiles everything in *./src* to the *./dist* folder.
- `npm test`: Run unit tests with the [Node.js test runner](https://nodejs.org/docs/latest-v20.x/api/test.html) with
  code coverage through [c8](https://www.npmjs.com/package/c8).
- `npm run ci`: Run all of the above in the proper order (continuous integration).
- `npm start`: Run *./src/main.ts* with [tsx](https://www.npmjs.com/package/tsx).
- `npm run show-coverage`: Show code coverage in the browser.
- `npm version patch`, `npm version minor` or `npm version major`: Create a new release branch with
  [git-flow](https://nvie.com/posts/a-successful-git-branching-model/).
- `npm run finish-release`: Finish a release with **git-flow**.
- The CI workflow uses
  [ubuntu-latest-node-lts-ci](https://github.com/andreashuber69/actions/blob/master/.github/workflows/ubuntu-latest-node-lts-ci.yml).
