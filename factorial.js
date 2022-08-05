// 1 * 2 * 3 * 4 *......
// গুনন করার জন্য 
// factorial 
function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);