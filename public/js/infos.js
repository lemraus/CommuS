const normalImg = document.querySelector("#plan img");
const popup = document.getElementById("popup");

function showImg() {
    popup.classList.add("visible");
}

normalImg.addEventListener("click", showImg);

function closePopup() {
    popup.classList.remove("visible");
}