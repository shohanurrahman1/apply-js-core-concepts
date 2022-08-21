function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
// kunu ekta array er modde jeigula bejur shonkha acea sei guka ver korte chai
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = []; // odd number array er modde pawar jonne
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element); 
            oddNumbers.push(element);// odd number array er modde pawar jonne  
        }
    }
    return oddNumbers;
}
const myNumbers = [20, 30, 40, 65, 91, 53];
const oddNumbers =  getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const OddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Odd Number Sum:', OddNumberSum);
// getSumOfAnArray(myNumbers);

