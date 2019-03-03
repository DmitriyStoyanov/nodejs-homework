#!/usr/bin/env babel-node
import program from 'commander';
import fs from 'fs';
import csvtojson from 'csvtojson';

const functions = {
    reverse: function() {
        console.log(`Could you type letters which will be reversed`);

        process.stdin.on('readable', () => {
            const letters = process.stdin.read();
            if (letters !== null) {
                process.stdout.write(`reversed letters: ${letters.reverse()}`);
            }
        });

        process.stdin.on('end', () => {
            process.stdout.write('end');
        });
    },

    transform: function() {
        console.log(`Could you type letters which will be upperCased`);

        process.stdin.on('readable', () => {
            const letters = process.stdin.read();
            if (letters !== null) {
                process.stdout.write(`UpperCased letters: ${letters.toString().toUpperCase()}`);
            }
        });

        process.stdin.on('end', () => {
            process.stdout.write('end');
        });
    },

    outputFile: function(filePath) {
        const reader = fs.createReadStream(filePath);
        function read() {
            let chunk = null;
            while (null != (chunk = reader.read())) {
                process.stdout.write(chunk.toString());
            }
        }
        reader.on('readable', () => {
            read();
        });
    },

    convertFromFile: function(filePath) {
        const readStream=fs.createReadStream(filePath);
        const writeStream=process.stdout;
        readStream.pipe(csvtojson()).pipe(writeStream);
    },

    convertToFile: function(filePath) {
        const readStream=fs.createReadStream(filePath);
        const writeStream=fs.createWriteStream(filePath
            .split('.').slice(0, -1).join('.') + '.json');
        readStream.pipe(csvtojson()).pipe(writeStream);
        console.log(`convertToFile ${filePath.split('.').slice(0, -1).join('.') + '.json'}`);
    },

    cssBundler: function(path) {
        console.log(`cssBundler with path: ${path}`);
    }
};

program
    .usage('[options]')
    .option('-a, --action <action>', 'action to execute:' +
        '<reverse|transform|' +
        'outputFile|convertFromFile|convertToFile|cssBundler>')
    .option('-f, --file <file>',
        'file for output for outputFile|convertFromFile|convertToFile actions')
    .option('-p, --path <path>',
        'directory with csv files for cssBundler action')
    .parse(process.argv);

if ( typeof program.action === 'undefined') {
    console.error('no action is given!');
    program.outputHelp();
    process.exit(1);
}

let parameter = '';

if (program.action == 'cssBundler') {
    parameter = program.path;
} else {
    parameter = program.file;
}

if ((['outputFile', 'convertFromFile', 'convertToFile', 'cssBundler']
    .indexOf(program.action) > -1) && !fs.existsSync(parameter)) {
    console.error('no file/path are given or file/path does not exists!');
    program.outputHelp();
    process.exit(1);
}

functions[program.action](parameter);
