'use strict';

describe('ConsolePrinter', function () {
    var _console = null,
        _printer = null,
        _reportFactory = null;

    beforeEach(function () {
        _console = { log: function () {}, flush: function () {} };
        _reportFactory = new self.fizzBuzz.ReportFactory();
        _printer = new self.fizzBuzz.ConsolePrinter(_console, _reportFactory);
    });

    it('should throw an exception if `console` argument is missing', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.ConsolePrinter(null);
        }).toThrow('console not supplied.');
    });

    it('should throw an exception if `reportFactory` argument is missing', function () {
        //act & assert
        expect(function () {
            new self.fizzBuzz.ConsolePrinter(new self.fizzBuzz.Console(), null);
        }).toThrow('reportFactory not supplied.');
    });

    describe('print', function () {
        it('should call console.log once for each item in the generated sequence', function () {
            //arrange
            var range = new self.fizzBuzz.Range(1, 20);
            var generator = new self.fizzBuzz.Generator(range);
            var spy = spyOn(_console, 'log');

            //act
            _printer.print(generator);

            //assert
            expect(spy.calls.count()).toBe(20+1); //the +1 for the insertion of the report
        });
    });

    describe('print', function () {
        it('should call console.flush once', function () {
            //arrange
            var range = new self.fizzBuzz.Range(1, 20);
            var generator = new self.fizzBuzz.Generator(range);
            var spy = spyOn(_console, 'flush');

            //act
            _printer.print(generator);

            //assert
            expect(spy.calls.count()).toBe(1);
        });
    });

    describe('print', function () {
        it('should send the correct count values to the ReportFactory', function () {
            //arrange
            var range = new self.fizzBuzz.Range(1, 20);
            var generator = new self.fizzBuzz.Generator(range);
            var expectedCountObj = { fizz: 4, buzz: 3, fizzbuzz: 1, lucky: 2, integer: 10 };
            var spy = spyOn(_reportFactory, 'create');

            //act
            _printer.print(generator);

            //assert
            expect(spy).toHaveBeenCalledWith(expectedCountObj);
        });
    });
});


