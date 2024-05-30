function multiply(a) {
    return function (b) {
        return a * b;
    };
}

console.log(multiply(3)(7));
console.log(multiply(7)(7));
console.log(multiply(7)(4));