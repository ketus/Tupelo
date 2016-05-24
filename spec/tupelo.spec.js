var rewire = require('rewire');
var tupelo = rewire('../src/tupelo');

describe('Tupelo tests', function() {
    describe('validateDebugLevel', function() {

        var validateDebugLevel = tupelo.__get__('validateDebugLevel');

        it('should accept valid strings only', function(done) {

            expect(validateDebugLevel('verbose')).toEqual('VERBOSE');

            done();

        });

    });
});
