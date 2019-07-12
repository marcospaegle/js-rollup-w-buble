// rollup will bundle your JS and buble will convert ES6 to ES5
import buble from 'rollup-plugin-buble';

export default {
    input: './src/app.js',
    output: {
        file: './public/assets/js/app.js',
        format: 'cjs'
    },
    plugins: [
        buble()
    ]
}