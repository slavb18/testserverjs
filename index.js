// const http = require("http");
import http from "http";

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  console.log(req.url, req.rawHeaders);
  res.writeHead(200);
  res.end("My first server!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
