gsap.from('.loading', {duration: 1.5, height: "100vh", ease: "power4.inOut", delay: 2})
gsap.from('.loading h1', {duration: 1.5, opacity: 1})


let page1 = document.querySelector('.set1');
let animein = new TimelineMax({paused: true});

animein
.to('.loading', {duration: 1.5, ease: "power4.out", height: "100vh"})
.to('.loading h1', {duration: 1, opacity: 1, display: "block"})



page1.addEventListener("click", () => {
 animein.play();
})


let page2 = document.querySelector('.set2');
let animein2 = new TimelineMax({paused: true});

animein2
.to('.loading', {duration: 1.5, ease: "power4.out", height: "100vh"})
.to('.loading h1', {duration: 1, opacity: 1, display: "block"})



page2.addEventListener("click", () => {
 animein2.play();
})




function Interval1(){
    var delay = 4000;
    
    setTimeout(function(){
     window.location = "set 1 pos pages/set1pos.html";
    },delay);
    
   }
  
  function Interval2(){
    var delay = 4000;
    
    setTimeout(function(){
     window.location = "set 2 pos pages/set2pos.html";
    },delay);
    
   }