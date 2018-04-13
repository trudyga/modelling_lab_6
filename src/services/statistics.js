class Statistics {
    constructor (sample) {
        if (sample.length < 2)
            throw new Error('Must be at least 2 values in the sample');

        this.sample = sample;
    }

    expectation () {
        return this.sample.reduce((prev, cur) => cur + prev, 0) / this.sample.length;
    }

    deviation () {
        const expectation = this.expectation();
        
        let sum = this.sample.reduce((prev, cur) => {
            let val = (Math.pow(cur - expectation, 2));
            return prev + val;
        }, 0);

        return Math.sqrt(sum / (this.sample.length - 1));
    }

    standartErrorOfTheMean () {
        return this.deviation() / Math.sqrt(this.sample.length);
    }
}

module.exports = Statistics;