import combineSelectors from 'postcss-combine-duplicated-selectors';
import flexBugs from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';
import autoreset from 'postcss-autoreset';
import postcssImport from 'postcss-import';
import url from 'postcss-url';
import cssnano from 'cssnano';

const config = {
  plugins: [
    autoprefixer,
    combineSelectors,
    flexBugs,
    autoreset({
      reset: 'sizes',
    }),
    postcssImport,
    url({
      url: 'inline',
    }),
    cssnano(),
  ],
  extract: process.env.PRODUCTION,
  config: false,
}

export default config;
