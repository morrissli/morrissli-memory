function remove(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array = [1, 7, 2, 3, 6, 4, 5];

remove(array, 4)
console.log(array);