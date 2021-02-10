gsap.from('.loading', {duration: 1.5, height: "100vh", ease: "power4.inOut", delay: 2})
gsap.from('.loading h1', {duration: 1.5, opacity: 1})

// Finish Rendering 

let page1 = document.querySelector('.finish');
let animein = new TimelineMax({paused: true});

animein
.to('.finisher', {ease: "power4.out", width: "100%", duration: 1.5, yoyo: true, repeat: 1, repeatDelay: 5},0.5)
.to('.finisher h1 div', {opacity: 1, duration: 1.5, yoyo: true, repeat: 1, repeatDelay: 3}, 0.8)
.to('.toolbar', {opacity: 0, display: "none", pointerEvents: "none"}, 1.5)
.to('model-viewer', {width: "100%"}, 1.5)
.to('.nav-bar', {width: "100%"}, 1.5)
.to('.finish', {opacity: 0, display: "none", pointerEvents: "none"}, 1.5)



page1.addEventListener("click", () => {
 animein.play();
})


//  Model Rendering 

const modelViewer = document.querySelector("model-viewer");

window.switchSrc = (element, name) => {
  const base = "models/" + name;
  modelViewer.src = base + '.glb';
  modelViewer.poster = base + '.png';
  const slides = document.querySelectorAll(".slide");
  slides.forEach((element) => {element.classList.remove("selected");});
  element.classList.add("selected");
};

document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
  // Keep slider interactions from affecting the XR scene.
  ev.preventDefault();
});