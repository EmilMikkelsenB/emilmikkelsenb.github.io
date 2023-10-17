function changeText(containerNum) {
    let textId = document.getElementById(containerNum);
    let textFromId = textId.textContent;
    console.log(textFromId)
    document.getElementById("head").innerHTML = textFromId;
};