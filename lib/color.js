class Color {

    constructor() {
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

    setRgb(rgb) {
        this.red = rgb.red;
        this.green = rgb.green;
        this.blue = rgb.blue;
        return this;
    }

    setHsv(hsv) {
        this.hue = hsv.hue;
        this.saturation = hsv.saturation;
        this.value = hsv.value;
        return this;
    }

    getHsv() {
        return {
            hue: this.hue,
            saturation: this.saturation,
            value: this.value
        };
    }

    isValidRgbValue(value) {
        if (! isNaN(value)) {
            return false;
        }
        if (value < 0) {
            return false;
        }
        if (value > 255) {
            return false;
        }
        if (! value.isInteger()) {
            return false;
        }
        return true;
    }

}

module.exports = Color;
