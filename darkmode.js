/** @format */
function darkMode() {
  localStorage.setItem("dark-mode", true);
  console.log("dark mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", false);
  } else {
    document.body.classList.add("dark-mode");
  }
}

if (localStorage.getItem("dark-mode")) {
  console.log("read from memory");
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
