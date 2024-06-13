class Users {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    getUserInfo() {
        return `Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.location}`
    }
}

const user = new Users("Олексій", 30, "Дніпропетровська Область");

console.log(user.getUserInfo());