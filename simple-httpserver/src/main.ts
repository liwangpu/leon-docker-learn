import http from 'http';

const port = process.env.APP_PORT || 8090;
console.log(`listen on :`, port);
http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World");
  response.end();
}).listen(port);