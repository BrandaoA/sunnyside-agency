
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".main-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
})