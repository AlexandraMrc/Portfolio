function showPassword() {
  let inputPassword = document.getElementById("inputPass");
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}
