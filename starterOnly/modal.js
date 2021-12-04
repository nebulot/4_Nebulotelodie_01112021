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

//recupération des données du formulaire
const first = document.getElementById("first");
const firstErr = document.getElementById("firstError");
const last = document.getElementById("last");
const lastErr = document.getElementById("lastError");
const email = document.getElementById("email");
const emailErr = document.getElementById("emailError");
const birth = document.getElementById("birthdate");
const birthErr = document.getElementById("birthdateError");
const quantity = document.getElementById("quantity");
const quantityErr = document.getElementById("quantityError");
const LocErr = document.getElementById("locationError");
const Loc0 = document.getElementById("location0");
const Loc1 = document.getElementById("location1");
const Loc2 = document.getElementById("location2");
const Loc3 = document.getElementById("location3");
const Loc4 = document.getElementById("location4");
const Loc5 = document.getElementById("location5");
const Loc6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const conditionErr = document.getElementById("conditionError");
const reserver = document.getElementById("confirmation");
const end = document.getElementById("end");
const formulaire = document.getElementById("formulaire");
const modalBody = document.querySelector(".modal-body");

// regex email
let mailCaractere = /[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i;

// Fonctions test true / false
document.addEventListener('submit', validate);
function validate(e) {
  if (first.value === "" || first.value.length >= 2) {
    //vide ou sup 2
    firstErr.innerHTML = "Veuillez saisir au moins 2 caractères.";
    firstErr.style.fontSize = "12px";
    firstErr.style.color = "red";
  } else {
    firstErr.innerHTML = "";
    // Pas de message d'erreur, nombre de caractères suffisant
  }

  if (last.value === "" || last.value.length >= 2) {
    lastErr.innerHTML = "Veuillez saisir au moins 2 caractères.";
    lastErr.style.fontSize = "12px";
    lastErr.style.color = "red";
  } else {
    lastErr.innerHTML = "";
  }

  if (mailCaractere.test(email.value)) {
    //voir regex
    emailErr.innerHTML = "";
  } else {
    emailErr.innerHTML = "Veuillez saisir une adresse email valide.";
    emailErr.style.fontSize = "12px";
    emailErr.style.color = "red";
  }

  if (birth.value === "") {
    // champ vide
    birthErr.innerHTML = "Veuillez renseigner votre date de naissance.";
    birthErr.style.fontSize = "12px";
    birthErr.style.color = "red";
  } else {
    birthErr.innerHTML = " ";
  }

  if (quantityErr.value === "") {
    quantityErr.innerHTML = "Veuillez renseigner une valeur numérique.";
    quantityErr.style.fontSize = "12px";
    quantityErr.style.color = "red";
  } else {
    quantityErr.innerHTML = "";
  }

  if (
    Loc1.checked ||
    Loc2.checked ||
    Loc3.checked ||
    Loc4.checked ||
    Loc5.checked ||
    Loc6.checked
  ) {
    LocErr.innerHTML = "";
  } else {
    LocErr.innerHTML = "Veuillez choisir une ville.";
    LocErr.style.fontSize = "12px";
    LocErr.style.color = "red";
  }

  if (checkbox1.checked) {
    conditionErr.innerHTML = "";
  } else {
    conditionErr.innerHTML = " Veuillez acceptez les termes et conditions.";
    conditionErr.style.fontSize = "12px";
    conditionErr.style.color = "red";
  }
  e.preventDefault();
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
  const modalbgEnd = document.querySelector("#end");
  modalbgEnd.style.display = "flex";
}

function closeModalEnd() {
  const modalbgEnd = document.querySelector("#end");
  modalbgEnd.style.display = "none";
}

// valider le champs des saisies avec confirmation de saisie
formulaire.addEventListener("click", function () {
  if (
    first.value &&
    last.value &&
    birth.value &&
    email.value &&
    quantity.value &&
    (Loc1.checked ||
      Loc2.checked ||
      Loc3.checked ||
      Loc4.checked ||
      Loc5.checked ||
      Loc6.checked) &&
    checkbox1.checked === true
  ) {
    modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
    modalBody.style.height = "600px";
    modalBody.style.paddingTop = "250px";
    modalBody.style.paddingLeft = "100px";
    modalBody.style.paddingRight = "100px";
    end.style.display = "block";
    end.addEventListener("click", closeModal);
  }
})


