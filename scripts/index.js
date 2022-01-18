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


// const burger = document.querySelector("#burger-menu");
// const ul = document.querySelector("nav ul");
// const nav = document.querySelector("nav");

// burger.addEventListener("click", () => {
//   ul.classList.toggle("show");
// });

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );
//for sticky scrollbar on scroll

// window.onscroll = function() {scrollNavBar()};

// const navbar = document.getElementById("navbar");
// // const herosection = document.getElementById("herosection")

// const sticky = navbar.offsetTop;

// function scrollNavBar() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }

// window.onscroll = function() {heroPadding()}

// function heroPadding() {
//   if (sticky) {
//     herosection.classList.add("herosection")
//   } else {
//     herosection.classList.remove("herosection")
//   }
// }

  //contact form

  // <form onsubmit="return false"></form>

  // document.addEventListener("DomContentLoaded", function (){
  //   fields.firstname = document.getElementById('firstName');
  //   fields.lastname = document.getElementById('lastName');
  //   fields.phone = document.getElementById('phoneNumber');
  //   fields.email = document.getElementById('email');
  //   fields.userMessage = document.getElementById('userMessage');

  // })