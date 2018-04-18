const Chance = require('chance');
const chance = new Chance();

class MonteCarlo {
    constructor(func, xRange = {min: 0, max: 1}, yRange = {min: func(xRange.min), max: func(xRange.max)}) {
        this.func = func;
        this.xRange = xRange;
        this.yRange = yRange;
    }

    _createSamples (amount) {
        this._samples = [];

        for (let i = 0; i < amount; i++) {
            const dot = {
                x: chance.floating({min: this.xRange.min, max: this.xRange.max}),
                y: chance.floating({min: this.yRange.min, max: this.yRange.max})
            }

            this._samples.push(dot);
        }
    }

    solve (amount) {
        this._createSamples(amount);

        const total = amount;
        let under = 0;

        for (const dot of this._samples) {
            const actualValue = dot.y;
            const funcValue = this.func(dot.x);

            if (actualValue < funcValue)
                under++
        }

        const area = (this.xRange.max - this.xRange.min) * (this.yRange.max - this.yRange.min);
        const percent = under / total;

        return area * percent;
    }
}

module.exports = MonteCarlo;