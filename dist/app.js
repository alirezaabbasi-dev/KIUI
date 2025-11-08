

(async () => {
  const navMenus = await fetch("./src/allData/header.json")
    .then((res) => res.json())
    .then((data) => data);

  initHeader(navMenus);

  const footerData = await fetch("./src/allData/footer.json")
    .then((res) => res.json())
    .then((data) => data);

  const socials = await fetch("./src/allData/socials.json")
    .then((res) => res.json())
    .then((data) => data);

  const footer = { ...footerData.footer, socials: socials.socials };

  initFooter(footer);
})();
