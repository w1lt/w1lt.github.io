/** @format */

const emoji = document.getElementById("emoji");

function darkMode() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    emoji.innerHTML = "🌞";
    localStorage.setItem("dark-mode", "false");
    initParticles("#ffffff");
  } else {
    document.body.classList.add("dark-mode");
    emoji.innerHTML = "🌚";
    localStorage.setItem("dark-mode", "true");
    initParticles("#000000");
    console.log("dark mode");
  }
  // Refresh the particles.js instance
  particlesInstance.pJS.fn.vendors.destroypJS();
  particlesInstance = particlesJS("particles-js", particlesConfig);
}

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  emoji.innerHTML = "🌚";
  initParticles("#000000");
} else if (localStorage.getItem("dark-mode") === "false") {
  document.body.classList.remove("dark-mode");
  emoji.innerHTML = "🌞";
  initParticles("#ffffff");
}
