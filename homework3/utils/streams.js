#!/usr/bin/env babel-node
import program from 'commander';

function reverse (str) {
    /* ... */
}
function transform (str) {
    /* ... */
}
function outputFile (filePath) {
    /* ... */
}
function convertFromFile (filePath) {
    /* ... */
}
function convertToFile (filePath) {
    /* ... */
}

program
    .usage('[options]')
    .option('-a, --action <action>', 'action to execute')
    .option('-f, --file [file]', 'file for output')
    .parse(process.argv);

if (typeof action === 'undefined') {
    console.error('no action given!');
    program.outputHelp();
    process.exit(1);
}

console.log('you started streams with action: %s and file: %s',
    program.action, program.file);
