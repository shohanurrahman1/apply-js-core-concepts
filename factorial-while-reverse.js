function factorial(numbers) {
    let result = 1;
    let num = numbers;    
    while (num >= 1) {
        result = result * num;
        console.log(num, result);
        num--;
    }
    return result;
}
const numbers = 7;
const fact = factorial(numbers);
console.log('Factorial of', numbers, ':', fact);