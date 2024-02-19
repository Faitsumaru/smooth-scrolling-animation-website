gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) { //smooth scroll w/ no touch using devices
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    
gsap.fromTo('.hero', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero',
        start: 'center',
        end: 'bottom',
        scrub: true
    }
})

let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')

itemsLeft.forEach(item => {
    gsap.fromTo(item, { x: -100, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-750',
            end: '-150',
            scrub: true,
        }
    })
})


let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

itemsRight.forEach(item => {
    gsap.fromTo(item, { x: 100, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-750',
            end: '-150',
            scrub: true,
        }
    })
})


}