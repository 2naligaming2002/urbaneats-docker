const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.end(JSON.stringify({
        status: "success",
        message: "UrbanEats API is running",
        service: "api",
        time: new Date()
    }));
}).listen(4000);

console.log("UrbanEats API running on port 4000");