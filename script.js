let tl = gsap.timeline();

tl.from("nav #logo , #navLinks h3, #navButtons h4 , #navButtons button", {
    y: -200,
    delay: .5,
    opacity:0,
    stagger: .2
})

tl.from("main h1", {
    y: 200,
    opacity: 0,
    stagger: .4
})

tl.from("main>img", {
    scale: .5,
    opacity: 0,
    stagger: .4
})

tl.from("main h5", {
    y: 20,
    yoyo: true,
    opacity: 0,
    repeat: -1,
    duration: .7,
})



