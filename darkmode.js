/** @format */

const emoji = document.getElementById("emoji");
function darkMode() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    emoji.innerHTML = "☀";
    localStorage.setItem("dark-mode", "false");
  } else {
    document.body.classList.add("dark-mode");
    emoji.innerHTML = "☾";
    localStorage.setItem("dark-mode", "true");
    console.log("dark mode");
  }
}

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  emoji.innerHTML = "☾";
} else {
  document.body.classList.remove("dark-mode");
  emoji.innerHTML = "☀";
}
initParticles();
