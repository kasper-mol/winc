let knopje2 = document.getElementById("knop2");
let background = document.getElementById("background");
knopje2.addEventListener("click", toggleColor);

function toggleColor() {
    background.classList.toggle("red-background");
};