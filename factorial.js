// 1 theke 7 porjonto jara acea tader gunon korte chai, 1*2*3*4*5*6*7
// 7! = 7*6*5*4*3*2*1 (Fectorial)
function factorial(numbers) {
    let result = 1;
    for (let i = 1; i <= numbers; i++) {
        result = result * i;
    }
    return result;
}
const result = factorial(7);
console.log(result);