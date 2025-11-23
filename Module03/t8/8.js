
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const button = document.getElementById('start');


button.addEventListener('click', function(evt) {
    evt.preventDefault();


    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);


    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please enter valid numbers!';
        return;
    }

    let res;


    switch(operation.value) {
        case 'add':
            res = num1 + num2;
            break;
        case 'sub':
            res = num1 - num2;
            break;
        case 'multi':
            res = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                res = 'Cannot divide by zero!';
            } else {
                res = num1 / num2;
            }
            break;
        default:
            res = 'Unknown operation';
    }


    result.textContent = `Result: ${res}`;
});
