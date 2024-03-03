const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const currentYear = document.getElementById("currentYear").innerHTML = new Date().getFullYear();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

if (theme === "dark") document.body.classList.add("dark");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
  });

refresh.addEventListener("click", () => {
  window.location.reload();
});


