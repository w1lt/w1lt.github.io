/** @format */

const emoji = document.getElementById("emoji");
function darkMode() {
  if (document.body.classList.contains("dark-mode")) {
    enableDarkMode();
    localStorage.setItem("dark-mode", "false");
  } else {
    disableDarkMode();
    localStorage.setItem("dark-mode", "true");
  }
}

if (localStorage.getItem("dark-mode") === "true") {
  disableDarkMode();
} else {
  enableDarkMode();
}
initParticles();

function enableDarkMode() {
  document.body.classList.remove("dark-mode");
  emoji.innerHTML = "☀";
}

function disableDarkMode() {
  document.body.classList.add("dark-mode");
  emoji.innerHTML = "☾";
}
