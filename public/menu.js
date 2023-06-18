//Getting all the required HTML elements to the DOM.
const navLinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");
const openCartBtn = document.querySelector(".open-cart");
const addItemBtns = document.querySelectorAll(".add-item");

const cartContainer = document.querySelector(".cart-container");
const cartContentsCont = document.querySelector(".cart-contents");
const totalTag = document.querySelector(".total") 
const cartCloseBtn = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("translate-x-full");
})

navLinks.addEventListener("click", () =>{
    navLinks.classList.add("translate-x-full");
})

//openCartBtn functionality
openCartBtn.addEventListener("click", showCart);

function showCart(){
    cartContainer.classList.remove("translate-x-full")
}



//cartCloseBtn functionaility
cartCloseBtn.addEventListener("click", closeCart);

function closeCart(){
    cartContainer.classList.add("translate-x-full");
}



//adding items to cart functionality
addItemBtns.forEach((addItemBtn) => {
    addItemBtn.addEventListener("click", addItem)
})

function addItem(){
    const parentEl = this.parentElement.parentElement.parentElement;
    const productImgSrc = parentEl.querySelector("img").src
    const link = productImgSrc.replace("http://127.0.0.1:5500/public/", "");
    const priceTag = parentEl.querySelector(".price-tag").textContent;
    const productName = parentEl.querySelector(".product-name").textContent;
    console.log(productName)
    const productBox = document.createElement("div")
    productBox.classList = "flex justify-between w-full p-4";
    productBox.innerHTML = `<div class="w-20 h-20 bg-slate-100 p-1 mr-4">
    <img src=${link} alt="" class="cart-img w-full h-full object-cover object-center">
</div>
<div class="flex-1 flex flex-col gap-[2px]"><!--Detail Box-->
    <h3 class="cart-product-title text-[17px] font-medium">${productName}</h3>
    <div class="cart-price font-medium text-base">${priceTag}</div>
    <input type="number" value="1" class="cart-quantity w-[38px] p-1 border-2 border-black text-[16px] font-medium">
</div>
<!--Remove Cart-->
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete w-6 h-6 self-center text-red-600
font-extrabold justify-self-end">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>`;
  cartContentsCont.appendChild(productBox);

  function totalCost(){
    const costs = document.querySelectorAll(".cart-price")
    const quantity = document.querySelector(".qtys");
    let costArr = [];
    let total = 0
    costs.forEach((cost) => {
        let amt = Number.parseInt(cost.textContent)
        costArr.push(amt);
    })
    quantity.textContent = costArr.length
    if(costArr){
        total = costArr.reduce((acc, curr) =>  {
            return acc + curr}, 0)
    }
    return total
  }

  const itemDeleteBtns = document.querySelectorAll(".delete");

  //itemDeleteBtn Functionality
  itemDeleteBtns.forEach((itemDeleteBtn) => {
    itemDeleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove()
        totalTag.textContent = totalCost()
    })
  });

  if(cartContentsCont.innerHTML){
    totalTag.textContent = totalCost()
  }
    
};


//Gsap ---------------------//////////////////////***
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
