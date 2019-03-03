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
        csvtojson()
            .fromFile(filePath)
            .then((jsonObj)=>{
                console.log(jsonObj);
            });
    },

    convertToFile: function(filePath) {
        console.log(`convertToFile ${filePath}`);
    }
};

program
    .usage('[options]')
    .option('-a, --faction <action>', 'action to execute')
    .option('-f, --file [file]', 'file for output')
    .parse(process.argv);

if ( typeof program.faction === 'undefined') {
    console.error('no action is given!');
    program.outputHelp();
    process.exit(1);
}

if ((['outputFile', 'convertFromFile', 'convertToFile']
    .indexOf(program.faction) > -1) && !fs.existsSync(program.file)) {
    console.error('no file is given or file does not exists!');
    program.outputHelp();
    process.exit(1);
}

functions[program.faction](program.file);
