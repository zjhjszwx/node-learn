const exec = require("child_process").exec;
const querystring = require("querystring");
function sleep(seconds) {
  let startTime = new Date().getTime();

  while (new Date().getTime() < startTime + seconds);
}

function start(response,postData) {
  console.log("start handle");
  //阻塞的方式去请求,页面会卡住
  // sleep(10000)
  let content = "empth";
  //非阻塞的方式去请求,页面不会卡住,但无法得到想要的结果,因为代码是同步执行的,已经return出去
  exec("find/", { timeout: 10000, maxBuffer: 20000 * 1024 }, function(
    err,
    stdout,
    stderr
  ) {
    const body =
      "<html>" +
      "<head>" +
      '<meta http-equiv="Content-Type" content="text/html; ' +
      'charset=UTF-8" />' +
      "</head>" +
      "<body>" +
      '<form action="/upload" method="post">' +
      '<textarea name="text" rows="2" cols="6"></textarea>' +
      '<input type="submit" value="Submit text" />' +
      "</form>" +
      "</body>" +
      "</html>";

    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.write(body);
    response.end();
  });
  return content;
  
}

function upload(response,postData) {
  console.log("upload handle",postData);
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write("upload page"+querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
