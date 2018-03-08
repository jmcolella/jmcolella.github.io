const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['dist/img/*.{jpg,png}'], 'img', {
  plugins: [
    imageminJpegtran({
      progressive: true,
    }),
    imageminPngquant({quality: '65-80'})
  ]
});
