function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
  
    errorMessage.style.display = "block";
  
    var error;
    if(email.indexOf("@") === -1 || email.length < 6) {
      error = "Please enter a valid email";
      errorMessage.innerHTML = error;
      return false;
    }
    if(password.length < 8) {
        error = "Invalid password";
        errorMessage.innerHTML = error;
        return false;
    }
    alert("Login successfully!");
    return true;
}

validateForm();
