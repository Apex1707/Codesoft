var tl=gsap.timeline()

function page1Animation(){
    tl.from("#left-nav h1",{
        y:-20,
        delay:0.2,
        duration:1,
        opacity:0
    })
    tl.from("#right-nav ul a",{
        y:-20,
        delay:0.2,
        duration:0.5,
        opacity:0,
        stagger:0.15
    })
    
    tl.from(".heads",{
        x:-50,
        stagger:0.15,
        
        duration:0.4,
        opacity:0
    })
}
page1Animation()