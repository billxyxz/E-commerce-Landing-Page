const navLinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("translate-x-full");
})

navLinks.addEventListener("click", () =>{
    navLinks.classList.add("translate-x-full");
})
