import Splitting from "splitting";
import { createIcons, icons } from "lucide";

window.App = {};

export const App = window.App;
App.init = function () {
  Splitting();
  createIcons({ icons });
};

/*--------------------------------------------
    load function
---------------------------------------------*/
window.addEventListener("load", function () {
  App.init();
});
