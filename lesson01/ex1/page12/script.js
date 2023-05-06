console.log(4);
const start = 2, end = 10;
for (let i = start; i <= end; i++) {
    if (!(i % 2)) {
        alert(i);
    }
}
console.log(5);
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
console.log(6);
let answer = prompt("Введите число > 100");
while (answer <= 100 && answer != null) {
    answer = prompt("Введите еще раз число > 100");
}
console.log(7);
{
    const start = 2, end = 150;
    let primes = [];
    outer: for (let i = start; i <= end; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (!(i % j)) {
                continue outer;
            }
        }
        primes.push(i);
    }
    alert(primes);
}
