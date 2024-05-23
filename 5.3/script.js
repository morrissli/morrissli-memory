let number = prompt("Ведіть будь-яке число до 100");
if (isNaN(number)) {
    alert("Будьласка введіть коректне ціле число");
} else {
    for (let i = 1; i <= 100; i++) {
        if (i * i <= number) {
            console.log(i);
        }
    }
}