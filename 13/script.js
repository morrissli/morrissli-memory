document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('massageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';

    let name = document.getElementById('name').value;
    let massage = document.getElementById('massage').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let isValid = true;

    if (!name.trim()) {
        document.getElementById('nameError').textContent = "Введіть Ім'я!";
        isValid = false;
    }

    if (!massage.length > 5) {
        document.getElementById('massageError').textContent = 'Повідомлення повинно бути длиною мінімум в ' +
            '5 символів';
        isValid = false;
    }

    let phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Номер телефону повинен починатися на +380, ' +
            'та мати 9 символів';
        isValid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Невірний формат email';
        isValid = false;
    }

    if (isValid) {
        console.log({
            name: name,
            massage: massage,
            phone: phone,
            email: email
        });
        document.getElementById('form').reset();
    }
})