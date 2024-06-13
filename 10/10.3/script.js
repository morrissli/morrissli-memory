class ContactBook {
    constructor() {
        this.contact = []
    }

    addContact(name, phone, email) {
        const newContact = {name, phone, email};
        this.contact.push(newContact);
    }

    findContactByName(name) {
        return this.contact.find(contact => contact.name.toLowerCase());
    }
}

const myContactBook = new ContactBook();

myContactBook.addContact("Любов", "+380 153 486 2525", "lubovnondg@gmail.com");
myContactBook.addContact("Каріна", "+380 486 456 1534", "karinabbc@gmail.com");
myContactBook.addContact("Крістіна", "+380 156 648 4537", "kristinafbsd@gmail.com");
myContactBook.addContact("Юлій", "+380 453 364 8615", "yuliiib@gmail.com");

const foundContact = myContactBook.findContactByName("Любов");
console.log(foundContact);