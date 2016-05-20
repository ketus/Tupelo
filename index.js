var colors = require('colors');
var debugLevels = require('./config/debugLevels');
var logLevel = 'WARN';
var tupelo = exports;

tupelo.info = function(message) {
    if (debugLevels.INFO >= debugLevels[logLevel]) {
        logMessage('INFO', message);
    }
}

var logMessage = function(debugLevel, message) {

    if (message && typeof message !== 'string') {
        message = JSON.stringify(message);
    };
    
    console.log(debugLevel + ': ' + message);

}
