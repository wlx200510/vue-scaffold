// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {browsers: ['last 2 versions']},
    "postcss-px2rem": {remUnit: 75}
  }
}
