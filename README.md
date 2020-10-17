Webpack 4 Boilerplate
===========
![npm](https://img.shields.io/npm/v/webpack?label=webpack&style=flat-square&logo=webpack)
![npm](https://img.shields.io/npm/v/webpack-dev-server?label=webpack-dev-server&style=flat-square&logo=webpack)
![npm](https://img.shields.io/badge/dependencies-up--to--date-green?style=flat-square&logo=npm&color=success)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=flat-square&logo=github)

> Plain webpack 4 boilerplate with Babel, SASS and lodash on board

## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go. 

If you don’t want to work with lodash, just remove it from the node packages and the webpack config.

## Usage
Download to target directory or use this repository as a template
```sh
$ curl -L -o master.zip https://github.com/cvgellhorn/webpack-boilerplate/archive/master.zip && unzip master.zip && rm master.zip && mv ./webpack-boilerplate-master/{.,}* ./ && rm -r ./webpack-boilerplate-master
```

## Setup
Install dependencies
```sh
$ npm install
```

## Development
Build the app in dev mode and run the local webpack-dev-server with livereload and autocompile on [http://0.0.0.0:8080/](http://0.0.0.0:8080/)
```sh
$ npm run dev
```
## Production
Build the app in production mode
```sh
$ npm run build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
