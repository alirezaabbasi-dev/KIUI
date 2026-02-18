import initHeader from "./components/header/header.js";
import "./components/main/Box.js";
import initFooter from "./components/footer/footer.js";
import "./app.js";
import "./effects/typewriter.js";

window.initHeader = initHeader;
window.initFooter = initFooter;



//  Use KIUI Type Writer

initKIUITypeWriter(
  [
    "Welcome to KIUI",
    "A lightweight",
    "and",
    "Modern Web Component UI Kit.",
    "Let’s build something amazing together . . . ",
  ],
  100, // typing/deleting speed
  1000, // pause between type/delete
);
