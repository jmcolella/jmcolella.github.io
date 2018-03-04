import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

import baseConfig from './rollup.config.js';

export default baseConfig({
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    copy({
      'src/assets/img': 'dist/img',
      verbose: true,
    }),
    serve({
      contentBase: 'dist',
      host: 'localhost',
      port: 8080,
    }),
    livereload({
      watch: 'src',
    }),
  ]
});
