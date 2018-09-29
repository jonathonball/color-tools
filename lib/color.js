const ColorMath = require('./colorMath');

class Color {

    constructor() {
        this.colorMath = this.Math = ColorMath;
        this.rgbIsCalculated = false;
        this.hsvIsCalculated = false;
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.hue = 0;
        this.saturation = 0;
        this.value = 0;
    }

    getRgb() {
        return {
            red: this.red,
            green: this.green,
            blue: this.blue
        };
    }

    getRgbArray() {
        return [
            this.red,
            this.green,
            this.blue
        ];
    }

    setRgb(rgb) {
        this.red = rgb.red;
        this.green = rgb.green;
        this.blue = rgb.blue;
        this.rgbIsCalculated = true;
        return this;
    }

    setHsv(hsv) {
        this.hue = hsv.hue;
        this.saturation = hsv.saturation;
        this.value = hsv.value;
        this.hsvIsCalculated = true;
        return this;
    }

    getHsv() {
        return {
            hue: this.hue,
            saturation: this.saturation,
            value: this.value
        };
    }

}

module.exports = {
    Color: Color,
    ColorMath: ColorMath
};
