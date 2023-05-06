function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    if (b) {
        return a / b;
    }
    return NaN;
}
function mult(a, b) {
    return a * b;
}
function get_result(left, op, right) {
    left = Number(left)
    right = Number(right)
    
    switch (op) {
        case "+":
            return sum(left, right);
        case "-":
            return sub(left, right);
        case "\\":
            return div(left, right);
        case "*":
            return mult(left, right);
        default:
            return NaN;
    }
}

const left = prompt("Введите левый операнд");
const op = prompt("Введите операцию");
const right = prompt("Введите правый операнд");

alert(get_result(left, op, right));