const params = new URLSearchParams(window.location.search);
const selectedCar = params.get("car");

const carDropdown = document.getElementById("car");

if (carDropdown && selectedCar) {
    carDropdown.value = selectedCar;
}