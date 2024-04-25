import { gsap } from "gsap";

export const hero = function () {
  const herotitle = document.querySelectorAll(
    ".hero-title .word > .char, .hero-title .whitespace"
  );
  const heroBaseline = document.querySelector(".hero-baseline p");
  const heroBtn = document.querySelector(".inner-btn");
  const heroEl = document.querySelector(".hero-home");

  const tlSettings = {
    staggerVal: 0.015,
    charsDuration: 0.7,
  };
  const tl = new gsap.timeline();

  tl.to(herotitle, {
    y: 0,
    opacity: 1,
    ease: "Power2.easeInOut",
    duration: tlSettings.charsDuration,
    stagger: tlSettings.staggerVal,
  })
    .to(
      heroBaseline,
      {
        y: 0,
        opacity: 1,
        ease: "Power2.easeInOut",
        duration: 0.5,
        onComplete: function () {
          if (heroEl) {
            heroEl.classList.add("img-visible");
          }
        },
      },
      "-=1"
    )
    .to(
      heroBtn,
      {
        y: 0,
        opacity: 1,
        ease: "Power2.easeInOut",
        duration: 0.5,
      },
      "-=1"
    );
};
