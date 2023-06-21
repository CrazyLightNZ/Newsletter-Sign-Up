// "use strict";

// const emailInput = document.getElementById("user-email");
// const emailError = document.getElementById("email-error");
// const submitButton = document.querySelector(".btn");

// submitButton.addEventListener("click", (event) => {
//   if (!emailInput.validity.valid) {
//     event.preventDefault(); // Prevent form submission
//     emailInput.classList.add("error");
//     emailError.textContent = "Valid email required";
//     // change colour of the placeholder text to red
//     emailInput.style.color = "red";
//     //change the inputs background colour to a light red
//     emailInput.style.backgroundColor = "rgb(255,232,230)";
//     // input background colour needs to be a lighter red
//   } else {
//     emailInput.classList.remove("error");
//     emailError.textContent = "";
//   }
// });

"use strict";

const emailInput = document.getElementById("user-email");
const emailError = document.getElementById("email-error");
const submitButton = document.querySelector(".btn");
const form = document.getElementById("form");
const successContainer = document.querySelector(".success");

submitButton.addEventListener("click", (event) => {
  if (!emailInput.validity.valid) {
    event.preventDefault(); // Prevent form submission
    emailInput.classList.add("error");
    emailError.textContent = "Valid email required";
    // change colour of the placeholder text to red
    emailInput.style.color = "red";
    //change the inputs background colour to a light red
    emailInput.style.backgroundColor = "rgb(255,232,230)";
    // input background colour needs to be a lighter red
  } else {
    emailInput.classList.remove("error");
    emailError.textContent = "";
    form.style.display = "none"; // Hide the form
    successContainer.style.display = "block"; // Display the success container
  }
});
