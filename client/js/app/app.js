'use strict';

const test = require('../test');

const App = {
    start() {
        console.log(`General area! "${test}"`);
    }
};

if (typeof window === 'object') {
    window.App = App;
}

module.exports = App;
