import Splitting from "splitting";
import { createIcons, icons } from "lucide";
import { navBtn } from "./components/nav";

window.App = {};

export const App = window.App;
App.init = function () {
  Splitting();
  createIcons({ icons });

  const nav = document.querySelector("#nav");
  if (nav) {
    navBtn(document.querySelector(".btn-nav"));
  }
};

/*--------------------------------------------
    load function
---------------------------------------------*/
window.addEventListener("load", function () {
  App.init();
});
