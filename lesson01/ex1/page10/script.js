console.log(2)
let answer = prompt('Какое «официальное» название JavaScript?');
if (answer == 'ECMAScript') {
    alert('Верно!');
}
else {
    alert('Не знаете? ECMAScript!');
}

console.log(3)
let number = prompt('Введите число')
if (number > 0) {
    alert(1)
}
else if (number < 0) {
    alert(-1)
}
else {
    alert(0)
}

console.log(4)
let result;
let a = 2, b = 2;
result = a + b < 4 ? 'Мало' : 'Много'
console.log(result)

console.log(5)
let message;
login = '';
message = login == 'Сотрудник' ? 'Привет' : 
    login == 'Директор' ? 'Здравствуйте' :
    login == '' ? 'Нет логина' : ''
console.log(message)