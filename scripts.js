const m = 100 / 37;

function convertToBoyle() {
    let celsiusValue = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsiusValue)) {
        document.getElementById("boyle").value = "Invalid Input";
        return;
    }

    let boyleValue = (m * celsiusValue).toFixed(2);
    document.getElementById("boyle").value = boyleValue;
}

function convertToCelsius() {
    let boyleValue = parseFloat(document.getElementById("boyle").value);

    if (isNaN(boyleValue)) {
        document.getElementById("celsius").value = "Invalid Input";
        return;
    }

    let celsiusValue = (boyleValue / m).toFixed(2);
    document.getElementById("celsius").value = celsiusValue;
}

function convertToFahrenheit() {
    let celsiusValue = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsiusValue)) {
        document.getElementById("fahrenheit").value = "Invalid Input";
        return;
    }

    let fahrenheitValue = (celsiusValue * 1.8 + 32).toFixed(2);
    document.getElementById("fahrenheit").value = fahrenheitValue;
}

function convertFromFahrenheit() {
    let fahrenheitValue = parseFloat(document.getElementById("fahrenheit").value);

    if (isNaN(fahrenheitValue)) {
        document.getElementById("celsius").value = "Invalid Input";
        return;
    }

    let celsiusValue = ((fahrenheitValue - 32) / 1.8).toFixed(2);
    document.getElementById("celsius").value = celsiusValue;
}


    let fahrenheitValue = (celsiusValue * 1.8 + 32).toFixed(2);
    document.getElementById("result").innerText = `Result: ${fahrenheitValue} °F`;
}

function convertFromFahrenheit() {
    let fahrenheitValue = parseFloat(document.getElementById("fahrenheit").value);

    if (isNaN(fahrenheitValue)) {
        document.getElementById("result").innerText = "Please enter a valid Fahrenheit value.";
        return;
    }

    let celsiusValue = ((fahrenheitValue - 32) / 1.8).toFixed(2);
    document.getElementById("result").innerText = `Result: ${celsiusValue} °C`;
}

