// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


// light / dark mode -for future dev

// let themeToggler = document.getElementById('theme-toggler');

// themeToggler.onclick = () => {
//   themeToggler.classList.toggle('fa-sun');

//   if (themeToggler.classList.contains('fa-sun')) {
//     document.body.classList.add('light-active');
//   } else {
//     document.body.classList.remove('light-active');
//   }
// };




