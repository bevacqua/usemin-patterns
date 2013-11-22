# usemin-patterns

> Ready-to-use patterns for applying `grunt-usemin` on Jade and other templating languages

## Install

Get it from npm.

```js
npm i --save-dev grunt-usemin usemin-patterns
```

Use [matchdep](https://github.com/tkellen/node-matchdep) to load your Grunt plugins.

```js
npm i --save-dev matchdep
```

Then, rather than all the calls to `grunt.loadNpmTask()`, use this one liner.

```
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
```

## Usage

```js
usemin: {
    jade: 'src/views/**/*.jade',
    options: {
        assetsDirs: ['public'],
        patterns: {
            jade: require('usemin-patterns').jade
        }
    }
}
```

## Patterns

**jade**: Same as the default patterns provided for `html` files, but available to `jade` templates!

**js**: Patterns to match local (no protocol) images in JavaScript files.

## License

MIT
