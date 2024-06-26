import { gsap } from "gsap";
import { hero } from "./hero";
import { titlePage } from "./title-page";

export const loader = function () {
  const loader = document.querySelector(".loader");
  const logo = document.querySelector(".loader .logo");
  const loaderWrapper = document.querySelectorAll(".loader-wrapper");
  const heroEl = document.querySelector(".hero-home");

  const tlSettings = {
    staggerVal: 0.015,
    charsDuration: 0.7,
  };

  const tl = gsap.timeline();

  tl.set(logo, {
    yPercent: 100,
    opacity: 0,
  })
    .to(loaderWrapper, {
      opacity: 1,
    })
    .to(logo, {
      yPercent: 0,
      opacity: 1,
      ease: "Power2.easeInOut",
      duration: tlSettings.charsDuration,
      onComplete: function () {
        gsap.to(loader, {
          yPercent: -100,
          delay: 1.5,
          ease: "Expo.easeInOut",
          duration: 1,
          onStart: function () {
            if (heroEl) {
              heroEl.classList.add("bg-hide");
            }
          },
          onComplete: function () {
            if (heroEl) {
              hero();
            } else {
              titlePage();
            }
          },
        });
      },
    });
};
