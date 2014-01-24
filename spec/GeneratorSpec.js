'use strict';

describe('Generator', function () {
    it('should throw an exception if `range` argument missing', function () {
        expect(function () {
            new self.fizzBuzz.Generator(null)
        }).toThrow('range not supplied.');
    });

    it('should print 0 for index 0', function () {
        //arrange
        var range = new self.fizzBuzz.Range(0, 0);
        var result = new self.fizzBuzz.Generator(range).toArr().join();

        //assert
        expect(result).toBe('0');
    });

    it('should return `fizzbuzz` for multiples of both 3 and 5 (except those containing 3 (which should print `lucky`))', function () {
        var expectedResult = 'fizzbuzz';
        [
            { low: 15, high: 15, result: expectedResult },
            { low: 30, high: 30, result: 'lucky' },
            { low: 45, high: 45, result: expectedResult },
            { low: 60, high: 60, result: expectedResult },
            { low: (Math.pow(2, 53) - 2), high: (Math.pow(2, 53) - 2), result: expectedResult }
        ].map(function (testcase) {
                //arrange
                var range = new self.fizzBuzz.Range(testcase.low, testcase.high);

                //act
                var result = new self.fizzBuzz.Generator(range).toArr().join();

                //assert
                expect(result).toBe(testcase.result);
            });
    });

    it('should return `fizz` for multiples of 3 that are not multiples of 5 except those containing 3 (which should print `lucky`)', function () {
        var expectedResult = 'fizz';
        [
            { low: 3, high: 3, result: 'lucky' },
            { low: 6, high: 6, result: expectedResult },
            { low: 9, high: 9, result: expectedResult },
            { low: 33, high: 33, result: 'lucky'},
            { low: (Math.pow(2, 53) - 5), high: (Math.pow(2, 53) - 5), result: expectedResult }
        ].map(function (testcase) {
                //arrange
                var range = new self.fizzBuzz.Range(testcase.low, testcase.high);

                //act
                var result = new self.fizzBuzz.Generator(range).toArr().join();

                //assert
                expect(result).toBe(testcase.result);
            });
    });

    it('should return `buzz` for multiples of 5 that are not multiples of 3 except those containing 3 (which should print `lucky`)', function () {
        var expectedResult = 'buzz';
        [
            { low: 5, high: 5, result: expectedResult },
            { low: 10, high: 10, result: expectedResult },
            { low: 20, high: 20, result: expectedResult },
            { low: 35, high: 35, result: 'lucky' },
            { low: (Math.pow(2, 53) - 7), high: (Math.pow(2, 53) - 7), result: expectedResult }
        ].map(function (testcase) {
                //arrange
                var range = new self.fizzBuzz.Range(testcase.low, testcase.high);

                //act
                var result = new self.fizzBuzz.Generator(range).toArr().join();

                //assert
                expect(result).toBe(testcase.result);
            });
    });

    it('should return correct values from 1 to 20', function () {
        //arrange
        var expectedResult = '1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz';
        var range = new self.fizzBuzz.Range(1, 20);

        //act
        var result = new self.fizzBuzz.Generator(range).toArr().join(' ');

        //assert
        expect(result).toBe(expectedResult);
    });

    it('should return correct values from -20 to -1', function () {
        //arrange
        var expectedResult = 'buzz -19 fizz -17 -16 fizzbuzz -14 lucky fizz -11 buzz fizz -8 -7 fizz buzz -4 lucky -2 -1';
        var range = new self.fizzBuzz.Range(-20, -1);

        //act
        var result = new self.fizzBuzz.Generator(range).toArr().join(' ');

        //assert
        expect(result).toBe(expectedResult);
    });
});