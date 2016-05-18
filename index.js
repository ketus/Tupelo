var colors = require('colors');

var tupelo = exports;
tupelo.mode = '';
tupelo.debugLevel = 'warn';
//tupelo.logToFile = true;

tupelo.log = function(level, message) {
    var levels = ['error', 'warn', 'info'];
    if (debugLevels.indexOf(level) >= levels.indexOf(tupelo.debugLevel)) {
        if (message && typeof message !== 'string') {
            message = JSON.stringify(message);
        };
        console.log((level + ': ' + message).green);
    }
}
