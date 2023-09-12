/** @format */

function darkMode() {
  localStorage.setItem("dark-mode", this.checked);
  var element = document.body;
  element.classList.toggle("dark-mode");
}

if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
}
