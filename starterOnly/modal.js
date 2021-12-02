// la class responsive est rajouté à la class initiale
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
const myForm = document.getElementById("myForm");

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

// messages d'erreur personnalisés
function validateForm() {
  let estValide = true;

  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let location = document.getElementById("location").value;
  let checkbox1 = document.getElementById("checkbox1").value;

  if (first.length >= 2) {
    document.getElementById("firstError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
    estValide = false;
  } else {
    document.getElementById("firstError").innerHTML = "";
  }
  if (last.length >= 2) {
    document.getElementById("lastError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
    estValide = false;
  } else {
    document.getElementById("firstError").innerHTML = "";
  }
  if (email) {
    document.getElementById("emailError").innerHTML =
      "Veuillez saisir une adresse email valide.";
    estValide = false;
  } else {
    document.getElementById("firstError").innerHTML = "";
  }

  if (birthdate) {
    document.getElementById("birthdateError").innerHTML =
      "Veuillez saisir votre date de naissance.";
    estValide = false;
  } else {
    document.getElementById("firstError").innerHTML = "";
  }
  if (quantity) {
    document.getElementById("quantityError").innerHTML =
      "Veuillez choisir une valeur numérique.";
    estValide = false;
  } else {
    document.getElementById("firstError").innerHTML = "";
  }
  if (location) {
    document.getElementById("locationError").innerHTML =
      "Veuillez sélectionner une ville.";
    estValide = false;
  } else {
    document.getElementById("firstError").innerHTML = "";
  }
  if (checkbox1) {
    document.getElementById("checkbox1Error").innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    estValide = false;
  } else {
    document.getElementById("firstError").innerHTML = "";
  }

  if (!estValide) {
    // le ! indique l'inverse si ce n'est pas valide
    //on bloque le formulaire
    e.preventDefault();
  }
}
