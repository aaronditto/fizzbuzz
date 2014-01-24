#Real Fizzbuzz

Note this solution uses JavaScript 1.7 (`yield`) and will therefore only work in environments supporting that version of JavaScript. Modern Firefox is the browser this code was tested on. You will probably have problems with Chrome. Node.js will probably work (but is untested).

##How to test

1. Open SpecRunner.html in a modern Firefox (must support JavScript 1.7).
2. Tests will automatically run.
3. Optionally, you can then open up the JavaScript console and play with it using the following construction:

        //create the 'printer'
        var printer = new self.fizzBuzz.ConsolePrinter(new self.fizzBuzz.BufferedConsole(new self.fizzBuzz.Console()), new self.fizzBuzz.ReportFactory());

        //print out the result to the console
        printer.print(new self.fizzBuzz.Generator(new self.fizzBuzz.Range(1,20)));