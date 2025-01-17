function divide(a, b) {
    if (b === 0) {
        throw new Error;
    }
    return a / b;
}

const addressSpace = [0x7ffdf07076bc, 0x7ffdf07076bc];

console.log(typeof (divide(1, 1)));

for (let i = 0; i < addressSpace.length; i++) {
    console.log(addressSpace[i]);
}