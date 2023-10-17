function changeText(containerNum) {

    let textId = document.getElementById(containerNum);
    let textFromId = textId.textContent;
    let headElement = document.getElementById("head");
    headElement.classList.add('change-color');


    setTimeout(function () {
        headElement.innerHTML = textFromId;
        headElement.classList.remove('change-color');
    }, 200);
};