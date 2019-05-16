const http = require("http");
const url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    if (request.url == "/favicon.ico") return;
    const pathname = url.parse(request.url).pathname;

    // const content = route(handle, pathname, response);
    //   console.log("url:", request.url, "pathname:", pathname);

    // response.writeHead(200, {
    //   "Content-Type": "text/plain"
    // });
    // response.write(content);
    // response.end();

    var postData = "";
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("received post data", postDataChunk);
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });
  }
  http.createServer(onRequest).listen(8888);
}
module.exports = start;
