// Rollup plugins

import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/js/site.js',
    dest: 'dist/js/site.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/less/**',
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
    ],
    globals: {
        jquery: '$'
    }
};