'use strict';

const test = require('./test');

const App = {
    start() {
        console.log(`It works! "${test}"`);
    }
};

if (typeof window === 'object') {
    window.App = App;
}

module.exports = App;
