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
  .addEventListener("click", function (_close) {
    modalbg.style.display = "none";
  });

// fermer via fermer
document
  .querySelector(".click-end")
  .addEventListener("click", function (_close) {
    clickEnd.style.display = "none";
    modalbg.style.display = "none";
  });

//messages d'erreur personnalisés

function validateForm() {
  if (document.getElementById("first").value == "") {
    document.getElementById("firstError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
    return false;
  }
  if (document.getElementById("last").value == "") {
    document.getElementById("lastError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
    return false;
  }
  if (document.getElementById("email").value == "") {
    document.getElementById("emailError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
    return false;
  }
  if (document.getElementById("birthdate").value == "") {
    document.getElementById("birthdateError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
    return false;
  }
  if (document.getElementById("location").value == "") {
    document.getElementById("locationError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
    return false;
  } else document.getElementById("myForm").innerHTML = "";
  alert("le formulaire ne peut pas être envoyé");
  return true;
}

function disableSubmit(disabled) {
  if (disabled) {
    document.getElementById("inscription").setAttribute("disabled", true);
  } else {
    document.getElementById("inscription").removeAttribute("disabled");
  }
}
