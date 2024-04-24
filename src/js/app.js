import Splitting from "splitting";
import { createIcons, icons } from "lucide";
import { navBtn } from "./components/nav";
import { loader } from "./components/loader";
import { scroll } from "./components/scroll";

window.App = {};

export const App = window.App;
App.init = function () {
  Splitting();
  createIcons({ icons });
  scroll();

  const nav = document.querySelector("#nav");
  if (nav) {
    navBtn(document.querySelector(".btn-nav"));
  }

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
