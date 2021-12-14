const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const row1 = document.querySelector(".row1")
const row3 = document.querySelector(".row3")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    row1.classList.toggle("active");
    row3.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    row1.classList.remove("active");
    row3.classList.remove("active");
}