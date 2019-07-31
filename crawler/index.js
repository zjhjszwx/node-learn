const http = require('http');
const sp = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');
/**
 * 输出文件
 * @param {String} name
 * @param {String} page
 */
function writeFile(name, page) {
    fs.writeFile(name, page, function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log('已经输出到' + name);
        }
    });
}
/**
 * 下载文件
 * @param {Array} url
 */
function downLoad(url) {
    url.map(i => {
        let res = encodeURI(i);
        // console.log('请求url====', res);
        sp.get(res).end((err, pres) => {
            if (!err) {
                let page = pres.text;
                let arr = i.split('/');
                let name = './html/' + arr[arr.length - 1];
                writeFile(name, page);
            } else {
                console.error('==========', err, i);
            }
        });
    });
}

/**
 * 下载图片
 * @param {*} url
 */
function downImg(url) {
    
}
sp.get('http://zhufengpeixun.com/plan/index.html').end((err, pres) => {
    if (!err) {
        let page = pres.text;
        $ = cheerio.load(page);
        let li = $('.nav  ul li a');
        let arr = [];
        li.map((i, index) => {
            arr.push(index.attribs.href);
        });
        let url = arr.map(i => {
            return 'http://zhufengpeixun.com/plan/' + i;
        });
        // console.log(url);
        // downLoad(url);
    } else {
        console.err(err);
    }
});
