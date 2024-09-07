var colors = ["#b3c7e8", "#f7c16f", "#f0ab92"];
var colorIndex = 0;

function changeColor() {
    var port = document.getElementById("portfolio");
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    port.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}

var el = document.getElementById("button");
el.addEventListener("click",  changeColor);

var el2 = document.getElementById("button2");
el2.addEventListener("click",  changeColor);

var el3 = document.getElementById("button3");
el3.addEventListener("click",  changeColor);

var contactForm = document.getElementById('contact-form')

function formSubmit(event) {
    alert('Message  Sent.');
    contactForm.reset();
    event.preventDefault();
}
contactForm.addEventListener('submit', formSubmit)
