const m = 100 / 37;
const c = 0;

function convertToBoyle() {
    let celsiusValue = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsiusValue)) {
        document.getElementById("result").innerText = "Please enter a valid Celsius value.";
        return;
    }

    let boyleValue = (m * celsiusValue + c).toFixed(2);
    document.getElementById("result").innerText = `Result: ${boyleValue} Boyle`;
}

function convertToCelsius() {
    let boyleValue = parseFloat(document.getElementById("boyle").value);

    if (isNaN(boyleValue)) {
        document.getElementById("result").innerText = "Please enter a valid Boyle value.";
        return;
    }

    let celsiusValue = ((boyleValue - c) / m).toFixed(2);
    document.getElementById("result").innerText = `Result: ${celsiusValue} °C`;
}

function convertToFahrenheit() {
    let celsiusValue = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsiusValue)) {
        document.getElementById("result").innerText = "Please enter a valid Celsius value.";
        return;
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

