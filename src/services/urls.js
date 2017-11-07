import util from './util.js';

const path = 'http://localhost';

const urls = {
  indexList: 'indexList.json',
}

function convert(urls) {
  util.each(urls, (d, k) => {
    urls[k] = path + d;
  });
  return urls;
}

export default convert(urls);
