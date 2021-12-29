
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelectorAll('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelectorAll('.l1');
const l2 = document.querySelectorAll('.l2');


window.addEventListener('load', () => {
    const TL = gsap.timeline({ pause: true });
    TL

        .staggerFrom(btns, 2, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
        .from(l1, 1, { width: 0, ease: "power2.out" }, '-=1')
        .from(l2, 2, { width: 0, ease: "power2.out" }, '-=2')
        .staggerFrom(medias, 1, { right: -200, opacity: 0, ease: "power2.out" }, 0.3, '-=1');

    TL.play();
})




