import { EventEmitter } from 'events';
export const myEmitter = new EventEmitter();

var importedfiles = []
var newfiles = []
const fs = require('fs');

function pollNewFiles(path) {
    fs.readdir(path, function(err, files) {
        newfiles = files.filter(x => !importedfiles.includes(x));
        for (var i=0; i<newfiles.length; i++) {
            myEmitter.emit('changed', path, files[i]);
        }
        importedfiles = importedfiles.concat(newfiles);
    })
}

export default class Dirwatcher {
    async watch(path, delay) {
        setInterval(pollNewFiles, delay, path);
    }
}
