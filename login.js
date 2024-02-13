const logoutButton = document.getElementById("logoutButton");
logoutButton.style.visibility = "hidden";

const input = document.getElementById("input-id");
const input2 = document.getElementById("input-id2");
const balanceLogin = document.getElementById("balance-id");
const firstText = document.getElementById("first-text");

const loginbtn = document.getElementById("loginButton");

const popup = document.getElementById("loginwrapper");
popup.style.visibility = "hidden";

const mainWrapper = document.getElementById("all-wrapper");

input.style.visibility = "hidden";
input2.style.visibility = "hidden";
balanceLogin.style.visibility = "hidden";

function openPopup() {
  popup.style.visibility = "visible";
  mainWrapper.style.visibility = "hidden";
}

function closePopup() {
  popup.style.visibility = "hidden";
  mainWrapper.style.visibility = "visible";
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const authenticated = authentication(email, password);

  if (authenticated) {
    closePopup();
    logoutButton.style.visibility = "visible";
    loginbtn.style.visibility = "hidden";
    input.style.visibility = "visible";
    input2.style.visibility = "visible";
    balanceLogin.style.visibility = "visible";
    firstText.style.visibility = "hidden";
  } else {
    alert("Incorrect creditentials");
  }
});

function authentication(email, password) {
  if (email === "admin@gmail.com" && password === "admin") {
    return true;
  } else {
    return false;
  }
}

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function clearFields() {
  emailInput.value = "";
  passwordInput.value = "";
}

logoutButton.addEventListener("click", function () {
  openPopup();
  logoutButton.style.visibility = "hidden";
  balanceLogin.style.visibility = "hidden";
  input.style.visibility = "hidden";
  input2.style.visibility = "hidden";

  clearFields();
});
