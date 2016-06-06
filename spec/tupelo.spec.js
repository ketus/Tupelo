var rewire = require('rewire');
var debugLevels = require('../src/config/debugLevels');
var colors = require('colors/safe');
var tupelo = rewire('../src/tupelo');

describe('Tupelo tests', function() {
    var debugLevel;
    var validateDebugLevel;
    var debugLevelNames;

    beforeEach(function() {
        debugLevel = tupelo.__get__('debugLevel');
        validateDebugLevel = tupelo.__get__('validateDebugLevel');
        debugLevelNames = Object.getOwnPropertyNames(debugLevels);
    });

    describe('method ValidateDebugLevel', function() {
        it('debugLevel should be defined', function() {
            expect(debugLevel).toBeDefined();
        });

        it('accepts only strings', function() {
            expect(validateDebugLevel(12)).toBe(false);
            expect(validateDebugLevel(new Date())).toBe(false);
            expect(validateDebugLevel(['WARN'])).toBe(false);
        });

        it('should make the valid argument uppercase', function() {

            var lowerCased = debugLevelNames.map(function(element) {
                return element.toLowerCase();
            });

            for (var i = 0, j = lowerCased.length; i < j; i++) {

                expect(debugLevelNames[i])
                    .toContain(validateDebugLevel(lowerCased[i]));
            }

        });

    });

    describe(' displays logs only on enabled levels', function() {
        it('should display all logs below or equal to debugLevel', function() {

            var logMessage = tupelo.__get__('logMessage');
            console.log(logMessage);
            console.log = jasmine.createSpy("log");
            logMessage('VERBOSE', colors.gray, 'test');
            expect(console.log).toHaveBeenCalled();
        });

    });
});
