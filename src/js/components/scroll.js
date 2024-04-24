import LocomotiveScroll from "locomotive-scroll";

export const scroll = function () {
  const btnScrollToTop = document.querySelector(".btn-to-top");

  let scrollContainer = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  scrollContainer.on("scroll", (position) => {
    if (btnScrollToTop) {
      const scrollTrigger = 600;
      const scrollToTop = position.scroll.y;
      if (scrollToTop > scrollTrigger) {
        btnScrollToTop.classList.add("show");
      } else {
        btnScrollToTop.classList.remove("show");
      }
    }
  });
};
