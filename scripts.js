/** @format */

function darkMode() {
  localStorage.setItem("dark-mode", this.checked);
  document.body.classList.toggle("dark-mode");
}

if (localStorage.getItem("dark-mode")) {
  document.body.classList.toggle("dark-mode");
}
