// Rollup plugins

var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var eslint = require('rollup-plugin-eslint');
var resolve = require('rollup-plugin-node-resolve');
var uglify = require('rollup-plugin-uglify');
var commonjs = require('rollup-plugin-commonjs');

const outputOptions = {
    dest:"dist/js/vendors.min.js",
    format: "iife",
}

const inputOptions = {
    entry: "src/js/vendors.js",
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: "node_modules/**",
        }),
        (uglify()),
    ]
}

async function build() {

    // create a bundle
    const bundle = await rollup.rollup(inputOptions);

    // or write the bundle to disk
    await bundle.write(outputOptions);
}

build();