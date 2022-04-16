function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const message = document.getElementById("message").value;
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.style.display = "block";

  var error;
  if(name.length < 1) {
    error = "Please enter your full name";
    errorMessage.innerHTML = error;
    return false;
  }
  if(email.indexOf("@") === -1 || email.length < 6) {
    error = "Please enter a valid email";
    errorMessage.innerHTML = error;
    return false;
  }
  if(address.length < 5) {
    error = "Please enter a valid address";
    errorMessage.innerHTML = error;
    return false;
  }
  if(message.length <= 20) {
    error = "Please enter more than 20 characters";
    errorMessage.innerHTML = error;
    return false;
  }
  alert("Form submitted successfully!");
  return true;

}