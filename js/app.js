gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) { //smooth scroll w/ no touch using devices
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })
}

gsap.fromTo('.hero', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero',
        start: 'center',
        end: 'bottom',
        scrub: true
    }
})