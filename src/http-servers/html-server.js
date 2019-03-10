import http from 'http';
import fs from 'fs';

http.createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {
            'ContentType': 'html'
        });
        res.end(fs.readFileSync('data/index.html').toString()
            .replace(/{message}/g, 'Hello World'));
    })
    .listen(3000);
