const hamburguerbtn = document.getElementById("hamburguerbtn");
const navBar = document.getElementById("navBar");
const hamburguerImg = hamburguerbtn.querySelector("img");

function toggleHamburguerIcon(){
    hamburguerImg.src.includes("hamburguer.png") ? hamburguerImg.src = "assets/img/x.png" : hamburguerImg.src = "assets/img/hamburguer.png";
}

hamburguerbtn.addEventListener("click", function () {
    navBar.classList.toggle("navActive");
    hamburguerbtn.classList.toggle("hamburguerActive");
    toggleHamburguerIcon();
});