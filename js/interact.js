

if ( $(window).width() > 768) {

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);




    //Add your javascript for large screens here
    }
    else {
    //Add your javascript for small screens here
    }

    const noise = () => {
        let canvas, ctx;
    
        let wWidth, wHeight;
    
        let noiseData = [];
        let frame = 0;
    
        let loopTimeout;
    
    
        // Create Noise
        const createNoise = () => {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;
    
            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000;
                }
            }
    
            noiseData.push(idata);
        };
    
    
        // Play Noise
        const paintNoise = () => {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }
    
            ctx.putImageData(noiseData[frame], 0, 0);
        };
    
    
        // Loop
        const loop = () => {
            paintNoise(frame);
    
            loopTimeout = window.setTimeout(() => {
                window.requestAnimationFrame(loop);
            }, (1000 / 25));
        };
    
    
        // Setup
        const setup = () => {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;
    
            canvas.width = wWidth;
            canvas.height = wHeight;
    
            for (let i = 0; i < 10; i++) {
                createNoise();
            }
    
            loop();
        };
    
    
        // Reset
        let resizeThrottle;
        const reset = () => {
            window.addEventListener('resize', () => {
                window.clearTimeout(resizeThrottle);
    
                resizeThrottle = window.setTimeout(() => {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        };
    
    
        // Init
        const init = (() => {
            canvas = document.getElementById('noise');
            ctx = canvas.getContext('2d');
    
            setup();
        })();
    };
    
    noise();
    
    let hamburger = document.querySelector('.logon');
    let tl = new TimelineMax({paused: true, reversed: true});
           
    tl
    .to('.overlay_menu', {width: "50%", duration: 2, ease: "power4.inOut"})
    .to('.logon', {filter: "invert(1)", duration: 1}, 0.5)
    .to('.wrapper1', {pointerEvents: "none"})
    .from('.overlay_item', {clipPath: 'inset(0 0 100% 0)', duration: 1, ease: "power4.out", y: 90, stagger: 0.1}, 1.5)
           
    hamburger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
    }) 

    

// Build Animation    

let buildbtn = document.querySelector('.build');
let built = new TimelineMax({paused: true});
       
built
.to('.overlay_menu', {width: "100%", duration: 2, ease: "power4.inOut"}, 1)
.to('.visualize', {display: "none", opacity: 0, ease: "power4.out", duration: 1.5}, 0.5)
.to('.logon', {opacity: 0, duration: 1.5}, 1)
.to('.rector', {opacity: 0, duration: 1.5}, 1)


       
buildbtn.addEventListener("click", () => {
built.play();
})  

let buildbtn2 = document.querySelector('.visualize');
let built2 = new TimelineMax({paused: true});
       
built2
.to('.overlay_menu', {width: "100%", duration: 2, ease: "power4.inOut"}, 1)
.to('.build', {display: "none", opacity: 0, ease: "power4.out", duration: 1.5}, 0.5)
.to('.logon', {opacity: 0, duration: 1.5}, 1)
.to('.rector', {opacity: 0, duration: 1.5}, 1)


       
buildbtn2.addEventListener("click", () => {
built2.play();
})  

// Intervals

    function BuildInterval(){
        var delay = 4000;
        
        setTimeout(function(){
         window.location = "pages/Build/build.html";
        },delay);
        
       }

       function BuildInterval2(){
        var delay = 4000;
        
        setTimeout(function(){
         window.location = "pages/Visualize/visualize.html";
        },delay);
        
       }   