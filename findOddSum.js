// function getSumOfArray(numbers) {
//     for(let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         console.log(index, element);
//     }
// }

// const myNumbers = [12, 56, 67, 34, 56, 23];
// getSumOfArray(myNumbers);

function getSumOfArray(numbers) {
    let sum = 0; // right 
    for(let i = 0; i < numbers.length; i++) {
        //let sum = 0 // এই খানে sum declaire করলে আগের যোগ ভুলে যায় প্রতিবার ই আবার ০ থেকে যোগ শুরু করে/ তাই বাইরে যোগ দিতে হয়।
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        //console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = []; //অনেক গুলো নাম্বার এর জন্য array declaire korte হয়। array এর
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 56, 67, 34, 56, 23, 91, 66, 71];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
getSumOfArray(myNumbers);