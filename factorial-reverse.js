
function factorial(number) {
    let result = 1;
    for(let i = number; i >= 1; i--) {
        result = result * i;
        console.log(i);
    }
    return result;
}

const number = 5;
const fact = factorial(number);
console.log(`The factorial of: ${number} is ${fact}`);