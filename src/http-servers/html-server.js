import http from 'http';
import fs from 'fs';
import {Transform} from 'stream';

const replaceMessage = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().replace(/{message}/g, 'Hello World'));
        callback();
    }
});

http.createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {
            'ContentType': 'html'
        });
        fs.createReadStream('data/index.html')
            .pipe(replaceMessage)
            .pipe(res);
    })
    .listen(3000);
