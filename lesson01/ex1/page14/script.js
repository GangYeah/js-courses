console.log(2)
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return 
    }
}
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
console.log(3)
function min(a, b) {
    return a < b ? a : b;
}
console.log(4)
function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}