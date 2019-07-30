const http = require("http");
const sp = require("superagent");

const server = http.createServer((req, res) => {
    let page = null;
    sp.get("http://zhufengpeixun.com/plan/index.html").end(async (err, pres) => {
    if (!err) {
        // console.log(pres.text);
        page = pres.text
        res.end(page)
    } else {
      console.log(err);
    }
  });
//   console.log('page',page);
//   res.end('1');
});
server.listen(8081, () => console.log("ready"));
