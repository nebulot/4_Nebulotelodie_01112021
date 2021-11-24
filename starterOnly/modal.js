function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const clickBtn = document.querySelectorAll(".click-btn");
const clickEnd = document.querySelector(".click-end");

// 'click' = "je m'inscris" 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lancement du formulaire voir diplay form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer formulaire  via croix
document.getElementById("closeForm")
.addEventListener("click", function (close) {
  clickEnd.style.display = "none";
  modalbg.style.display = "none";
});

// Creation de la fonction message erreur 


// chargement des messages erreurs dans un ordre bien précis
document.getElementById("inscription").addEventListener("click", function(msgError) {

// fermer via fermer
document
  .querySelector(".click-end")
  .addEventListener("click", function (close) {
    clickEnd.style.display = "none";
    modalbg.style.display = "none";
  });