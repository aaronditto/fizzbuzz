(function (app) {
    'use strict';

    function Generator(range) {

        if (!(this instanceof Generator)) {
            return new app.Generator(range);
        }

        var self = this;

        function init() {
            if (!range) {
                throw 'range not supplied.';
            }

            self._range = range;

            return self;
        }

        return init();
    }

    Generator.prototype.__iterator__ = function () {
        for (var i = this._range.low; i <= this._range.high; i++) {
            if (i === 0) {
                yield '0';
            } else if ((i + '').indexOf('3') !== -1) {
                yield 'lucky';
            } else if (i % 15 === 0) {
                yield 'fizzbuzz';
            } else if (i % 5 === 0) {
                yield 'buzz';
            } else if (i % 3 === 0) {
                yield 'fizz';
            } else {
                yield i;
            }
        }
    };

    //helper method
    Generator.prototype.toArr = function () {
        var a = [];
        for(var i in this) {
            a.push(i);
        }

        return a;
    };

    app.Generator = Generator;

}(self.fizzBuzz));

