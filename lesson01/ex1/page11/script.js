console.log(6)
let age = 20;
if (age >= 14 && age <= 90) {
    alert('Yes!')
}

console.log(7)
if (!(age >= 14 && age <= 90)) {
    alert('Yes!')
}
if (age < 14 || age > 90) {
    alert('Yes!')
}

console.log(9)
let res = prompt('Логин')
if (res == 'Админ') {
    let password = prompt('Пароль')
    if (password == 'Я главный') {
        alert('Здравствуйте')
    }
    else if (password) {
        alert('Неверный пароль')
    }
    else {
        alert('Отменено')
    }
}
else if (res) {
    alert('Я вас не знаю')
}
else {
    alert('Отменено')
}