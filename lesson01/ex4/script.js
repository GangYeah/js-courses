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
        case "/":
            return div(left, right);
        case "*":
            return mult(left, right);
        default:
            return null;
    }
}

function validate_until_correct(action, check, afterAction) {
    const doAfterAction = () => {
        afterAction();
        return true;
    }

    let res;
    do {
        res = action();
    }
    while (!check(res) && doAfterAction()) 

    return res;
}

const left = validate_until_correct(
    () => prompt("Введите левый операнд"),
    res => !isNaN(res),
    () => alert("Должно быть числом")
);
const op = validate_until_correct(
    () => prompt("Введите операцию"),
    res => ["+", "-", "/", "*"].includes(res),
    () => alert("Неверный операнд")
);
const right = validate_until_correct(
    () => prompt("Введите правый операнд"),
    res => !isNaN(res),
    () => alert("Должно быть числом")
);

alert(get_result(left, op, right));