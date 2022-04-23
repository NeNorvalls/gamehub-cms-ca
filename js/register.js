function validateForm() {
const fullname = document.getElementById("fname").value;
const username = document.getElementById("user").value;
const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;
const repeatPassword = document.getElementById("password")
const errorMessage = document.getElementById("errorMessage");
const form = document.getElementById("contactForm").reset();

errorMessage.style.display = "block";

var error;
if(fullname.length < 1) {
  error = "Please enter your full name";
  errorMessage.innerHTML = error;
  return false;
}

if(username.length < 1) {
  error = "Please enter your user name";
  errorMessage.innerHTML = error;
  return false;
}

if(email.indexOf("@") === -1 || email.length < 6) {
  error = "Please enter a valid email";
  errorMessage.innerHTML = error;
  return false;
}

if(password.length < 5) {
  error = "Please enter password";
  errorMessage.innerHTML = error;
  return false;
}

if(repeatPassword.length < 5) {
  error = "Please re-enter password";
  errorMessage.innerHTML = error;
  return false;
}

alert("Form submitted successfully!");
window.location.href = "login.html";
return true;


}
