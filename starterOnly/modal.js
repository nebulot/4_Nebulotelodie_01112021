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
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("formulaire");
const closeEnd = document.getElementById("end");

//on reprends les formules d'erreurs initiales et ont les supprimes
const formData = document.querySelectorAll(".formData");

//recupération des données du formulaire
const first = document.getElementById("first");
const firstError = document.getElementById("firstError");
const last = document.getElementById("last");
const lastError = document.getElementById("lastError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const birth = document.getElementById("birthdate");
const birthError = document.getElementById("birthdateError");
const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");
const loc = document.getElementById("location");
const locError = document.getElementById("locationError");
const conditions = document.getElementById("checkbox1");
const conditionError = document.getElementById("conditionError");
const modalBody = document.querySelector(".modal-body");
const parti = document.getElementById("submit");

//constante des location 1 à 6 à valider dans le formulaire
const loc1 = document.getElementById ("location1");
const loc2 = document.getElementById ("location2");
const loc3 = document.getElementById ("location3");
const loc4 = document.getElementById ("location4");
const loc5 = document.getElementById ("location5");
const loc6 = document.getElementById ("location6");

//fermer le formulaire de saisie et recuperer les informations
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

function launchModal() {
  modalbg.style.display = "block";
}

closeEnd.style.display = "none";

let formOk = false;

// Fonctions test true / false
form.addEventListener("submit", checkInputs);
first.addEventListener("change", checkInputs);
function checkInputs() {
  if (first.value === "" || first.value.length <= 2) {
    //vide ou sup 2
    firstError.innerHTML = "Veuillez saisir au moins 2 caractères.";
    firstError.style.fontSize = "12px";
    firstError.style.color = "red";
    first.style.borderWidth = "2px";
    first.style.borderColor = "red";
    return formOk = false;

  } else {
    firstError.innerHTML = "";
    first.style = "default";

    // Pas de message d'erreur, nombre de caractères suffisant
  }

  if (last.value === "" || last.value.length <= 2) {
    lastError.innerHTML = "Veuillez saisir au moins 2 caractères.";
    lastError.style.fontSize = "12px";
    lastError.style.color = "red";
    last.style.borderWidth = "2px";
    last.style.borderColor = "red";
    return  formOk = false;

  } else {
    lastError.innerHTML = "";
    last.style = "default";
  }
  //regex email
  let mailCaractere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!mailCaractere.test(email.value)){
    emailError.innerHTML = "Veuillez saisir une adresse email valide.";
    emailError.style.fontSize = "12px";
    emailError.style.color = "red";
    email.style.borderWidth = "2px";
    email.style.borderColor = "red";
    return formOk = false;
  }
   else {
    emailError.innerHTML = "";
    email.style = "default";
  }

  if (birth.value === "") {
    // champ vide
    birthError.innerHTML = "Veuillez renseigner votre date de naissance.";
    birthError.style.fontSize = "12px";
    birthError.style.color = "red";
    birth.style.borderWidth = "2px";
    birth.style.borderColor = "red";
    return formOk = false;
  } else {
    birthError.innerHTML = " ";
    birth.style = "default";
  }

  if (quantityError.value = "" || isNaN(quantity.value)) {
    quantityError.innerHTML = "Veuillez renseigner une valeur numérique.";
    quantityError.style.fontSize = "12px";
    quantityError.style.color = "red";
    quantity.style.borderWidth = "2px";
    quantity.style.borderColor = "red";
    return formOk = false;
  } else {
    quantityError.innerHTML = "";
    quantity.style = "default";
  }

  // attention pour les deux conditions qui suivent "ne pas" = !

  if((loc.checked)||(loc1.checked)||(loc2.checked)||(loc3.checked)||(loc4.checked)||(loc5.checked)||(loc6.checked)){
    locError.innerHTML = "Veuillez choisir une ville.";
    locError.style.color = "red";
    locError.style.fontSize = "10px";
    return formOk = false;
  } else {
    locError.innerHTML = "";
    loc.style = "default";
  }
  
  if (!conditions.checked) {
    conditionError.innerHTML =
      "Veuillez vérifier que vous avez accepté les termes et conditions";
    conditionError.style.color = "red";
    conditionError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    return formOk = false;
  } else {
    conditionError.innerHTML = "";
    conditions.style = "default";
  }
  return (formOk = true);
}

//valiser le champs des saisies avec confirmation de saisie
function validate() {
    let form = document.getElementById("formulaire");
  /*form.preventDefault();*/

  if (formOk === true) {
    modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
    modalBody.style.height = "600px";
    modalBody.style.fontSize = "30px";
    modalBody.style.textAlign = "center";
    modalBody.style.paddingTop = "250px";
    modalBody.style.paddingLeft = "100px";
    modalBody.style.paddingRight = "100px";

    closeEnd.style.display = "block";
    submitBtn.style.display = "none";
    closeEnd.addEventListener("click", closeModal);
    return true;
  }
  return false;
}
form.addEventListener("submit", validate);
