'use strict';

const test = require('./test');

const AdminApp = {
    start() {
        console.log(`Admin area! "${test}"`);
    }
};

if (typeof window === 'object') {
    window.App = AdminApp; // overwrite
}

module.exports = AdminApp;
