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

// DOM Elements//////
//(page du formulaire)
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");

// constante spanClose (représente .close) pour fermer la modale (X)
const closeModalBtn = document.querySelectorAll(".close");
const form = document.getElementById("formulaire");
const end = document.querySelector(".btn-end");
const modalBody = document.querySelector(".modal-body");
const fermer = document.getElementById("end");

//(btn je m'inscris) + click
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// et je ferme la modal avec (x)
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

//recupération des données du formulaire
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const loc = document.getElementById("location6");
const condition = document.getElementById("checkbox1");

//display des modals
function closeModal() {
  modalbg.style.display = "none";
}

function launchModal() {
  modalbg.style.display = "block";
}

// modal formulaire  1) si le formulaire est bien écrit il peut etre envoyé
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  if (
    validFirst() == true &&
    validLast() == true &&
    validEmail() == true &&
    validBirth() == true &&
    validQuantity() == true &&
    validLocation() == true &&
    validCondition() == true
  ) {
    sendForm();
    sendModalMessage();
  }
})

// 2) pour que le false passe en true il faut indiquer l'ensemble des inputs de la fonction validate form
function validate() { 
  validFirst();
  validLast();
  validEmail();
  validBirth();
  validQuantity();
  validLocation();
  validCondition();
}

function validFirst() {
  if (!first.value || first.value.length <= 2) {
    setErreur(first, "Veuillez saisir au moins 2 caractères.", "firstError");
    return false;
  } else {
    setValid(first);
    return true;
  }
}

function validLast() {
  if (!last.value || last.value.length <= 2) {
    setErreur(last, "Veuillez saisir au moins 2 caractères.", "lastError");
    return false;
  } else {
    setValid(last);
    return true;
  }
}

function validEmail() {
  let mailCaractere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex email
  if (!email.value) {
    setErreur(email, "Veuillez saisir une adresse email valide.", "emailError");
    return false;
  } else {
    setValid(email);
    return true;
  }
}

function validBirth() {
  if (!birthdate.value) {
    // champ vide
    setErreur(birthdate, "Veuillez renseigner votre date de naissance.", "birthdateError");
    return false;
  } else {
    setValid(birthdate);
    return true;
  }
}

function validQuantity() {
  if (!quantity.value) {
    setErreur(quantity, "Veuillez renseigner une valeur numérique.", "quantityError");
    return false;
  } else {
    setValid(quantity);
    return true;
  }
}

// attention pour les deux conditions differentes//
//pour les radio (location de 1 à 6), il faut une seule validation.
function validLocation() {
  let radioCheck = document.querySelector('input[name = "location"]:checked');
  if (radioCheck != null) {
    setValidCheckbox(loc);
    return true;
  } else {
    setErreurCheckbox(loc, "Veuillez choisir une ville", "locationError");
    return false;
  }
}

// pour les CGVs il faut indiquer une valeur inverse (car "checked")//

function validCondition() {
  if (condition.checked) {
    setValidCheckbox(condition);
    return true;
  } else {
    setErreurCheckbox(
      condition,
      "Veuillez vérifier que vous avez accepté les termes et conditions", "conditionError"
    );
    return false;
  }
}

// pour first, last, email, birthdate et quantity

function setErreur(input, message, idError) {
  //input est déclaré mais il n'a pas de valeur
  const error = document.getElementById(idError);
  console.log(error);
  error.innerText = message;
  input.className = "text-control input-error";
  }

function setValid(input) {
  const error = document.querySelector(".error");
  input.className = "text-control input-valid";
 }

 function setErreurCheckbox(input, message, idError){
   const error = document.getElementById(idError);
   error.innerText = message;
   input.className = "checkbox-input input-error";
 }

 function setValidCheckbox(input) {
   const error = document.querySelector(".error");
   input.className = "checkbox-input input-valid";
 }

//valiDer le champs des saisies avec confirmation de saisie "message"
function sendForm() {
  modalBody.classList.add("not-active");
}

function sendModalMessage() {
  modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
  modalBody.style.height = "600px";
  modalBody.style.fontSize = "30px";
  modalBody.style.textAlign = "center";
  modalBody.style.paddingTop = "250px";
  modalBody.style.paddingLeft = "100px";
  modalBody.style.paddingRight = "100px";
  fermer.style.display = "block";
  fermer.addEventListener("click", closeModal);
}



