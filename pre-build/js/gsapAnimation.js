document.addEventListener("DOMContentLoaded", function () {

    //header gsap
    const links = gsap.utils.toArray("#gnb ul li a");

    links.forEach(link => {
        const element = document.querySelector(link.getAttribute("href"));
        const linkScrollTrigger = ScrollTrigger.create({
            trigger: element,
            start: "top top",
        });

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            markers: false,
            onToggle: self => setActive(link),
        });

        link.addEventListener('click', e => {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: linkScrollTrigger.start, overwrite: "auto" });
        });
    });

    function setActive(activeLink) {
        links.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    let showNav;

    showNav = gsap.from("#header", {
        yPercent: -200,
        paused: true,
        duration: 0.2,
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showNav.play() : showNav.reverse();
        },
    });


    // Create a ScrollTrigger for the animation
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: "#section2",
        scrub: 1,
        animation: gsap.fromTo(
            ".developer",
            {
                // Initial properties (if needed)
            },
            {
                transform: "scale(6.0)",
                filter: "blur(6px)",
            }
        ),
    });


    const texts = gsap.utils.toArray(".text:not(:first-child)")
    const imojis = gsap.utils.toArray(".imoji:not(:first-child)")


    gsap.set(imojis, {yPercent:101})

    const allimojis = gsap.utils.toArray(".imoji")


    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 425px)", () => {

    // this setup code only runs when viewport is at least 600px wide
        console.log("desktop")
            
        ScrollTrigger.create({
            trigger:".gallery",
            start:"top top",
            end:"bottom bottom",
            pin:".right"
        })

        //create scrolltrigger for each texts section
        //trigger photo animation when headline of each texts section 
        //reaches 80% of window height
        texts.forEach((detail, index)=> {

            let headline = detail.querySelector("h4")
            let animation = gsap.timeline()
            .to(imojis[index], {yPercent:0})
            .set(allimojis[index], {autoAlpha:0})
            ScrollTrigger.create({
                trigger:headline,
                start:"top 80%",
                end:"top 50%",
                animation:animation,
                scrub:true,
                markers:false
            })
        })
            
            
        
        return () => { // optional
            // custom cleanup code here (runs when it STOPS matching)
            console.log("mobile")
        };
    });


    const slides = document.querySelectorAll(".vrSection");

    function initParallax() {
        slides.forEach((slide, i) => {
            let imageWrappers = slide.querySelectorAll(".vrSection > article");
    
            gsap.fromTo(
            imageWrappers,
            {
                y: "-30vh",
            },
            {
                y: "30vh",
                scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: "top bottom", // position of trigger meets the scroller position
                },
                ease: "none",
            }
            );
        });
    }

    function init() {
        initParallax();
    }
    init();


    const vrSections = document.querySelectorAll('.vrSection');

    vrSections.forEach((vrSection, index) => {
        const vrPoligon = vrSection.querySelector('.vrPoligon');
        const xValue = index % 2 === 0 ? '20%' : '-20%';

        ScrollTrigger.create({
            trigger: vrSection,
            scrub: 1,
            animation: gsap.fromTo(
                vrPoligon,
                {
                    x: xValue,
                    y: '0%',
                    backgroundSize: 0,
                },
                {
                    x: '0%',
                    y: '0%',
                    scale: 1.2,
                }
            ),
        });
    });



    
    let sections4 = gsap.utils.toArray(".horizontalItem");
    gsap.to(sections4, {
        xPercent: -100 * (sections4.length - 1),
        ease: "none",
        // duration: 122.5,
        scrollTrigger: {
        trigger: "#section4",
        pin: true,
        scrub: 1,
        end: "+=11000",
        },
    });


    //section4 developer02 배경
    ScrollTrigger.create({
        // 어디에 닿으면 반응할건지
        trigger: "#section4",
        scrub: 1,
        end: "+=25000",
        // 어디다가 적용할건지
        animation: gsap.fromTo(
            ".developer02",
            {
                rotate: "-100",
                x: "-1000",
                y: "2000",
              },
              {
                rotate: "+=150",
                x: "2000",
                y: "-1000",
              }
        ),
    });




});