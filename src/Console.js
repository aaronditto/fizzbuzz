(function (app) {
    'use strict';

    function Console() {
        if (!(this instanceof Console)) {
            return new app.Console()
        }

        this._console = window.console = window.console || { log: function () {} };
    }

    Console.prototype.log = function (str, options) {
        this._console.log(str);
    };

    app.Console = Console;

}(self.fizzBuzz));

