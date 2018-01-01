// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {browsers: ['last 2 versions']},
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'], // 需要应用转换的属性
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0 // 最小转换像素单位 低于此像素不转换
    }
  }
}
