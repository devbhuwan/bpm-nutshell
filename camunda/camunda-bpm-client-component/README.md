# camunda bpm client component
[![Build Status](https://travis-ci.org/labcart/camunda-bpm-client-component.svg?branch=master)](https://travis-ci.org/labcart/camunda-bpm-client-component)
[![codecov](https://codecov.io/gh/labcart/camunda-bpm-client-component/branch/master/graph/badge.svg)](https://codecov.io/gh/labcart/camunda-bpm-client-component)
[![npm version](https://badge.fury.io/js/camunda-bpm-client-component.svg)](http://badge.fury.io/js/camunda-bpm-client-component)
[![devDependency Status](https://david-dm.org/labcart/camunda-bpm-client-component/dev-status.svg)](https://david-dm.org/labcart/camunda-bpm-client-component?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/labcart/camunda-bpm-client-component.svg)](https://github.com/labcart/camunda-bpm-client-component/issues)
[![GitHub stars](https://img.shields.io/github/stars/labcart/camunda-bpm-client-component.svg)](https://github.com/labcart/camunda-bpm-client-component/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/labcart/camunda-bpm-client-component/master/LICENSE)

## Demo
https://labcart.github.io/camunda-bpm-client-component/

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
npm install --save camunda-bpm-client-component
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { CamundaBpmClientComponentModule } from 'camunda-bpm-client-component';

@NgModule({
  imports: [
    CamundaBpmClientComponentModule.forRoot()
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

You may also find it useful to view the [demo source](https://github.com/labcart/camunda-bpm-client-component/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/camunda-bpm-client-component/bundles/camunda-bpm-client-component.umd.js"></script>
<script>
    // everything is exported camundaBpmClientComponent namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://labcart.github.io/camunda-bpm-client-component/docs/

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
