import util from './util.js';

const path = 'https://ttgame-liunx.zhanzhibin.com/';

const urls = {
  homeList: 'homeList.ashx',
}

function convert(urls) {
  util.each(urls, (d, k) => {
    urls[k] = path + d;
  });
  return urls;
}

export default convert(urls);
