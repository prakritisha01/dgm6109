"use strict";

document.getElementById("submit").addEventListener("click", processForm);

/* This is the main fucntion. It runs the code and check whether every 
data is fine or not. If fine, then shows the message "All form data is valid". And,
if not valid then shows error. */
function processForm() {

    clear();

    if (validateData()) {
        output("All form data is valid");
    }
}

/* This function checks whether the user inputs are in accordance to the 
validation steps or not */

function validateData() {

    let cardType = document.getElementById("cardType").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let validationCode = document.getElementById("validationCode").value;
    let zipCode = document.getElementById("zipCode").value;

/* Validate selection of the card type */
    if (cardType == "chooseOption") {
        output("Please select a credit card type");
        return false;
    }

/* Validate the card number */
    if (cardNumber == "") {
        output("Please enter a credit card number.");
        return false;
    }

    if (isNaN(cardNumber)) {
        output("Credit card number must contain only numbers.");
        return false;
    }

    if (cardType== "charicard" && cardNumber.length !=6) {
        output("Charicard number must be exactly 6 digits.");
        return false;
    }

    if (cardType== "gengcard" && cardNumber.length !=8) {
        output("Gengcard number must be excatly 8 digits.");
        return false;
    }

/* Validate validation code */

    if (validationCode =="") {
        output("Please enter the validation code.");
        return false;
    }

    if (isNaN(validationCode)) {
        output("Validation code must contain only numbers.");
    }

    if(validationCode.length !=4) {
        output("Validation code must be exactly 4 digits.");
        return false;
    }

/* Validate ZIP code */

    if(zipCode =="") {
        output("Please enter the ZIP code");
        return false;
    }

    if(isNaN(zipCode)) {
        output("ZIP code must contain only numbers.");
        return false;
    }

    if(zipCode.length != 5) {
        output("ZIP code must be exactly 5 digits.");
        return false;
    }

return true; /* If validation succeeds then processForm() shows the syccess message
"All form data is valid" */

}