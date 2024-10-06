function HomepagAnimation()
{
    gsap.set(".slides",{scale: [5]})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger : ".home",
        start: "top top",
        end: "bottom bottom",
        scrub:1
    },})
tl.to(".video" ,{
        '--Clipy': " 0%",
        ease: Power2,
        duration: 2
    }, 'a')
 .to(".slides",{
    scale : 1,
    ease : Power2,
    duration: 2
 }, 'a')   
.to(".rgt", {
    x: "-20%",
    stagger : 0.02,
    ease : Power2
}, 'b')
.to(".lft", {
    x: "20%",
    stagger : 0.02,
    ease : Power2
}, 'b')

}
HomepagAnimation();

function RealAnimation()
{
    gsap.to(".slide" ,  {
        scrollTrigger: {
            trigger : ".slider",
            start: "top top",
            end: "bottom left",
            
            scrub:2
        },
        x: "-300%",
        ease: Power2
    })
}

RealAnimation();