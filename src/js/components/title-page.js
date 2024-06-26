import { gsap } from "gsap";

export const titlePage = function () {
  const title = document.querySelectorAll(
    ".header-title .title-page .word > .char, .header-title .title-page .whitespace"
  );

  const tlSettings = {
    staggerVal: 0.015,
    charsDuration: 0.7,
  };
  const tl = new gsap.timeline();

  tl.to(title, {
    y: 0,
    opacity: 1,
    ease: "Power2.easeInOut",
    duration: tlSettings.charsDuration,
    stagger: tlSettings.staggerVal,
  });
};
