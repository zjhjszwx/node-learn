const sp = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
writeFile('./img/studenttable.png')
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

// 建议的正则
function isURL(str) {
    return !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
}
/**
 * 下载文件
 * @param {Array} url
 */
function downLoad(url) {
    url.map(i => {
        //i http://zhufengpeixun.com/plan/html/38.chat-3.html
        let res = encodeURI(i);
        sp.get(res).end((err, pres) => {
            if (!err) {
                // console.log(i)
                let page = pres.text;
                let $ = cheerio.load(page);
                let img_src = [];
                $('img').each((e, i) => {
                    let src = i.attribs.src;
                    if (/zhufeng/.test(src)) {
                        img_src.push(src);
                    }
                });
                //写入html
                let arr = i.split('/');
                let htmlName = arr[arr.length - 1]
                // let name = './html/' + arr[arr.length - 1];
                // writeFile(name, page);
                //写入img
                img_src.forEach(i => {
                    let res = encodeURI(i);
                    if (isURL(res)) {
                        let arr = res.split('/');
                        let filename = './img/' + htmlName + '.' + arr[arr.length - 1];
                        // writeFile(filename,null,(err)=>{
                        //     if(err) throw err
                        // });
                        // console.log(filename)
                        console.log(typeof request(res))
                        // request(res).pipe(fs.createWriteStream(filename));
                    }
                });
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
function downImg(url) {}
sp.get('http://zhufengpeixun.com/plan/index.html').end((err, pres) => {
    if (!err) {
        let page = pres.text;
        $ = cheerio.load(page);
        let li = $('.nav  ul li a');
        //获取下载html地址
        let arr = [];
        li.map((i, index) => {
            arr.push(index.attribs.href);
        });
        let url = arr.map(i => {
            return 'http://zhufengpeixun.com/plan/' + i;
        });
        // console.log(url);
        downLoad(url);
    } else {
        console.err(err);
    }
});
