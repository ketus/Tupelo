var colors = require('colors/safe');
var debugLevels = require('./config/debugLevels');

var tupelo = exports;
var debugLevel = 'WARN';


var validateDebugLevel = function(level) {
    if (level && typeof level === 'string') {
        level = level.toUpperCase().trim();

        if (debugLevels.hasOwnProperty(level)) {
            return level;

        } else {
            tupelo.error(
                'Debug level must be set to one of the following: \n' +
                Object.getOwnPropertyNames(debugLevels) +
                '| Setting default: ' + debugLevel);

            return false;
        }

    } else {
        tupelo.error('Debug level must be a string. Got ' +
            typeof level + ': ' + level +
            '. Setting default: ' + debugLevel);

        return false;
    }
}

var levelEnabled = function(selectedLevel) {
    return debugLevels[selectedLevel] <= debugLevels[debugLevel];
}

var formatMessage = function(debugLevel, color, message) {
    var time = new Date().toISOString();
    return color(debugLevel + ' on ' + time + '|  ' + message);

}

var logMessage = function(debugLevel, color, message) {
    console.log( formatMessage(debugLevel, color, message) );
}

tupelo.setLogLevel = function(level) {
    if (validateDebugLevel(level)) {
        debugLevel = validateDebugLevel(level);
    }
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
