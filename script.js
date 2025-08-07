function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (user === "admin" && pass === "1234") {
    alert("Login successful! (But not secure!)");
    message.textContent = "";
    return false;
  } else {
    message.textContent = "Invalid username or password.";
    return false;
  }
}