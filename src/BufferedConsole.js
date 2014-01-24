(function (app) {
    'use strict';

    //We buffer console output because repeatedly writing to the console in JavaScript does not meet the formatting requirements.
    function BufferedConsole(console) {
        if (!(this instanceof BufferedConsole)) {
            return new app.BufferedConsole(console);
        }

        var self = this;

        this._buffer = '';
        this._console = null;

        function init() {
            if (!console) {
                throw 'console not supplied.';
            }

            self._console = console;

            return self;
        }

        return init();
    }

    BufferedConsole.prototype.log = function (str) {
        this._buffer += str + ' ';
    };

    BufferedConsole.prototype.flush = function () {
        this._console.log(this._buffer.trim());
        this._buffer = '';
    };

    app.BufferedConsole = BufferedConsole;

}(self.fizzBuzz));

