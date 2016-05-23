describe('Tupelo tests', function() {
    describe('validateDebugLevel', function() {

        it('accepts strings only', function(done) {

            expect(validateDebugLevel(1)).toThrowError('Debug level must be a string');

            expect(validateDebugLevel('Not a valid debugLevel'))
                .toThrowError('debug level must be set to one of the following:\n\
                                VERBOSE \tDEBUG \tINFO \tWARN \tERROR \tDISABLED')
            done();
        });

        xit('shows correct timestamp', function(done) {
            done();
        });

        xit('accepts strings only', function(done) {
            done();
        });
    });
});
