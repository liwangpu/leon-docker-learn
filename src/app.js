const http = require('http');
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;


const server = http.createServer((req, res) => {
    let timeStamp = new Date().getTime().toString();
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Hello,${timeStamp}`);
    res.end();
});

server.listen(port);
console.log(`serving on ${port}!`);