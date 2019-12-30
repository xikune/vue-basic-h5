// const loaderUtils = require('loader-utils');
const fs = require('fs');

function writeDocument(doc) {
  fs.writeFile('./document.js', doc, {
    'flag': 'a'
  }, function (err) {
    if (err) {
      throw err;
    }
  });
}

function getNormalTime() {
  let curTime = new Date(Date.now() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').split(
    '.')[
    0]
  let info = `
    console.info('[mark] buildTime：${curTime}')
    console.info('[mark] buildAuthor：${process.env.USER}')
  `
  return info
}

function addInfo(str) {
  const regex = /(\$mount\('#app'\);)/g;

  return str.replace(regex, '$1' + getNormalTime())
}
module.exports = function (source) {
  // const options = loaderUtils.getOptions(this)
  writeDocument(source)

  return addInfo(source)

  // return source.replace()
}
