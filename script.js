gsap.registerPlugin(ScrollTrigger);
const car = document.getElementById("car");
const trail = document.getElementById("trail");
const letters = gsap.utils.toArray(".value-letter");
const valueAdd = document.querySelector(".value-add");
const letterOffsets = letters.map(letter => letter.offsetLeft);
const roadWidth = window.innerWidth;
const carWidth = 150;
const endX = roadWidth - carWidth;
gsap.to(car, {
    x: endX,
    ease: "none",
    scrollTrigger: {
        trigger: ".section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: ".track"
    },
    onUpdate: function () {
        const carX = gsap.getProperty(car, "x") + carWidth / 2;
        letters.forEach((letter, i) => {
            if (carX >= letterOffsets[i] + valueAdd.offsetLeft) {
                letter.style.opacity = 1;
            } else {
                letter.style.opacity = 0;
            }
        });
        gsap.set(trail, { width: carX });
    }
});
["#box1", "#box2", "#box3", "#box4"].forEach((box, i) => {
    gsap.to(box, {
        opacity: 1,
        scrollTrigger: {
            trigger: ".section",
            start: `top+=${400 + i * 200} top`,
            end: `top+=${600 + i * 200} top`,
            scrub: true
        }
    });
});