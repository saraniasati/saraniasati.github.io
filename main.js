const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
// const contactButton = document.querySelector("[data-contact-button]")
// const navItemContact = document.querySelectorAll(".nav-item-contact")

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// contactButton.addEventListener("click", () => {
//     // event.preventDefault();
//     navItemContact.forEach(item => item.style.display = "block")
// })