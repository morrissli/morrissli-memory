function promptNumbers() {
    let input;
    for (let i = 0; i < 10; i++) {
        input = prompt("Enter a number greater than 100:");

        if (input > 100) {
            break;
        }
    }
    console.log(input);
}

promptNumbers()