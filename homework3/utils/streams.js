#!/usr/bin/env babel-node
import program from 'commander';

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
    transform: function(str) {
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
        console.log(`outputFile ${filePath}`);
    },
    convertFromFile: function(filePath) {
        console.log(`convertFromFile ${filePath}`);
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
    console.error('no action given!');
    program.outputHelp();
    process.exit(1);
}

functions[program.faction](program.file);
