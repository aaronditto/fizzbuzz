'use strict';

describe('Range', function () {
    it('should throw an exception if `low` argument missing', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(null, 0);
        }).toThrow('low not supplied.');
    });

    it('should throw an exception if `high` argument missing', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(0, null);
        }).toThrow('high not supplied.');
    });

    it('should throw an exception if `high` is smaller than `low`', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(1, 0);
        }).toThrow('low larger than high.');
    });

    it('should throw an exception if `low` is equal to the bottom of contiguous integers for Number', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(Math.pow(-2, 53), Math.pow(-2, 53));
        }).toThrow('low too small.');
    });

    it('should throw an exception if `low` is less than the bottom of contiguous integers for Number', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(Math.pow(-2, 53) - 2, Math.pow(-2, 53) - 2);
        }).toThrow('low too small.');
    });

    it('should throw an exception if `high` is equal to the top of contiguous integers for Number', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(1, Math.pow(2, 53));
        }).toThrow('high too large.');
    });

    it('should throw an exception if `high` is greater than the top of contiguous integers for Number', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(1, Math.pow(2, 53) + 2);
        }).toThrow('high too large.');
    });

    it('should throw an exception if the difference between `low` and `high` is greater than one million', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.Range(-500000, 500000);
        }).toThrow('low and high must be separated by no more than one million.');
    });
});
