


gsap.to('.build_overlay', {duration: 1.5, ease: "power4.inOut", delay: 3, height: "0vh"})
gsap.to('.head1', {duration: 1.5, ease: "power4.out", delay: 2, opacity: 0, display: "none"})

gsap.from('.overlay1', {duration: 1.5, height: "0vh", ease: "power4.inOut"})

// Proceed eVENT 

let page1 = document.querySelector('.cuboid');
let animein = new TimelineMax({paused: true});

animein
.to('.loading', {duration: 1.5, ease: "power4.out", height: "100vh"})
.to('.loading h1', {duration: 1, opacity: 1, display: "block"})



page1.addEventListener("click", () => {
 animein.play();
})

// Proceed eVENT 2

let page2 = document.querySelector('.cube');
let animein2 = new TimelineMax({paused: true});

animein2
.to('.loading', {duration: 1.5, ease: "power4.out", height: "100vh"})
.to('.loading h1', {duration: 1, opacity: 1, display: "block"})



page2.addEventListener("click", () => {
 animein2.play();
})

// Proceed Event 3



// Scene Creation for 3d Models. //

let modelViewer = document.querySelector("model-viewer");

  window.switchSrc = (element, name) => {
    
    let slides = document.querySelectorAll(".slide");
    slides.forEach((element) => {element.classList.remove("selected");});
    element.classList.add("selected");
    
    let base = "build models/overall/" + name;
    modelViewer.src = base + '.glb'
    
  };

  document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
    // Keep slider interactions from affecting the XR scene.
    ev.preventDefault();
  });


// New Barba Transition Setup 

function Interval1(){
  var delay = 4000;
  
  setTimeout(function(){
   window.location = "pages/Tile 1/tile1.html";
  },delay);
  
 }

function Interval2(){
  var delay = 4000;
  
  setTimeout(function(){
   window.location = "pages/Tile 2/tile2.html";
  },delay);
  
 }


