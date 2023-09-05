document.addEventListener("DOMContentLoaded", function () {


    /* smooth scroll (lenis.js) */
    const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical", // vertical, horizontal
        gestureDirection: "vertical", // vertical, horizontal, both
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    /* percent & loading fadeout animation */
    const loadingPercent = document.querySelector(".loadingPercent p");

    const setLoading = (percent) => {
        loadingPercent.textContent = percent + "%";
    };

    let loading = 0;
    const interval = setInterval(() => {
        loading++;
        setLoading(loading);

        if (loading >= 100) {
            clearInterval(interval);
            setLoading(100);
            document.documentElement.classList.remove("load");
            document.body.classList.remove("load");
            document.querySelector(".loadingArea").classList.add("off");
            $('.loadingArea').stop().fadeOut();
        }
    }, 50);


    /* lottie run animation */
    const aniArea = document.querySelector(".aniArea");
    const animationFiles = ["run01.json", "run02.json", "run03.json", "run04.json", "run05.json"];

    animationFiles.forEach((animationFile, index) => {
        const lottieContainer = document.createElement("div");
        lottieContainer.classList.add("lottieItem");
        aniArea.appendChild(lottieContainer);

        const screenHeight = window.innerHeight;
        const animationHeight = 100; 
        const maxYOffset = screenHeight - animationHeight;
        const randomYOffset = Math.random() * maxYOffset;

        lottieContainer.style.top = randomYOffset + "px";

        const animationOptions = {
            container: lottieContainer,
            renderer: "svg", 
            loop: true,
            autoplay: true, 
            path: "../images/" + animationFiles[index], 
        };

        const anim = lottie.loadAnimation(animationOptions);
    });


    /* gsap run random animation */
    const animationItems = document.querySelectorAll(".lottieItem");
    const tl = gsap.timeline({ repeat: -1 });

    animationItems.forEach((animationContainer, index) => {
        // Calculate a random Y-offset within the range of the screen height
        const screenHeight = window.innerHeight;
        const animationHeight = 100; // Height of the animation container
        const maxYOffset = screenHeight - animationHeight;
        const randomYOffset = Math.random() * maxYOffset;

        if (index <= 0) {
            tl.fromTo(
                animationContainer,
                { x: '100%', y: randomYOffset },
                { x: '-100%', y: randomYOffset, duration: 5, ease: "linear" },
                0
            );
        } else if (index <= 1) {
            tl.fromTo(
                animationContainer,
                { x: '100%', y: randomYOffset },
                { x: '-100%', y: randomYOffset, duration: 10, ease: "steps(12)" },
                0
            );
        } else if (index <= 2) {
            tl.fromTo(
                animationContainer,
                { x: '-100%', y: randomYOffset },
                { x: '100%', y: randomYOffset, duration: 6, ease: "linear" },
                0
            );
        } else if (index <= 3) {
            tl.fromTo(
                animationContainer,
                { x: '-100%', y: randomYOffset },
                { x: '100%', y: randomYOffset, duration: 5, ease: "ease-in-out" },
                0
            );
        } else if (index <= 4) {
            tl.fromTo(
                animationContainer,
                { x: '-100%', y: randomYOffset },
                { x: '100%', y: randomYOffset, duration: 6.5, ease: "ease-out" },
                0
            );
        }
    });

    tl.play();


    /* lottie animation */
    const animationDev = {
        container: document.querySelector('.lottieItem.developer'), 
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
        path: '../images/developer.json', 
    };

    const animation = lottie.loadAnimation(animationDev);


    /* tag random animation */
    const technologies = [
        "SEO",
        "WA",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "SCSS",
        "Gulp",
        "Figma",
        "Zeplin",
        "XD",
        "GSAP",
        "React.js"
    ];

    const tagArea = document.querySelector(".tagArea");

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    function getRandomCoordinates() {
        const maxX = tagArea.clientWidth - 100;
        const maxY = tagArea.clientHeight - 20; 
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        return { x, y };
    }

    function getRandomDuration() {
        return `${Math.random() * 6 + 4}s`;
    }

    function createRandomTag() {
        const randomTech = technologies[Math.floor(Math.random() * technologies.length)];
        const tag = document.createElement("span");
        tag.textContent = randomTech;
        tag.classList.add("tag");
        tag.style.color = getRandomColor();
        tag.style.animationDuration = getRandomDuration(); 

        const { x, y } = getRandomCoordinates();
        tag.style.left = `${x}px`;
        tag.style.top = `${y}px`;

        tagArea.appendChild(tag);
    }

    const numberOfTagsToAdd = 10;

    for (let i = 0; i < numberOfTagsToAdd; i++) {
        createRandomTag();
    }


    /* lottie animation */
    const animationDev02 = {
        container: document.querySelector('.lottieItem.developer02'), 
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
        path: '../images/developer02.json',
    };

    const animation02 = lottie.loadAnimation(animationDev02);


    /* lottie animation */
    const animationDev03 = {
        container: document.querySelector('.lottieItem.developer03'), 
        renderer: 'svg', 
        loop: true, 
        autoplay: true, 
        path: '../images/developer.json',
    };

    const animation03 = lottie.loadAnimation(animationDev03);

    

});