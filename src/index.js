import initHeader from "./components/header/header.js";
import "./components/main/Box.js";
import initFooter from "./components/footer/footer.js";
import "./app.js";

window.initHeader = initHeader;
window.initFooter = initFooter;

// ? InitProject

(async () => {
  const navMenus = await fetch("./src/allData/header.json")
    .then((res) => res.json())
    .then((data) => data);

  initHeader(navMenus);

  const footerData = await fetch("./src/allData/footer.json")
    .then((res) => res.json())
    .then((data) => data);

  const socialsData = await fetch("./src/allData/socials.json")
    .then((res) => res.json())
    .then((data) => data);

  const footer = { ...footerData.footer, socials: socialsData.socials };
  initFooter(footer);
})();
