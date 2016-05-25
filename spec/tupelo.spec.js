var rewire = require('rewire');
var debugLevels = require('../src/config/debugLevels');
var tupelo = rewire('../src/tupelo');

describe('Tupelo tests', function() {
    describe('ValidateDebugLevel', function() {

        var debugLevel;
        var validateDebugLevel;
        var debugLevelNames;

        beforeEach(function() {
            debugLevel = tupelo.__get__('debugLevel');
            validateDebugLevel = tupelo.__get__('validateDebugLevel');
            debugLevelNames = Object.getOwnPropertyNames(debugLevels);
        });

        it('debugLevel should be defined', function() {
            expect(debugLevel).toBeDefined();
        });

        it('should uppercase the argument', function() {
            for (var level in debugLevelNames) {
                level = level.toLowerCase();
                expect(debugLevelNames).toContain(
                    validateDebugLevel(level)
                );
                console.info('wat' + level);
            }


        });

    });
});
