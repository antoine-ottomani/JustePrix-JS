let userInput = document.querySelector("#btnChoice");
let nbTry = document.querySelector(".nb-try");

//! Nombre de coups pour deviner le nombre
let i = 3;

//! On injecte le nb de coup dans le html
nbTry.textContent = i;

//! Génère un nb aléatoire entre 0 et 10
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

//! Au clic sur le bouton 'jouer'
userInput.addEventListener("click", () => {
  let userChoice = Number(prompt("Entrer un chiffre"));
  console.log(userChoice);

  while (i >= 1) {
    if (userChoice < randomNumber) {
      nbTry.innerHTML = i--;
      //! Création de la div d'affichage
      element = document.createElement("div");
      document.querySelector("section").appendChild(element).classList.add("block");
      element.innerHTML = "C'est plus grand !";
      break;
    } else if (userChoice > randomNumber) {
      nbTry.innerHTML = i--;
      //! Création de la div d'affichage
      element = document.createElement("div");
      document.querySelector("section").appendChild(element).classList.add("block");
      element.innerHTML = "C'est plus petit !";

      break;
    } else {
      //! Création de la div d'affichage
      element = document.createElement("div");
      document.querySelector("section").appendChild(element).classList.add("win");
      element.innerHTML = "Bravo tu as gagné en " + " coups !. Le chiffre à deviner était bien " + randomNumber;
      break;
    }
  }
});
