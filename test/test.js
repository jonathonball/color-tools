var assert = require('assert');
var Color = require('..');

describe('Color', function() {
    describe('#rgb()', function() {
        it('should return an object with rgb related properties', function() {
            var color = new Color();
            assert.deepStrictEqual(color.rgb(), {
                red: 0,
                green: 0,
                blue: 0
            });
        });
    });
    describe('#hsv()', function() {
        it('should return an object with hsv related properties', function() {
            var color = new Color();
            assert.deepStrictEqual(color.hsv(), {
                hue: 0,
                saturation: 0,
                value: 0
            });
        });
    });
});
