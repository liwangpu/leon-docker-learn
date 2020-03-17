const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// 新建一个tmp空目录,用于测试volume生成文件
let tmpDir = 'tmp';
if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
}


const server = http.createServer((req, res) => {
    let timeStamp = new Date().getTime().toString();

    // 如果输入f=true查询参数,就新建文件,用来测试docker volume
    let q = url.parse(req.url, true).query;
    if (q.f) {
        fs.writeFileSync(path.join(tmpDir, `${timeStamp}.txt`), timeStamp.toString(), { encoding: "utf8" });
    }


    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Hello,${timeStamp}`);
    res.end();
});

server.listen(port);
console.log(`serving on ${port}!`);