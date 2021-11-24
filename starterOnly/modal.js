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

// validation du formulaire 
const form = document.body.querySelector("form");

form.addEventListener(
  "submit",
  formValidation
);

function formValidation(event) {
  event.preventDefault();

  const [input] = form.elements;
  console.log(form.elements, input);
}




// fermer via fermer
document
  .querySelector(".click-end")
  .addEventListener("click", function (close) {
    clickEnd.style.display = "none";
    modalbg.style.display = "none";
  });