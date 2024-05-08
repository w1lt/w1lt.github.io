/** @format */

const emoji = document.getElementById("emoji");
function darkMode() {
  document.getElementById("particles-js").remove();
  const newParticles = document.createElement("div");
  newParticles.id = "particles-js";
  document.body.appendChild(newParticles);

  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    emoji.innerHTML = "☀";
    localStorage.setItem("dark-mode", "false");
    initParticles("#ffffff");
  } else {
    document.body.classList.add("dark-mode");
    emoji.innerHTML = "☾";
    localStorage.setItem("dark-mode", "true");
    initParticles("#000000");
    console.log("dark mode");
  }
}

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  emoji.innerHTML = "☾";
  initParticles("#000000");
} else {
  document.body.classList.remove("dark-mode");
  emoji.innerHTML = "☀";
  initParticles("#ffffff");
}
