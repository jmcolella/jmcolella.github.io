import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import mustache from 'rollup-plugin-mustache';
import commonjs from 'rollup-plugin-commonjs'

import postCSSConfig from './postcss.config.js';

export default (options = {}) => ({
  input: 'src/main.js',
  output: options.output,
  plugins: [
    resolve({
      module: true,
    }),
    mustache({
      include: 'src/**/*.mustache',
    }),
    scss(),
    postcss(postCSSConfig),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ].concat(options.plugins)
});
