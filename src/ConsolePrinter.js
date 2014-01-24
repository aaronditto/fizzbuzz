(function (app) {
    'use strict';

    function ConsolePrinter(console, reportFactory) {

        if (!(this instanceof ConsolePrinter)) {
            return new app.ConsolePrinter(console, reportFactory);
        }

        var self = this;

        function init() {
            if (!console) {
                throw 'console not supplied.'
            }

            if (!reportFactory) {
                throw 'reportFactory not supplied.'
            }

            self._console = console;
            self._reportFactory = reportFactory;

            return self;
        }

        return init();
    }

    ConsolePrinter.prototype.print = function (generator) {
        if (!generator) {
            throw 'generator not supplied.';
        }

        var counts = { fizz: 0, buzz: 0, fizzbuzz: 0, lucky: 0, integer: 0 };

        for(var i in generator) {
            if(!(/\d+/g).test(i)){
                counts[i]++;
            } else {
                counts.integer++;
            }

            this._console.log(i);
        }

        this._console.log(this._reportFactory.create(counts));
        this._console.flush();
    };

    app.ConsolePrinter = ConsolePrinter;

}(self.fizzBuzz));

