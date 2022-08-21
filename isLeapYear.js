/* 
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        // console.log(year, '- Leap Year');
        return true;
    }
    else {
        // console.log(year, '- This is year is not a leap year');
        return false;
    }
} */

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        // console.log(year, '- Leap Year');
        return true;
    }
    return false;
    /* else {
        // console.log(year, '- This is year is not a leap year');
        return false;
    } */
}
const isMyYearLeapYear =  isLeapYear(2024);
console.log('My Year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1962);
console.log('Her Year:', isHerYearLeapYear);