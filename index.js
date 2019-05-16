const start = require("./server");
const router = require("./router");
const requestHandle = require("./requestHandlers");

const handle = {};
handle["/"] = requestHandle.start;
handle["/start"] = requestHandle.start;
handle["/upload"] = requestHandle.upload;
start(router.route, handle);
