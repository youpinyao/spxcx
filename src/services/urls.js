import util from './util.js';

// const path = 'http://localhost/spxcx/src/json/';
const path = 'https://xcx.leborn.cn/spxcx/src/json/';

const urls = {
  indexList: 'indexList.json',
  articleDetail: 'articleDetail.json',
}

function convert(urls) {
  util.each(urls, (d, k) => {
    urls[k] = path + d;
  });
  return urls;
}

export default convert(urls);
