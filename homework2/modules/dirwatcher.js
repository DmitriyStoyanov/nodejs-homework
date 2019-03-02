import {EventEmitter} from 'events';

let importedfiles = [];
let newfiles = [];
const fs = require('fs');

function pollNewFiles(path) {
    fs.readdir(path, function(err, files) {
        newfiles = files.filter( (x) => !importedfiles.includes(x) );
        for (let i=0; i<newfiles.length; i++) {
            myEmitter.emit('changed', path, files[i]);
        }
        importedfiles = importedfiles.concat(newfiles);
    });
}

export const myEmitter = new EventEmitter();
export default class DirWatcher {
    async watch(path, delay) {
        setInterval(pollNewFiles, delay, path);
    }
}
