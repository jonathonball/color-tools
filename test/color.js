var assert = require('assert');
var {Color} = require('../lib/color');

describe('Color', function() {
    describe('#getRgb()', function() {
        it('should return an object with rgb related properties', function() {
            var color = new Color();
            assert.deepStrictEqual(color.getRgb(), {
                red: 0,
                green: 0,
                blue: 0
            });
        });
    });
    describe('#getHsv()', function() {
        it('should return an object with hsv related properties', function() {
            var color = new Color();
            assert.deepStrictEqual(color.getHsv(), {
                hue: 0,
                saturation: 0,
                value: 0
            });
        });
    });
    describe('#rgbToHsv', function() {
        
    });
});
