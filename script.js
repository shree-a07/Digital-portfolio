// Show pages dynamically
function showPage(pageId) {
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

// Toggle Dark/Light Mode
function toggleMode() {
  document.body.classList.toggle("light-mode");
  const btn = document.getElementById("modeBtn");
  if (document.body.classList.contains("light-mode")) {
    btn.textContent = "🌙 Dark";
  } else {
    btn.textContent = "☀️ Light";
  }
}