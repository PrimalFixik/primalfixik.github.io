const sec = a => {
    return a + 1;
};

const add = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return sec(add(a, b - 1));
    }
}
const mpy = (a, b) => {
    if (b === 1) {
        return a;
    } else {
        return add(a, mpy(a, b - 1));
    }
}
const pwr = (a, b) => {
    if (b === 0) {
        return 1;
    } else {
        return (b === 1) ? a : mpy(a, pwr(a, b - 1));
    }
}

// Maximum value is 13.
// console.log(pwr(2, 14)); // Error: Maximum call stack size exceeded

