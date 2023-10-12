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
}