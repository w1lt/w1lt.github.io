/** @format */

const emoji = document.getElementById("emoji");

function darkMode() {
  localStorage.setItem("dark-mode", true);
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    emoji.innerHTML = "🌞";
    localStorage.setItem("dark-mode", false);
  } else {
    document.body.classList.add("dark-mode");
    emoji.innerHTML = "🌚";
    console.log("dark mode");
  }
}

if (localStorage.getItem("dark-mode")) {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    emoji.innerHTML = "🌚";
  } else {
    document.body.classList.remove("dark-mode");
    emoji.innerHTML = "🌞";
  }
}
