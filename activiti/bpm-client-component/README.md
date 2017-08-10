# bpm client component
[![Build Status](https://travis-ci.org/labcart/bpm-nutshell.svg?branch=master)](https://travis-ci.org/labcart/bpm-nutshell)
[![codecov](https://codecov.io/gh/labcart/bpm-nutshell/branch/master/graph/badge.svg)](https://codecov.io/gh/labcart/bpm-nutshell)
[![npm version](https://badge.fury.io/js/bpm-client-component.svg)](http://badge.fury.io/js/bpm-client-component)
[![devDependency Status](https://david-dm.org/labcart/bpm-nutshell/dev-status.svg)](https://david-dm.org/labcart/bpm-nutshell?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/labcart/bpm-nutshell.svg)](https://github.com/labcart/bpm-nutshell/issues)
[![GitHub stars](https://img.shields.io/github/stars/labcart/bpm-nutshell.svg)](https://github.com/labcart/bpm-nutshell/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/labcart/bpm-nutshell/master/LICENSE)

## Demo
https://labcart.github.io/bpm-nutshell/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save bpm-client-component
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { BpmClientComponentModule } from 'bpm-client-component';

@NgModule({
  imports: [
    BpmClientComponentModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/labcart/bpm-nutshell/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/bpm-client-component/bundles/bpm-client-component.umd.js"></script>
<script>
    // everything is exported bpmClientComponent namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://labcart.github.io/bpm-nutshell/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
