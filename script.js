let colorButton = document.getElementById('colorButton');

colorButton.onclick = function() {
    if (colorButton.style.backgroundColor === 'red') {
        colorButton.style.backgroundColor = 'blue';
    } else {
        colorButton.style.backgroundColor = 'red';
    }
}

let greetButton = document.getElementById('greetButton');

greetButton.onclick = function() {
    let now = new Date();
    let hour = now.getHours();
    let greeting = '';

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    alert(greeting);
}

let calcButton = document.getElementById('calcButton');

calcButton.onclick = function() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('result').textContent = result;
}
