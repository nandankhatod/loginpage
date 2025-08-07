function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Dummy validation (replace with real logic)
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    message.textContent = "";
    return true;
  } else {
    message.textContent = "Invalid credentials.";
    return false;
  }
}
