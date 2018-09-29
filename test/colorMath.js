var assert = require('assert');
var {ColorMath} = require('../lib');

describe('ColorMath', function() {
    describe('#saturation()', function() {
        it('should return a number', function() {
            assert.strictEqual(
                10,
                ColorMath.saturation(1000,100)
            );
        });
    });
    describe('#delta', function() {
        it('should return a number', function() {
            assert.strictEqual(
                10 - 1,
                ColorMath.delta(10, 1)
            );
        });
    });
});
