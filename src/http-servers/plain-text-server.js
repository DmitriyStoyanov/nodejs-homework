import http from 'http';
http.createServer()
    .on('request', (req, res) => {
        console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
        res.writeHead(200, {
            'ContentType': 'plain text'
        });
        res.end('Hello World');
    })
    .listen(3000);
