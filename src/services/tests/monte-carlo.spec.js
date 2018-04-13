const MonteCarlo = require('../monte-carlo');
const chai = require('chai');
const expect = chai.expect;

describe('MonteCarlo', function() {
    describe('#solve', function () {
        it('Should solve correctly', function() {
            const monte = new MonteCarlo(x => x);

            const result = monte.solve(10000);
            expect(result).to.be.above(0.48);
            expect(result).to.be.below(0.52);
        });

        it('Should calculate correctly', function () {
            const monte = new MonteCarlo(x => Math.sin(x), {min: 0, max: 1}, {min: 0, max: 1});

            const result = monte.solve(10000);
            expect(result).to.be.below(-Math.cos(1) + 1 + 0.02);
            expect(result).to.be.above(-Math.cos(1) + 1 - 0.02);
        });
    });
});