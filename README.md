# slush-bootstrap [![Build Status](https://secure.travis-ci.org/arvindr21/slush-bootstrap.png?branch=master)](https://travis-ci.org/arvindr21/slush-bootstrap) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-bootstrap.png)](http://badges.enytc.com/for/npm/slush-bootstrap) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/arvindr21/slush-bootstrap/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![NPM](https://nodei.co/npm/slush-bootstrap.png?downloads=true&stars=true)](https://nodei.co/npm/slush-bootstrap/)

> A Slush generator for Bootstrap SASS/LESS/CSS/Stylus projects

### Development in Progress

## Todos

- [x] Boostrap CSS
- [ ] Boostrap SASS
- [ ] Boostrap LESS 
- [ ] Boostrap Stylus 

## Getting Started

### Installation

Install `slush-bootstrap` globally:

```bash
$ npm install -g slush-bootstrap
```

Remember to install `gulp` & `slush` globally as well, if you haven't already:

```bash
$ npm install -g gulp slush
```

## Features

* All bootstrap templates integrated with project. All you need to do is pull from ```dev/templates``` folder and use it.
* Build process runs a cssmin, jsmin, imagemin and copies the required files
* The build task uses [useref](https://www.npmjs.org/package/gulp-useref) which makes building projects easy.

## Run the app 

To run the app, execute

```bash
$ gulp 
```
and navigate to ```http://localhost:1881``` to see the starter template. You can checkout ```dev/templates``` folder for integrated Bootstrap templates.

To build the project (except templates folder) to `/build` folder, run

```bash
$ gulp build
```

To build the complete project (including templates folder) to `/build` folder, run

```bash
$ gulp build-template
```

To run the built app, execute
```bash
$ gulp prod
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-bootstrap
```

Run the generator from within the new folder:

```bash
$ cd my-slush-bootstrap && slush bootstrap
```

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/arvindr21/slush-bootstrap/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/arvindr21/slush-bootstrap/issues).

## License 

The MIT License

Copyright (c) 2014, Arvind

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

