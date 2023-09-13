// declare variables
const form = document.querySelector("[data-js-form]"),
  button = document.querySelector("[data-js-button]"),
  inputEmail = document.querySelector("[data-js-input]"),
  errorMessage = document.querySelector("[data-js-error]"),
  successMessage = document.querySelector("[data-js-success]");

// error ans sucess state messages
const errorStatement = "Whoops! It looks like you forgot to add your email",
  inputError = "Please enter your email address",
  successState =
    "Thank you for subscribing! We will keep you updated on the latest news and more.";

// add event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputEmail.value.trim() === "") {
    form.classList.add("error");
    errorMessage.textContent = errorStatement;
  } else if (!inputEmail.value.match(regEx) && inputEmail.value.length !== 0) {
    errorMessage.textContent = inputError;
  } else {
    form.classList.remove("error");
    inputEmail.value = "";
    inputEmail.style.borderColor = "green";
    successMessage.textContent = successState;
    errorMessage.style.display = "none";
  }
});
