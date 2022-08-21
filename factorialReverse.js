// Reverse way factorial do
function factorialReverse(numbers) {
    let result = 1;
    for (let i = numbers; i >= 1; i--) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}
const number = 7;
const fact = factorialReverse(number);
console.log('Factorial of', number, ':', fact);