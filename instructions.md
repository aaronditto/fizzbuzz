#Technical Test

###Prerequisites

Create a public GitHub repo to host your work. Use this repository for your subsequent development.

When complete, email the link to your public GitHub repo containing your work to daniel.jepp@hsbc.com.

###Step 1

Write some JavaScript code that prints out the following for a contiguous range of integer values:

 - the number
 - `fizz` for numbers that are multiples of 3
 - `buzz` for numbers that are multiples of 5
 - `fizzbuzz` for numbers that are multiples of 15

e.g. Running the program over a range from 1-20 should output:

    1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz

Tag your repo `step1` when you have completed this stage of the implementation.

###Step 2

*Enhance your existing solution as follows*

If the number contains a three you must output the text 'cool'. This overrides any existing behaviour.

e.g. Running the program over a range from 1-20 should output:

    1 2 cool 4 buzz fizz 7 8 fizz buzz 11 fizz cool 14 fizzbuzz 16 17 fizz 19 buzz

Tag your repo `step2` when you have completed this stage of the implementation.

###Step 3

*Enhance your existing solution as follows*

Produce a report at the end of the programme showing how many times the following were output

 - `fizz`
 - `buzz`
 - `fizzbuzz`
 - `cool`
 - an integer

e.g. Running the program over a range from 1-20 should output:

    1 2 cool 4 buzz fizz 7 8 fizz buzz 11 fizz cool 14 fizzbuzz 16 17 fizz 19 buzz
     
    fizz: 4
    buzz: 3
    fizzbuzz: 1
    cool: 2
    integer: 10

 (Integer is 10 because there were 10 numbers that were not altered in any way).

Tag your repo `step3` when you have completed this stage of the implementation.

###Step 4 (bonus step and not required)

*Enhance your existing solution as follows*

Refactor your implementation to use the `yield` keyword avaailable in modern versions of Firefox.

Tag your repo `step4` when you have completed this stage of the implementation.

###Notes

Avoid spending a large amount of time on this exercise - it is designed to be straightforward.

Things we are looking for:

 - *Test Coverage* Try to develop your solution test-first. It should have very good unit test coverage.

 - *Simplicity* Simplicity is important because other developers will have to understand your work. Solutions should be as simple as is reasonably possible. Superfluous layers of abstraction, patterns, or architectural features should be avoided.

 - *Self-explanatory code* Your work should not require multiple paragraphs of explanatory text. If this is necessary, it is highly likely your code is over-complicated.
