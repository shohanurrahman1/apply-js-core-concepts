function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial  * i;
        console.log(i, factorial);
    }
    return factorial;
}
const factorial = getFactorial(12);
console.log('Factorial of 7 is: ', factorial);