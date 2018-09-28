class Color {

    constructor() {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.hue = 0;
        this.saturation = 0;
        this.value = 0;
    }

    rgb() {
        return {
            red: this.red,
            green: this.green,
            blue: this.blue
        };
    }

    hsv() {
        return {
            hue: this.hue,
            saturation: this.saturation,
            value: this.value
        };
    }

    rgbToHsv() {
        // http://coecsl.ece.illinois.edu/ge423/spring05/group8/finalproject/hsv_writeup.pdf
        let min = Math.min(this.red, this.green, this.blue);
        let max = Math.max(this.red, this.green, this.blue);
        this.value = max;
        let delta = max - min;
        if ( max === 0) {
            this.saturation = 0;
            this.hue = -1;
            return;
        }
        this.saturation = delta / max;
        if (this.red == max) {
            this.hue = (this.green - this.blue) / delta;
        } else if (this.green == max) {
            this.hue = 2 + (this.blue - this.red) / delta;
        } else {
            this.hue = 4 + (this.red - this.green) / delta;
        }
        this.hue *= 60;
        if (this.hue < 0) {
            this.hue += 360;
        }
    }

    hsvToRgb() {
        // https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
        let chroma = this.value * this.saturation;
        let trueHue = this.hue / 60;
        let x = chroma * (1 - Math.abs((trueHue % 2) - 1));
        if (isNaN(trueHue)) {
            this.red = 0;
            this.green = 0;
            this.blue = 0;
        } else if (0 <= trueHue <= 1) {
            this.red = chroma;
            this.green = x;
            this.blue = 0;
        } else if (1 < trueHue <= 2) {
            this.red = x;
            this.green = chroma;
            this.blue = 0;
        } else if (2 < trueHue <= 3) {
            this.red = 0;
            this.green = chroma;
            this.blue = x;
        } else if (3 < trueHue <= 4) {
            this.red = 0;
            this.blue = x;
            this.green = chroma;
        } else if (4 < trueHue <= 5) {
            this.red = x;
            this.blue = 0;
            this.green = chroma;
        } else if (5 < trueHue <= 6) {
            this.red = chroma;
            this.blue = 0;
            this.green = x;
        } else {
            this.red = 0;
            this.blue = 0;
            this.green = 0;
        }
        let m = this.value - chroma;
        this.red += m;
        this.blue += m;
        this.green += m;
    }

}

module.exports = Color;
