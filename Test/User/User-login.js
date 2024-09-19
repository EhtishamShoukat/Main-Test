document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const showPasswordText = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordText.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      showPasswordText.textContent = "Show";
    }
  });

document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error");

  const validEmail = "user";
  const validPassword = "user@123";

  if (email === validEmail && password === validPassword) {
    setTimeout(() => {
      window.location.href = "./User-page/user-page.html";
    }, 3000);
    errorMessage.textContent = "User Login Successfully";
    errorMessage.style.color = "green";
  } else {
    errorMessage.textContent = "Invalid email or password.";
    errorMessage.style.color = "red";
  }
});
