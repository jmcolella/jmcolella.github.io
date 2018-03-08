const fs = require('fs');
const tinify = require('tinify');
tinify.key = "imZRi58J74vm3a4aCjQkIygglV5DI-Ct";

fs.readdir('src/assets/img', (err, files) => {
  files.forEach((file) => {
    const source = tinify.fromFile(`src/assets/img/${file}`);

    source.store({
      service: "s3",
      aws_access_key_id: "AKIAJ4VEX3RGDNW6CTLA",
      aws_secret_access_key: "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",
      region: "us-east-1",
      path: `jc-website-assets/${file}`
    });
  });
});
