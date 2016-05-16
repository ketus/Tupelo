var colors = require('colors');

var tupelo = exports;

tupelo.debugLevel = 'warn';
tupelo.logToFile = true;


function tupelo(level, message) {
    var levels = ['error', 'warn', 'info'];
    if (levels.indexOf(level) >= levels.indexOf(logger.debugLevel)) {
        if (typeof message !== 'string') {
            message = JSON.stringify(message);
        };
        console.log(level + ': ' + message);
    }
}
