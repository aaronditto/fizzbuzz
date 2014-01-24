(function (app) {
    'use strict';

    //Note 1: 2^53 is the top (and bottom for the negative) for the contiguous integer range for a IEEE double aka. 'Number'.
    //Note 2: We constrain the range because of a limitation in printing to the console in web browsers (they always print to newlines). So we need to use a buffer (which brings with it a risk of overuse of memory).
    function Range(low, high) {

        if (!(this instanceof Range)) {
            return new app.Range(low, high);
        }

        var self = this;

        function init() {
            if (low == null) { //see note 1
                throw 'low not supplied.';
            }

            if (high == null) { //see note 1
                throw 'high not supplied.';
            }

            if (low > high) {
                throw 'low larger than high.';
            }

            if (low <= Math.pow(-2, 53)) { //see note 1
                throw 'low too small.';
            }

            if (high >= Math.pow(2, 53)) { //see note 1
                throw 'high too large.';
            }

            if (high - low >= 1e6) { //see note 2
                throw 'low and high must be separated by no more than one million.';
            }

            self.low = low;
            self.high = high;

            return self;
        }

        return init();
    }

    app.Range = Range;

}(self.fizzBuzz));

