// var number= 10;
// if(number % 2 == 0) {
//     console.log(number, 'number is even')
// }else {
//     console.log('number is not even');
// }

function isEven(number) {
    const reminder = number % 2;
    //console.log(reminder);
    if(reminder === 0) {
        return true;
    }else {
        return false;
    }
}

const mySelectedNumber = 201;
const isEvenThis = isEven(mySelectedNumber);
console.log(isEvenThis);