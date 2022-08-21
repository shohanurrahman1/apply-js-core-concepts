// 1 theke 7 porjonto jara acea tader gunon korte chai, 1*2*3*4*5*6*7
// 7! = 7*6*5*4*3*2*1 (Fectorial)

function multiplicationsOfNumbers(numbers) {
    let result = 1;
    for (let i = 1; i <= numbers; i++) {
        result = result * i;
        // console.log(i, result);
    }
    return result;
}
const result = multiplicationsOfNumbers(7);
console.log(result);