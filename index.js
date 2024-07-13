console.log('Hi from Shejaaaaaaaaaaaannn');
console.log('Hi from Shejan');
console.log('Hi from Shejan-2');
console.log('Hi from Shejan-3');
console.log('Hi from Shejan-4');
console.log('Hi from Shejan-5');

// find multiples of a number
const findMultiples = (number = 1) => {
    let multiples = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            multiples.push(i)
        }
    }
    return multiples;
}

console.log(findMultiples(28));
console.log(findMultiples(8));