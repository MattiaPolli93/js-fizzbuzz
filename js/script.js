// Write a program that prints numbers ranging from 1 to 100. For multiples of 3 "Fizz" must be printed whereas for multiples of 5 "Buzz" must be printed. For all numbers both multiples of 3 and 5 "FizzBuzz" must be printed.

// Displayed messages
console.log("Below are the numbers ranging from 1 to 100. Fizz is a multiple of 3, Buzz is a multiple of 5 and FizzBuzz is a multiple of both!");
console.log();

// For loop dealing with all the required instructions
for (var i = 1; i <= 100; i++) {
    // Multiples of 3 and 5 (of 15)
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
        // Multiples of 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        // Multiples of 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
        // Not a multiple of 3 or 5
    } else {
        console.log(i);
    }
}