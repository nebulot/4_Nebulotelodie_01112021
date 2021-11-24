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

// variable de saisie boolean 
var b_first=false; var b_last=false; var b_email=false; 
var b_birthdate=false; var b_quantity=false; var b_checkbox1=false; 

// On définit la fonction message erreur 
function send()
{
  if(b_first==true && b_last==true && b_email==true && b_birthdate==true && b_quantity==true && b_checkbox1=true)
  {
document.getElementById("message").innerText="Envoi serveur";
//document.getElementById("inscription").onsubmit();
  }
  else
  {
    document.getElementById("message").innerText="Le formulaire n'est pas complet";
  }

  document.getElementById("message").innerText += "-" + b_first + "-" + b_last + "-" + b_email + "-" + b_birthdate + "-" + b_quantity + "-" + b_checkbox1;
}

// fermer via fermer
document
  .querySelector(".click-end")
  .addEventListener("click", function (close) {
    clickEnd.style.display = "none";
    modalbg.style.display = "none";
  });