const input = document.querySelector('.section-calc-display');

function insert(num) {
    input.value = input.value + num;
}

function clean() {
    input.value = "";
}

function equal() {
    let eq = input.value;
    if (eq) {
        input.value = eval(eq)
    }
}

function plusMinus() {
    input.value = input.value * (-1)
}
  