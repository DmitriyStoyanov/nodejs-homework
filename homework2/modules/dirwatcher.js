import { EventEmitter } from 'events';
export const myEmitter = new EventEmitter();

var importedfiles = []
var newfiles = []
const fs = require('fs');

function callback(directory) {
    fs.readdir(directory, function(err, files) {
        newfiles = files.filter(x => !importedfiles.includes(x));
        for (var i=0; i<newfiles.length; i++) {
            myEmitter.emit('changed', files[i]);
        }
        importedfiles = importedfiles.concat(newfiles);
    })
}

export default class Dirwatcher {
    async watch(directory, delay) {
        setInterval(callback, delay, directory);
    }
}
