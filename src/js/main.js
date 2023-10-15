var i = 0;
var txt = 'C:/users/emilmikkelsenbage/portfolio/index.html'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("navBrand").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

window.onload = function () {
    typeWriter();
};


function showObject(element) {
    let object = document.getElementById(element);
    let elementsToHide = document.querySelectorAll('.toggleable');
    elementsToHide.forEach(function (el) {
        if (el !== object) {
            el.classList.add('d-none');
        }
    });

    if (object.classList.contains("d-none")) {
        elementsToHide.forEach(function (el) {
            el.classList.add('d-none');
        });
        object.classList.remove('d-none');
    } else {
        object.classList.add("d-none");
    }
};