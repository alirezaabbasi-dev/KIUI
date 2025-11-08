(async () => {
  const navMenus = await fetch("./allData/header.json")
    .then((res) => res.json())
    .then((data) => data);

  initHeader(navMenus);

  const footerData = await fetch("./allData/footer.json")
    .then((res) => res.json())
    .then((data) => data);

  const socials = await fetch("./allData/socials.json")
    .then((res) => res.json())
    .then((data) => data);

  const footer = { ...footerData.footer, socials: socials.socials };

  initFooter(footer);
})();
