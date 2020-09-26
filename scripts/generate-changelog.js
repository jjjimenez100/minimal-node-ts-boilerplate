const conventionalChangelog = require('conventional-changelog');
const file = './CHANGELOG.md';
const fileStream = require('fs').createWriteStream(file);

conventionalChangelog({
    preset: 'angular',
})
    .pipe(fileStream)
    .on('close', () => {
        console.log(`Generated change log file at: ${file}`);
    });
