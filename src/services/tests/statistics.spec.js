const Statistics = require('../statistics');
const chai = require('chai');
const expect = chai.expect;

describe('Statistics', function () {
    describe('#expectation', function () {
        it('Should return correct answer', function () {
            const stat = new Statistics([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            expect(stat.expectation()).to.be.equal(5.5);
        });
    });

    describe('#dispersion', function () {
        it('Should return correct answer', function () {
            const stat = new Statistics([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            expect(stat.deviation()).to.be.closeTo(3.027, 0.1);
        });
    });

    describe('#standartErrorOfTheMean', function () {
        it('Should return correct answer', function () {
            const stat = new Statistics([3, 3, 3, 3, 3, 3]);
            expect(stat.standartErrorOfTheMean()).to.be.equal(0);
        });

        it('Should return correct answer', function () {
            const stat = new Statistics([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            expect(stat.standartErrorOfTheMean()).to.be.closeTo(0.957, 0.01);
        });
    });
});