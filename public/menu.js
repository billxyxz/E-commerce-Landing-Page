const navLinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("translate-x-full");
})

navLinks.addEventListener("click", () =>{
    navLinks.classList.add("translate-x-full");
})

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline();
tl
.from(".hero-img", {xPercent: 100, opacity: 0, duration: 1, scale: .7})
.from(".hero-text", {opacity: 0, duration: 1}, "-=.5")

gsap.from( ".item", 
    {
     scrollTrigger: {
        trigger: "#shop",
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "restart reverse restart restart"
     },
    opacity: 0,
    duration: 1, 
    ease: "power1.out",
    stagger: .5
 }

)
