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
document.getElementById("myForm").addEventListener("submit",valider,false);




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
      "Veuillez saisir une adresse email valide.";
    return false;
  }
  if (document.getElementById("birthdate").value == "") {
    document.getElementById("birthdateError").innerHTML =
      "Veuillez saisir votre date de naissance.";
    return false;
  }
  if (document.getElementById("quantity").value == "") {
    document.getElementById("quantityError").innerHTML =
      "Veuillez choisir une valeur numérique.";
    return false;
  }
  if (document.getElementById("checkbox1").value == "") {
    document.getElementById("checkbox1Error").innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
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
