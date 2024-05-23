let userAge = prompt("Введіть ваш рік народження:", "2000");
let thisYear = new Date().getFullYear();
let age = thisYear - userAge;
if (userAge === null) {
    alert("Дуже шкода що ви не захотіли ввести свій вік:(");
} else {
    console.log(age);
}

let userCity = prompt("Введіть своє місто:")
let cityExam = {
    "Київ": "України",
    "Вашингтон": "США",
    "Лондон": "Англії"
};
let citySms = cityExam[userCity] ? `Ти живеш у столиці ${cityExam[userCity]} в місті: ${userCity}!`:
    `Ти живеш в місті: ${userCity}`
if (userCity === null) {
    alert("Дуже шкода що ви не захотіли ввести своє місто:(")
}else {
    console.log(userCity);
}

let userSport = prompt("Введіть свій улююлений спорт:");
let sportExam = {
    "Бразильске Джиу Джитсу" : "Круто! Ти хочеш бути як Фелипе Андре Силва?",
    "ММА" : "Круто! Ти хочеш стати Алексом Перейра?",
    "Баскетбол" : "Круто! Ти хочеш бути таким же як Уилтон Норман Чемберлен?"
};
let sportSms = sportExam[userSport] ? `Ти займаєшься ${userSport}. ${sportExam[userSport]}`
    : `Ти займаєшься ${userSport}. Це круто!`
if (userSport === null) {
    alert("Дуже шкода що ви не захотіли ввести свій улюбленний спорт:(")
} else {
    console.log(userSport);
}

alert("Ваш вік:" + age + "\n" + "\n" + citySms + "\n" + "\n" + sportSms);

