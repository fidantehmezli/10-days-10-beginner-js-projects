let result = document.getElementById('result');

function insert(char) {
    result.value += char;
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    result.value = '';
}

function calculate() {
    result.value = eval(result.value);
}
