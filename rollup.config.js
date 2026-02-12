const fs = require('fs');
const path = require('path');
const buble = require('@rollup/plugin-buble');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { dependencies } = require('./package.json');

const name = 'clippy'
const dist = path.resolve(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
}

module.exports = {
    input: path.resolve(__dirname, 'lib/index.js'),
    external: Object.keys(dependencies),
    plugins: [
        buble(),
        nodeResolve(),
        commonjs(),
    ],
    output: [
        {
            file: path.resolve(dist, name + '.js'),
            format: 'umd',
            name: name,
            globals: {
                jquery: '$'
            },
            sourcemap: true
        },
        {
            file: path.resolve(dist, name + '.esm.js'),
            format: 'es',
            sourcemap: true
        }
    ]
};
