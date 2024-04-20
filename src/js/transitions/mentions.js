import { gsap } from "gsap";
import splitting from "splitting";
import { titlePage } from "../components/title-page";

export const toMentionsTransition = {
  name: "to-mentions-transition",
  to: {
    namespace: ["mentions"],
  },
  leave() {
    const pageTransition = document.querySelector(".page-transition-backdrop");
    return gsap.to(pageTransition, {
      duration: 0.8,
      ease: "Power4.easeInOut",
      visibility: "visible",
      scaleY: 1,
      transformOrigin: "center bottom",
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    });
  },
  afterLeave({ current }) {
    return current.container.remove();
  },
  beforeEnter() {
    splitting();
    const imgHeader = document.querySelector(".header-page .header-img");
    return gsap.set(imgHeader, {
      scale: 1.5,
      rotate: 5,
    });
  },
  enter() {
    const imgHeader = document.querySelector(".header-page .header-img");
    const $backdrop = document.querySelector(".page-transition-backdrop");
    return gsap.to($backdrop, {
      duration: 0.8,
      ease: "Power4.easeInOut",
      scaleY: 0,
      transformOrigin: "center top",
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      onComplete: function () {
        gsap.set($backdrop, {
          clearProps: "transform,transformOrigin,visibility,clipPath",
        });
        gsap.to(imgHeader, {
          scale: 1,
          rotate: 0,
          duration: 0.8,
          ease: "Power3.easeInOut",
        });
        titlePage();
      },
    });
  },
  afterEnter() {},
};
