'use strict';

describe('ReportFactory', function () {
    var _factory;

    beforeEach(function () {
        _factory = new self.fizzBuzz.ReportFactory();
    });

    describe('create', function () {
        it('should create a report in the correct format', function () {
            //act
            var report = _factory.create({ fizz: 0, buzz: 1, fizzbuzz: 2, lucky: 3, integer: 4 });

            //assert
            expect(report).toBe('\nfizz: 0\nbuzz: 1\nfizzbuzz: 2\nlucky: 3\ninteger: 4');
        });
    });
});
