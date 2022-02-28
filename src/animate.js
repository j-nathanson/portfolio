import gsap from "gsap";

export default function animate(index) {
    switch (index) {
        case 0:
            gsap.fromTo('.about-header', { opacity: 0, y: "-100%" }, { duration: 3, opacity: 1, y: "0%" })
            gsap.fromTo('.about-img', { opacity: 0 }, { duration: 3, opacity: 1 })
            gsap.fromTo('.about-text', { opacity: 0, y: "100%" }, { duration: 3, opacity: 1, y: "0%" })
            break;
        case 1:
            gsap.fromTo('.project-element', { opacity: 0, }, { duration: 2, opacity: 1, stagger: .5, delay: 1 });
            break;
        default:
            break;
    }

}