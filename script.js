// Selecting the h3 from the html
var css = document.querySelector("h3");

// Selecting the two input colors using the class
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// Selecting the body using the id graient
var body = document.getElementById("gradient");

// Creating a function that sets gradient
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    // Creating the text content of the gradient
    css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
