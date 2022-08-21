// 1 theke 7 porjonto joto gula sonkha acea taderke jug korte chai
function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
sumOfNumbers(7);
