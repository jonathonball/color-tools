const Color = require('./color');

class ColorMath {

    static saturation(delta, max) {
        return delta / max;
    }

    static delta(x, y) {
        return x - y;
    }

    static hue(offset, x, y, delta) {
        return offset + (x - y) / delta;
    }

    static hueToDegrees(hue) {
        let result = hue * 60;
        if (result < 0) {
            result += 360;
        }
        return result;
    }

    static degreesToHue(degrees) {
        return degrees / 60;
    }

    static minMax(values) {
        let min = Math.min(...values);
        let max = Math.max(...values);
        return [min, max];
    }

    static rgbToHsv(color) {
        // http://coecsl.ece.illinois.edu/ge423/spring05/group8/finalproject/hsv_writeup.pdf
        let output = {};
        //let [min, max] = 
        let min = Math.min(color.red, color.green, color.blue);
        let max = Math.max(color.red, color.green, color.blue);
        output.value = max;
        if (max === 0) {
            output.saturation = 0;
            output.hue = -1;
            return output;
        }
        let delta = ColorMath.delta(max, min);
        output.saturation = ColorMath.saturation(delta, max);
        if (max == color.red) {
            output.hue = ColorMath.hue(0, color.green, color.blue, delta);
        } else if (max == color.green) {
            output.hue = ColorMath.hue(2, color.blue, color.red, delta);
        } else {
            output.hue = ColorMath.hue(4, color.red, color.green, delta);
        }
        output.hue = ColorMath.hueToDegrees(output.hue);
        return output;
    }

    static chroma(value, saturation) {
        return value * saturation;
    }

    static hsvToRgbIntermediateXValue(chroma, hue) {
        return chroma * (1 - Math.abs((hue % 2) - 1));
    }

    static hsvToRgbIntermediateMValue(value, chroma) {
        return value - chroma;
    }

    static addRgb(color, rgb) {
        color.setRgb({
            red: color.red += rgb.red,
            green: color.green += rgb.green,
            blue: color.blue += rgb.blue
        });
        return color;
    }

    static hsvToRgb(color) {
        let output = new Color();
        // https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
        let chroma = ColorMath.chroma(color.value, color.saturation);
        let trueHue = ColorMath.degreesToHue(color.hue);
        let x = ColorMath.hsvToRgbIntermediateXValue(chroma, trueHue);
        if (isNaN(trueHue)) {
            this.red     = 0;
            output.green = 0;
            output.blue  = 0;
        } else if (0 <= trueHue <= 1) {
            output.red   = chroma;
            output.green = x;
            output.blue  = 0;
        } else if (1 < trueHue <= 2) {
            output.red   = x;
            output.green = chroma;
            output.blue  = 0;
        } else if (2 < trueHue <= 3) {
            output.red   = 0;
            output.green = chroma;
            output.blue  = x;
        } else if (3 < trueHue <= 4) {
            output.red   = 0;
            output.blue  = x;
            output.green = chroma;
        } else if (4 < trueHue <= 5) {
            output.red   = x;
            output.blue  = 0;
            output.green = chroma;
        } else if (5 < trueHue <= 6) {
            output.red   = chroma;
            output.blue  = 0;
            output.green = x;
        } else {
            output.red   = 0;
            output.blue  = 0;
            output.green = 0;
        }
        let m = ColorMath.hsvToRgbIntermediateMValue(color.value, chroma);
        color = ColorMath.addRgb(color, {
            red: m,
            blue: m,
            green: m
        });
        return this.getRgb();
    }

    static isValidRgbValue(value) {
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

module.exports = ColorMath;
