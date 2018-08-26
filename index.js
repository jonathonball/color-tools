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
        let chroma = this.value
    }

}

module.exports = Color;
