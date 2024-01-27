function cursorOver() {

    var page1Content = document.getElementById("page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y

        })
    });


    page1Content.addEventListener("mouseenter", function () {

        gsap.to(cursor, {

            scale: 1,
            opacity: 1

        })
    });
    page1Content.addEventListener("mouseleave", function () {

        gsap.to(cursor, {

            scale: 0,
            opacity: 0

        })
    });
}
cursorOver()


function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });








    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locoScroll()


function flowAnimation() {
    gsap.from(".elem h1 ", {

        y: 150,
        stagger: 0.2,
        duration: 1,
        ScrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 47%",
            end: "top 46%",
            markers: true,
            scrub: 2
        }
    })

}
flowAnimation()


function pageFlow() {
    gsap.from("#page4 h2", {

        y: 150,
        stagger: 0.2,
        duration: 1,
        ScrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 47%",
            end: "top 46%",
            markers: true,
            scrub: 2
        }
    })

}
pageFlow()


function mouseMove() {
    var page5 = document.getElementById("page5");
    var mouse = document.querySelector(".mouse");

    page5.addEventListener("mousemove", function (dets) {
        gsap.to(mouse, {
            x: dets.x,
            y: dets.y

        })
    });


    page5.addEventListener("mouseenter", function () {

        gsap.to(mouse, {

            scale: 1,
            opacity: 1

        })
    });
    page5.addEventListener("mouseleave", function () {

        gsap.to(mouse, {

            scale: 0,
            opacity: 0

        })
    });
}
mouseMove()


function swipeLoop(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}
swipeLoop()


var tl = gsap.timeline()

tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to("#loader",{
    opacity:0,
})

tl.to("#loader",{
   display:"none"
})

tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.7
})
