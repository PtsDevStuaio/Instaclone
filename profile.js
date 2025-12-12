// OPEN PANEL
document.querySelector(".settings-btn").addEventListener("click", () => {
  document.getElementById("settingsPanel").style.display = "block";
});

// CLOSE PANEL
document.querySelector(".close-panel").addEventListener("click", () => {
  document.getElementById("settingsPanel").style.display = "none";
});