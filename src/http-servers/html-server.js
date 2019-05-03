import http from 'http';
import fs from 'fs';
import replace from 'stream-replace';

http.createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {
            'ContentType': 'html'
        });
        fs.createReadStream('data/index.html')
            .pipe(replace('{message}', 'Hello World'))
            .pipe(res);
    })
    .listen(3000);
