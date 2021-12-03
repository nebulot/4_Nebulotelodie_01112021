// DOM Elements
//(page du formulaire)
const modalbg = document.querySelector(".bground");

//(btn je m'inscris) + click
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// constante spanClose (représente .close) pour fermer la modale (X)
const spanCloses = document.querySelectorAll(".close");
spanCloses.forEach((spanClose) =>
  spanClose.addEventListener("click", closeModal)
);

// constante span+click-end pour la modal de fin
const spanClickEnds = document.querySelectorAll(".click-end");
spanClickEnds.forEach((spanClickEnd) =>
  spanClickEnd.addEventListener("click", closeModalEnd)
);

//on reprends les formules d'erreurs initiales et ont les supprimes
const formData = document.querySelectorAll(".formData");
formData.forEach((form) => {
  form.addEventListener(
    "invalid",
    function (e) {
      e.preventDefault(); //retire la bulle d'erreur
    },
    true
  );
});



// Fonctions test true / false
function validateForm() {
  let estValide = true;

  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let location = document.getElementById("location").value;
  let checkbox1 = document.getElementById("checkbox1").value;

  if ((first.length, last.length >= 2)) {
    document.getElementById("firstError", "lastError").innerHTML =
      "Veuillez saisir au minimum 2 caractères dans le champ.";
        estValide = false;
  } else {
    document.getElementById("firstError", "lastError").innerHTML = "";
    }
 

  if ((email(value) == falseemail)) {
    document.getElementById("emailError").innerHTML =
      "Veuillez saisir une adresse email valide.";
    estValide = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if ((birthdate.length <= 2 || dateBirthdate > today)) {
    document.getElementById("birthdateError").innerHTML =
      "Veuillez saisir votre date de naissance.";
    estValide = false;
  } else {
    document.getElementById("birthdateError").innerHTML = "";
  }

  if (quantity) {
    document.getElementById("quantityError").innerHTML =
      "Veuillez choisir une valeur numérique.";
    estValide = false;
  } else {
    document.getElementById("quantityError").innerHTML = "";
  }
  if (location) {
    document.getElementById("locationError").innerHTML =
      "Veuillez sélectionner une ville.";
    estValide = false;
  } else {
    document.getElementById("locationError").innerHTML = "";
  }
  if (checkbox1) {
    document.getElementById("checkbox1Error").innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    estValide = false;
  } else {
    document.getElementById("checkbox1Error").innerHTML = "";
  }

  if (!estValide) {
    // le ! indique l'inverse si ce n'est pas valide
    //on bloque le formulaire
    e.preventDefault();
  }
}

//fermer le formulaire de saisie et recuperer les informations
function closeModal() {
  modalbg.style.display = "none";
}
function launchModal() {
  modalbg.style.display = "block";
}

// afficher et fermer la modal de fin :
function launchModalEnd() {
  const modalbgEnd = document.querySelector("#bgroundEnd");
  modalbgEnd.style.display = "flex";
}

function closeModalEnd() {
  const modalbgEnd = document.querySelector("#bgroundEnd");
  modalbgEnd.style.display = "none";
}

//                           RESPONSIVE                //
// la class responsive est rajouté à la class initiale
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

//fait disparaitre les erreurs pré enregistrer
function supprimeError(errorId) {
  const elementError = document.querySelector(errorId);
  elementError.style.visibility = "hidden";
}

function afficheError(errorId) {
  const elementError = document.querySelector(errorId);
  elementError.style.visibility = "visible";
}
