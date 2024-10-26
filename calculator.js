function calculate(operation) {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result = 'Please enter valid numbers';
    } else {
        switch (operation) {
            case 'add':
                result = firstNumber + secondNumber;
                break;
            case 'subtract':
                result = firstNumber - secondNumber;
                break;
            case 'multiply':
                result = firstNumber * secondNumber;
                break;
            case 'divide':
                result = secondNumber !== 0 ? firstNumber / secondNumber : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operation';
        }
    }

    document.getElementById('result').innerText = result;
}
