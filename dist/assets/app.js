window.addEventListener("load", () => {
  // ? InitProject
  (async () => {
    const navMenusDataRes = await fetch("/allData/header.json");
    const navMenusData = await navMenusDataRes.json();
    initHeader(navMenusData);

    const footerDataRes = await fetch("/allData/footer.json");
    const footerData = await footerDataRes.json();

    const socialsDataRes = await fetch("/allData/socials.json");
    const socialsData = await socialsDataRes.json();

    const footer = { ...footerData.footer, socials: socialsData.socials };
    initFooter(footer);
  })();

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
});
