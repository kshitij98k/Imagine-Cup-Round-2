


  
  let query1 = document.getElementById('search').value;
  console.log(query1)


gsap.to('.build_overlay', {duration: 1.5, ease: "power4.inOut", delay: 3, height: "0vh"})
gsap.to('.head1', {duration: 1.5, ease: "power4.out", delay: 2, opacity: 0, display: "none"})


let visualizebtn = document.querySelector('.btnn');
let visuals = new TimelineMax({paused: true, reversed: true});
       
visuals
.to('input', {duration: 1.5, ease: "power4.inOut", width: "0vw", opacity: 0}, 0.5)
.to('button', {duration: 1.5, x: "46vw", y: "21vw", ease: "power4.inOut"}, 0.5)
.to('model-viewer', {delay: 1.5, filter: "blur(0px)"}, 0.5)



       
visualizebtn.addEventListener("click", () => {
visuals.reversed() ? visuals.play() : visuals.reverse();
})  

// Camera Options

