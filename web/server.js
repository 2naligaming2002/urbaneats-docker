const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>UrbanEats Web</h1>");
}).listen(3000);

console.log("UrbanEats Web running on port 3000");