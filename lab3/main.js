"use strict";

document.getElementById("submit").addEventListener("click", function() {

/* The Fahrenheit value entered by the user */
let fahrenheit = Number(document.getElementById("inputF").value); 

/* The choices that appear in front of the user using dropdown menu */
let conversionType= document.getElementById("conversionChoice").value;

/* Conversion formulas */
let celsius = (fahrenheit - 32) * 5/9
let kelvin = (fahrenheit + 459.67) * 5/9

output( "Original Temperature (F): " + fahrenheit);

/* I am choosing the two if statements because its easy for me to 
understand that there are two options and only one output can be 
shown at a time */

if (conversionType == "c") {
output("Conversion to Celsius: " + celsius)
};
if (conversionType == "k") {
output("Conversion to Kelvin: " + kelvin)
};

/* if (conversionType == "c") {
    output("Conversion to Celsius:" + celsius);
} else {
    ouput("Conversion to Kelvin:" + kelvin);
} */ 
/* it shows only one output at a time */

});