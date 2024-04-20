import Splitting from "splitting";
import { createIcons, icons } from "lucide";
import { navBtn } from "./components/nav";
import LocomotiveScroll from "locomotive-scroll";
import { loader } from "./components/loader";

window.App = {};

export const App = window.App;
App.init = function () {
  Splitting();
  createIcons({ icons });

  const nav = document.querySelector("#nav");
  if (nav) {
    navBtn(document.querySelector(".btn-nav"));
  }

  let scrollContainer = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  scrollContainer.on("scroll", (args) => {
    console.log(args);
  });

  const wrapLoader = document.querySelector(".loader");
  if (wrapLoader) {
    loader();
  }
};

/*--------------------------------------------
    load function
---------------------------------------------*/
window.addEventListener("load", function () {
  App.init();
});
