(function (app) {
    'use strict';

    function ReportFactory() {

        if (!(this instanceof ReportFactory)) {
            return new app.ReportFactory()
        }
    }

    ReportFactory.prototype.create = function (counts) {
        if (!counts) {
            throw 'counts not supplied.'
        }

        return '\nfizz: ' + counts.fizz + '\n' + 'buzz: ' + counts.buzz + '\n' + 'fizzbuzz: ' + counts.fizzbuzz + '\n' + 'lucky: ' + counts.lucky + '\n' + 'integer: ' + counts.integer;
    };

    app.ReportFactory = ReportFactory;

}(self.fizzBuzz));

