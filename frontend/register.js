document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:9090/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const message = document.getElementById("message");

      if (response.ok) {
        message.textContent = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
        message.style.color = "green";
      } else {
        const errorText = await response.text();
        message.textContent = "Erreur : " + errorText;
        message.style.color = "red";
      }

    } catch (err) {
      console.error("Erreur :", err);
      document.getElementById("message").textContent = "Erreur réseau ou serveur.";
    }
  });
});
