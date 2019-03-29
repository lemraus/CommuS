const normalImg = document.querySelector("#plan img");
const popup = document.getElementById("popup");

function showImg() {
    popup.classList.add("visible");
}

function closePopup() {
    popup.classList.remove("visible");
}

normalImg.addEventListener("click", showImg);