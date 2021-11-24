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
document
  .getElementById("closeForm")
  .addEventListener("click", function (close) {
    clickEnd.style.display = "none";
    modalbg.style.display = "none";
  });

//creation de la function erreur message

function errorMsg(inputMsg, formMsg, msg) {
  inputMsg.target.setCustomValidity("");
  if (inputMsg.target.valid && inputMsg.target.value.length==0)
  {
    inputMsg.target.setCustomValidity("msg");
  }
};

// message d'erreur "formMsg" par case "inputMsg"

document.getElementById("inscription").addEventListener("click", function(formMsg) {

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");

if (first.value) {
  first.oninvalid = function(inputMsg) {
    errorMsg(inputMsg, formMsg, "Veuillez saisir au minimum 2 caractères dans le champ.")
  };	
  return false;	
}
if (last.value) {
  last.oninvalid = function(inputMsg) {
    errorMessage(inputMsg, formMsg, "Veuillez saisir au minimum 2 caractères dans le champ.")
  };
  return false;	
} 
if (email.value) {
  email.oninvalid = function(inputMsg) {
    errorMessage(inputMsg, formMsg, "Veuillez saisir une adresse valide. Exemple : contact@nom.com")
  };
  return false;	
}
if (quantity.value) {
  quantity.oninvalid = function(inputMsg) {
    errorMessage(inputMsg, formMsg, "Veuillez choisir une valeur numérique.")
  };
  return false;	
}
if (checkbox1.value) {
  checkbox1.oninvalid = function(inputMsg) {
    errorMessage(inputMsg, formMsg, "Vous devez cocher la case des Conditions Générales.")
  };
  return false;
}
else {
  clickEnd.forEach((btn) => btn.addEventListener("click", launchSubmit));
  function launchSubmit() {
    clickEnd.style.display = "block";
    
    }
    formMsg.preventDefault();
  }
});



// fermer via fermer
document
  .querySelector(".click-end")
  .addEventListener("click", function (close) {
    clickEnd.style.display = "none";
    modalbg.style.display = "none";
  });
