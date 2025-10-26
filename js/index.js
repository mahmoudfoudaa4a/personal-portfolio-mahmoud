let btn = document.getElementById("menu-btn");
let nav = document.querySelector("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});
// ===== Theme Toggle =====
const themeToggle = document.getElementById("theme-toggle");
let darkMode = false;

// شكل الزر الافتراضي
themeToggle.innerHTML = "🌙";

themeToggle.addEventListener("click", () => {
  const darkThemeLink = document.querySelector('link[href="css/themes/dark-theme.css"]');
  
  if (!darkMode) {
    if (!darkThemeLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/themes/dark-theme.css";
      document.head.appendChild(link);
    }
    themeToggle.innerHTML = "☀️";
    darkMode = true;
  } else {
    if (darkThemeLink) darkThemeLink.remove();
    themeToggle.innerHTML = "🌙";
    darkMode = false;
  }
});