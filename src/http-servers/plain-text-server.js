import http from 'http';
http.createServer()
    .on('request', (req, res) => {
        const {url, method, httpVersion} = req;
        console.log(`${method} ${url} HTTP/${httpVersion}`);
        res.writeHead(200, {
            'ContentType': 'plain text'
        });
        res.end('Hello World');
    })
    .listen(3000);
