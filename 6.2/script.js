function solve(arr) {
    const numElem = arr.filter(element => typeof element === 'number');

    if(numElem.length === 0){
        return null;
    }

    const sum = numElem.reduce((acc, number) => acc + number, 0);
    return sum / numElem.length;
}

const mixed = [1, 'hello', 3, true, 5, undefined, 8, 'morrissli'];
const result = solve(mixed);
console.log(result);

