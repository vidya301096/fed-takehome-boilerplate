const readline = require('readline');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(chalk.blue('Creating a ZIP of "src/" and "dist/" directories.\n'));

rl.question(`${chalk.green('What do you want to name your zipfile')} ${chalk.gray('(default: ')}"build.zip"${chalk.gray(')')}? `, zip_file => {
    if (!String(zip_file).trim()) {
        // Use a default if no answer was given in the script
        zip_file = 'build.zip';
    }

    let zip_filepath = path.resolve(__dirname, '../', zip_file);
    let output = fs.createWriteStream(zip_filepath);
    let archive = archiver('zip', {
        zlib: { level: 9 },
    });

    output.on('close', function() {
        console.log(`Wrote ${archive.pointer()} total bytes`);
        console.log(`to "${chalk.green(zip_filepath)}"`);
    });

    // Create pipe from archive to filestream
    archive.pipe(output);

    // Zip the 'src/' and 'dist/' directory
    archive.directory(path.resolve(__dirname, '../src/'), 'src');
    archive.directory(path.resolve(__dirname, '../dist/'), 'dist');

    // We've added all files to the archive, finalize and close our stream when all the data has been piped
    archive.finalize();

    // Close the readline interface
    rl.close();
});
