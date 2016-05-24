var colors = require('colors/safe');
var debugLevels = require('../config/debugLevels');

var tupelo = exports;
var logLevel = 'VERBOSE';

var logMessage = function(debugLevel, color, message) {
    var time = new Date().toISOString();

    console.log(
        color(debugLevel + ' on ' + time + ' ' + message)
    );
}

var validateDebugLevel = function(level) {
    if (level && typeof level === 'string') {
        level = level.toUpperCase().trim();

        if (debugLevels.hasOwnProperty(level)) {
            return level;

        } else {
            tupelo.error('debug level must be set to one of the following:\n\
            VERBOSE \tDEBUG \tINFO \tWARN \tERROR \tDISABLED');
            console.trace();
        }

    } else {
        tupelo.error('Debug level must be a string');
        console.trace();
    }
}

var levelEnabled = function(selectedLevel) {
    return debugLevels[selectedLevel] <= debugLevels[logLevel];
}

tupelo.setLogLevel = function(level) {
    logLevel = validateDebugLevel(level);
}

tupelo.verbose = function(message) {
    if (levelEnabled('VERBOSE')) {
        logMessage('VERBOSE', colors.gray, message);
    }
}

tupelo.debug = function(message) {
    if (levelEnabled('DEBUG')) {
        logMessage('DEBUG', colors.white, message);
    }
}

tupelo.info = function(message) {
    if (levelEnabled('INFO')) {
        logMessage('INFO', colors.green, message);
    }
}

tupelo.warn = function(message) {
    if (levelEnabled('WARN')) {
        logMessage('WARN', colors.yellow, message);
    }
}

tupelo.error = function(message) {
    if (levelEnabled('ERROR')) {
        logMessage('ERROR', colors.red, message);
    }
}
