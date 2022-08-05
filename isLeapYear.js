// function isLeapYear(year) {
//     const reminder = (year % 4);
//     if(reminder === 0) {
//         //console.log(`${year} is a leap year`);
//         return true;
//     }else {
//         //console.log(`${year} is not a leap year`);
//         return false;
//     }
// }

function isLeapYear(year) {
    const reminder = (year % 4);
    if(reminder === 0) {
        //console.log(`${year} is a leap year`);
        return true;
    }else {
        //console.log(`${year} is not a leap year`);
        return false;
    }
}

const inputYear = 1900;
const isLeapYearNumber = isLeapYear(inputYear);
console.log('This value is',isLeapYearNumber);