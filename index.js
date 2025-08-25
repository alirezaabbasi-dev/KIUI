import { fetchData } from "./src/components/fetchData.js";
import initHeader from "./src/components/header/header.js";
import "./src/components/main/Box.js";
import initFooter from "./src/components/footer/footer.js";
import "./src/app.js";

let KIUI_DATA = null;

// Global init function
async function initKIUI(api) {
  if (KIUI_DATA) return KIUI_DATA;

  KIUI_DATA = await fetchData(api);
  return KIUI_DATA;
}

// start project
(async () => {
  await initKIUI("./src/components/data.json");
  initHeader(KIUI_DATA)
  initFooter(KIUI_DATA);
  console.log("KIUI_DATA Loaded:", KIUI_DATA);
})();
