// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});






let cursor = document.querySelector("#cursor")
let body = document.querySelector("body")

document.addEventListener("mousemove",function(move){
   cursor.style.left = move.x + "px"
   cursor.style.top = move.y + "px"
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  
});




// Select the SAHIL text
const sahil = document.querySelector(".sahil");

gsap.from(".sahil", {
  y: -150,          // drops from top
  opacity: 0,       // fades in
  duration: 1.5,     // animation time
});

const navbar = document.querySelector(".navbar");

gsap.from(".navbar", {
  y: -100,          // drops from top
  opacity: 0,       // fades in
  duration: 1, 
    // animation time
});

gsap.from(".page1-bottom div", {
  y: 200,           // start from below
  opacity: 0,       // fade in
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,     // one after another
          // wait until SAHIL starts dropping
});












