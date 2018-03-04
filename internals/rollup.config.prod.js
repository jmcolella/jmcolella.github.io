import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';

import baseConfig from './rollup.config.js';

const basePlugins = [
  copy({
    'src/assets/img': 'img/',
    'dist/index.html': 'index.html',
    verbose: true,
  }),
  uglify({}, minify),
];

if (process.env.SERVE_BUILD) {
  basePlugins.concat([
    serve({
      contentBase: './',
      host: 'localhost',
      port: 8081,
    }),
  ]);
}

export default baseConfig({
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
  plugins: basePlugins,
});
