//Etape 1
//Récupérer les éléments ;

const form = document.querySelector("#form");
const username = document.getElementById("username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

//Etape 2
//Evénements ;

form.addEventListener("submit", (event) => {
  //Pour controler avant la soumission => "submit"
  //1er Methode pour empecher la rafraichissement ;
  event.preventDefault();

  /*
  //Choix alternatif pour checkEmpty  ;
  if (username.value === "") {
    username.parentElement.classList = "form-control error";
    console.log("username is empty")
   }
   if (email.value === "") {
     email.parentElement.classList = "form-control error";
     console.log("email is empty");
   }
   if (password.value === "") {
     password.parentElement.classList = "form-control error";
     console.log("password is empty");
   }
   if (confirmPassword.value === "") {
     confirmPassword.parentElement.classList = "form-control error";
     console.log("confirmPassword is empty");
   }*/

  //Etape 3
  //Fonctions

  checkEmpty([username, email, password, confirmPassword]);
  //const checkEmpty = [username, email, password, confirmPassword];

  checkEmail(email);

  checkPasswordLength(password, 6, 10);

  checkPasswordLength(confirmPassword, 6, 10);


  //2nd Methode pour éviter la rafraichissement ;
  //return false;
});

//Etape 4
//Créer les fonctions error, success ;

//Créer une fonction showError ;
const showError = (input, message) => {
  let parentElement = input.parentElement;
  //Ajouter de la classe error ;
  parentElement.classList = "form-control error";

  const small = parentElement.querySelector("small");
  const successIcon = parentElement.querySelectorAll("i")[0];
  const errorIcon = parentElement.querySelectorAll("i")[1];

  errorIcon.style.visibility = "visible";
  successIcon.style.visibility = "hidden";
  small.innerText = message;
};

//Créer une fonction showSuccess ;
const showSuccess = (input) => {
  let parentElement = input.parentElement;
  //Ajouter de la classe success ;
  parentElement.classList = "form-control success";

  const successIcon = parentElement.querySelectorAll("i")[0];
  const errorIcon = parentElement.querySelectorAll("i")[1];

  errorIcon.style.visibility = "hidden";
  successIcon.style.visibility = "visible";
};

//Etape 5
//Tester les fonctions ;

//Tester checkEmpty => si les inputs sont vide;
const checkEmpty = (inputs) => {
  inputs.forEach((input) => {
    if (input.value === "") {
      //element.parentElement.classList =
      //parentElement classList ;
      // "form-control error";

      //Méthode
      showError(input, "Input required");
    } else {
      showSuccess(input);
    }
  });
};

//Tester checkEmail ;
const checkEmail = (email) => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, "Invalid Email");
  }
};

//Tester password + confirmPassword => checkPasswordLength ;
const checkPasswordLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `Password atleast ${min} Character`);
  } else if (input.value.length > max) {
    showError(input, `Password maximum character is ${max}`);
  } else {
    showSuccess(input);
  }
};
