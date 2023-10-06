let celsius1 = document.getElementById('celcius');
let fahrenheit1 = document.getElementById('fahrenheit');
let kelvin1 = document.getElementById('kelvin');

celsius1.oninput = function () {
    let f = (parseFloat(celsius1.value) * 9) / 5 + 32;
    fahrenheit1.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsius1.value) + 273.15);
    kelvin1.value = parseFloat(k.toFixed(2));
}

fahrenheit1.oninput = function () {
    let c = ((parseFloat(fahrenheit1.value) - 32) * 5) / 9;
    celsius1.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit1.value) - 32) * 5 / 9 + 273.15;
    kelvin1.value = parseFloat(k.toFixed(2));
}

kelvin1.oninput = function () {
    let f = (parseFloat(kelvin1.value) - 273.15) * 9 / 5 + 32;
    fahrenheit1.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvin1.value) - 273.15);
    celsius1.value = parseFloat(c.toFixed(2));
}

function resetValues() {
    // Get references to the input elements
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusInput = document.getElementById('celcius');
    const kelvinInput = document.getElementById('kelvin');

    // Clear the input values
    fahrenheitInput.value = '';
    celsiusInput.value = '';
    kelvinInput.value = '';
}