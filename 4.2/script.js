let nume = prompt ("Введіть трьохзначне число");
console.log(nume[0], nume[1], nume[2]);
console.log(nume.split(''));
if (nume[0] === nume[1] && nume[1] === nume[2]) {
   alert('Всі цифри однакові');
} else {
   alert('Всі цифри різні')
}
// if (nume[0] === nume[1] || nume[1] === nume[2] || nume[0] === nume[2]) {
//    alert ('Дві цифри однакові')
// } else {
//    alert("Всі цифри різні")
// }