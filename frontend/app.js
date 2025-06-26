document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:9090/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const token = await response.text();
      console.log("✅ Connexion réussie. Token :", token);
      document.getElementById("message").textContent = "Connexion réussie !";

      // ✅ Stocke le token pour les futures requêtes protégées
      localStorage.setItem("token", token);

      // ✅ Redirection vers la page des vidéos
      window.location.href = "videos.html";
    } else {
      const errorText = await response.text();
      throw new Error(errorText || "Échec de la connexion");
    }
  } catch (err) {
    console.error("❌ Erreur :", err.message);
    document.getElementById("message").textContent = err.message;
  }
});
