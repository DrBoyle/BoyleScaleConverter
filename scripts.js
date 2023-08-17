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

function convertFromFahrenheit() {
    let fahrenheitValue = parseFloat(document.getElementById("fahrenheit").value);

    if (isNaN(fahrenheitValue)) {
        document.getElementById("celsius").value = "Invalid Input";
        return;
    }

    let celsiusValue = ((fahrenheitValue - 32) / 1.8).toFixed(2);
    document.getElementById("celsius").value = celsiusValue;
}
