function newSum() {
    let t = 0;
    return function(num) {
        t += num;
        return num;
    };
}
const sum = newSum();
console.log(sum(4));
console.log(sum(5));
console.log(sum(10));
console.log(sum(3));