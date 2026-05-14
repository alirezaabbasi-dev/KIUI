# 🧩 KIUI Kit

---

<img src="./public/kiui.png">

A lightweight, modern Web Component UI Kit – ready to plug into your HTML projects.

> Includes responsive headers, product cards, footers, and full theming system – powered by vanilla JavaScript and TailwindCSS-inspired utility styles.

---

## 📦 Files Overview

| File                 | Description                                  |
| -------------------- | -------------------------------------------- |
| `/assets/index.js`   | Core JavaScript containing Web Components    |
| `/assets/app.js`     | You can init Kiui project                    |
| `/assets/index.css`  | Main CSS for layout and design               |
| `/assets/custom.css` | Theme/style config – customize colors easily |
| `allData/*.json`     | Dynamic content used by components           |
| `index.html`         | Live demo file – test components quickly     |
| `kiui.png`           | Default image/logo used in cards/headers     |

---

## 📦 Installation

```bash
npm i kiui-kit
```

---

## 🚀 How to Use

### 1. Add Files to Your Project

You can either clone this repo or copy the following files into your project:

```
/your-project/
│
├── /allData/*.json
├── /assets/*
├─────── index.js
├─────── app.js
├─────── index.css
├─────── custom.css (optional)
└── your.html
```

---

### 2. Include in Your HTML and JS
HTML

```html
<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KIUI Demo</title>
    <link rel="shortcut icon" href="/kiui.png" type="image/png" />
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index.css" />
  </head>

  <body>
    <header>
      <!--! To use one of the components below, uncomment only one  -->

      <!-- <header-type-1></header-type-1> -->

      <header-type-2></header-type-2>

      <!--! To use one of the components below, uncomment only one  -->
    </header>

    <main class="container">
      <!--? Type Writer -->

      <div>
        <h2 id="KIUI-typewriter"></h2>
      </div>

      <!--? Type Writer -->

      <!--* Show More Component -->

      <div id="show-more">
        <div id="show-more__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur
          quasi minus a quaerat vitae laboriosam qui iste, est voluptatum
          nesciunt maxime voluptate. Explicabo saepe exercitationem ratione
          illum autem doloribus quis, alias quas possimus consectetur? Dolorem
          temporibus non enim saepe exercitationem obcaecati, velit
          necessitatibus accusamus voluptatem natus. Natus nemo perferendis
          aspernatur et, similique earum! Adipisci omnis modi consequuntur eos
          sint aspernatur rerum officiis alias commodi aliquid possimus
          laudantium, blanditiis minima magni distinctio. Molestias ipsam enim
          recusandae excepturi dignissimos praesentium placeat minus, deserunt
        </div>

        <div id="show-more__shadow"></div>
        <button id="show-more__button">Show More</button>
      </div>

      <!--* Show More Component -->

      <div id="cards-wrapper">
        <!--? Boxes -->
        <box-card-1 data-title="just title"></box-card-1>

        <box-card-1
          data-img="/kiui.png"
          data-title="title2"
          data-price="23"
        ></box-card-1>

        <box-card-1
          data-img="/kiui.png"
          data-button-title="Buy"
          data-title="title3"
          data-description="description"
          data-price="12"
        ></box-card-1>

        <box-card-1
          data-img="/kiui.png"
          data-title="title4"
          data-description="description"
          data-button-title="button"
          data-button-link="#itsLink"
        ></box-card-1>
        <!--? Boxes -->
      </div>
      <button-primary
        data-content="Click me"
        data-bg="black"
        data-color="#fff"
        data-id="btn-1"
      ></button-primary>
    </main>

    <footer>
      <!--* To use one of the components below, uncomment only one  -->

      <footer-type-1></footer-type-1>

      <!-- <footer-type-2></footer-type-2> -->

      <!-- <footer-type-3></footer-type-3> -->

      <!--* To use one of the components below, uncomment only one  -->
    </footer>

    <!--* Scripts -->
    <script src="./assets/app.js"></script>
    <!--! Other Scripts ... -->
  </body>
</html>
```
JavaScript (app.js)

```js
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

```

---

### 3. Customize with `*.json`

Change menu items, links, and footer content by editing **these:**

`header.json`:

```json
{
  "menu": {
    "title": ["KIUI"],
    "items": ["Home", "Docs", "contact", "GitHub"],
    "links": [
      "#Home",
      "https://github.com/alirezaabbasi-dev/KIUI?tab=readme-ov-file#-kiui-kit",
      "#contact",
      "https://github.com/alirezaabbasi-dev/KIUI"
    ]
  }
}
```

`footer.json`

```json
{
  "footer": {
    "title": "KIUI",
    "description": "KIUI is a modern UI design system to build fast and responsive web interfaces.",
    "footerItems": {
      "item1": {
        "title": "Company",
        "items": ["About", "Contact Us", "Careers", "Blog", "Contact"],
        "links": ["#About", "#Us", "#Careers", "#Blog", "#Contact"]
      },
      "item2": {
        "title": "Support",
        "items": ["Help Center", "Documentation", "API Reference", "Status"],
        "links": ["#Help", "#Documentation", "#API", "#Status"]
      },
      "item3": {
        "title": "Legal",
        "items": [
          "Privacy Policy",
          "Terms of Service",
          "Cookie Policy",
          "Licenses"
        ],
        "links": ["#Privacy", "#Terms", "#Cookie", "#Licenses"]
      }
    }
  }
}
```

`socials.json`

```json
{
  "socials": {
    "socials_names": [
      "instagram.com/yourName",
      "x.com/yourName",
      "t.me/yourName",
      "linkedin.com/in/kiyan-abbasi",
      "whatsapp",
      "YouTube",
      "facebook"
    ]
  }
}
```

---

## 🛠️ Development

To run the project locally:

```bash
git clone https://github.com/alirezaabbasi-dev/KIUI.git

cd KIUI

npm install

npm run dev
```

---

## 🎨 Theming & Styling

- To change colors, shadows, transitions, and styles:
  Edit the `custom.css` file and **uncomment** the section you want to modify.
- You can apply your own color palette, spacing, fonts, etc.

---

## 🌐 Browser Support

✅ Modern Browsers (Chrome, Firefox, Edge, Safari)
❗ Not tested in IE (because it's 2025 😉)

---

## 📄 License

`Apache License Version 2.0`

---

## ✨ Author

Built with ❤️ by Kiyan Abbasi.
Feel free to contribute or fork the project.
