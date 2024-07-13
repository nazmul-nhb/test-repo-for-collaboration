console.log('Hi from Shejaaaaaaaaaaaannn');
console.log('Hi from Shejan');
console.log('Hi from Shejan-2');
console.log('Hi from Shejan-3');
console.log('Hi from Shejan-4');
console.log('Hi from Shejan-5');

// find factors of a number
const findFactors = (number = 1) => {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i)
        }
    }
    return factors;
}

console.log(findFactors(28));
console.log(findFactors(8));