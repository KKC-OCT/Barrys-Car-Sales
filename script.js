
// Automatically select the vehicle from the homepage link

const params = new URLSearchParams(window.location.search);
const selectedCar = params.get("car");

const carDropdown = document.getElementById("car");

if (carDropdown && selectedCar) {
    carDropdown.value = selectedCar;
}

// Enquiry form confirmation

const enquiryForm = document.querySelector("main form");
const confirmation = document.getElementById("confirmation");

if (enquiryForm && confirmation) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        confirmation.textContent =
            "Thank you! Your enquiry has been submitted successfully.";

        confirmation.scrollIntoView({ behavior: "smooth" });

        enquiryForm.reset();
    });
}
