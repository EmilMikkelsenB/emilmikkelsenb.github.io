function showObject(element) {
    let object = document.getElementById(element);

    if (object.classList.contains("d-none")
    ) {
        object.classList.remove('d-none');
    } else {
        object.classList.add("d-none");
    }
}

