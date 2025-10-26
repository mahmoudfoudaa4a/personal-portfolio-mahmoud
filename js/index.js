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

// ====== Contact Form ======
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "Sending...";
  formStatus.style.color = "#ffd700";

  setTimeout(() => {
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "#00ff99";
    contactForm.reset();
  }, 1500);
});