'use strict';

const path = require('path');
const fs = require('fs');

const gitignoreName = '.gitignore';
const gitignoreContent = `*
!.gitignore
`;

const base = path.resolve(__dirname, '..', 'server');
const paths = [
    'css',
    'gfx/uploaded',
    'js'
];


function generatePromise(giPath, method, ...args) {
    return new Promise((resolve, reject) => {
        const filename = path.resolve(base, giPath, gitignoreName);
        console.log(filename);
        fs[method](filename, ...args, (e) => {
            if (e) {
                reject(e);
            } else {
                resolve(true);
            }
        })
    });
}


const argument = process.argv.pop();
let promise;
switch (true) {
    case /--clean/.test(argument):
        promise = Promise.all(
            paths.map(p => generatePromise(p, 'unlink'))
        ).then(() => console.log('Deleted successfully!'));
        break;
    case /--restore/.test(argument):
        promise = Promise.all(
            paths.map(p => generatePromise(p, 'writeFile', gitignoreContent))
        ).then(() => console.log('Restored successfully!'));
        break;
    default:
        console.log(`
Use "node pre-prod.js <param>"
where <param> is
  --clean                   remove unnecessary files from "server/"
  --restore                 restore files if they were removed by accident
`);
        promise = Promise.reject(false);
}


promise.then(() => {
    process.exit(0);
}).catch((e) => {
    if (e) {
        console.error('Error', e);
    }
    process.exit(1);
});
