(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&o(e)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();function y(n){function r(s,t){const e=s.classList.contains("open");s.classList.contains("translate-x-full")?(s.classList.toggle("translate-x-0"),s.classList.toggle("translate-x-full")):s.classList.toggle("hidden");const[i,l]=t.children;e?(i.classList.remove("opacity-0"),i.classList.add("opacity-100"),l.classList.remove("opacity-100"),l.classList.add("opacity-0"),s.classList.remove("open")):(i.classList.remove("opacity-100"),i.classList.add("opacity-0"),l.classList.remove("opacity-0"),l.classList.add("opacity-100"),s.classList.add("open"))}class a extends HTMLElement{async connectedCallback(){const t=await n;if(!t)return;const e=t.menu.items.map(l=>`<li class="menu-item"><a class="transition-colors">${l}</a></li>`).join(""),i=t.menu.items.map(l=>`<li class="menu-mobile-item"><a class="transition-colors">${l}</a></li>`).join("");this.render(t.menu.title,e,i),this.setDesktopLinks(t.menu.links),this.setMobileLinks(t.menu.links),this.setupMobileToggle()}render(t,e,i){this.innerHTML=`
      <nav class="menu-background bg-gray-100 dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          <!-- Logo -->
          <h1 class="menu-main-title text-xl font-bold text-black dark:text-slate-100 transition-colors">
            <a href="./index.html">${t}</a>
          </h1>

          <!-- Hamburger Button (Mobile) -->
          <div class="md:hidden">
            <button id="hamburger-btn" class="relative w-6 h-6">
              <svg class="absolute dark:text-gray-100 inset-0 w-6 h-6 transition-opacity duration-300 opacity-100 hamburger-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="absolute text-gray-100 inset-0 w-6 h-6 transition-opacity duration-300 opacity-0 close-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Desktop Menu -->
          <ul class="menuItemsWrapper hidden md:flex gap-6 text-slate-700 dark:text-slate-100  font-medium *:transition-all">
            ${e}
          </ul>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden fixed top-16 right-0 w-2/3 h-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 shadow-lg px-6 py-4 flex-col gap-4 m-auto text-center">
          <ul class="flex flex-col gap-4 font-semibold">
            ${i}
          </ul>
        </div>
      </nav>
    `}setDesktopLinks(t){this.querySelectorAll(".menu-item a").forEach((i,l)=>{i.setAttribute("href",t[l]||"#")})}setMobileLinks(t){this.querySelectorAll(".menu-mobile-item a").forEach((i,l)=>{i.setAttribute("href",t[l]||"#")})}setupMobileToggle(){const t=this.querySelector("#hamburger-btn"),e=this.querySelector("#mobile-menu"),i=t;t&&e&&i&&(i.children[0].classList.add("opacity-100"),i.children[1].classList.add("opacity-0"),t.addEventListener("click",()=>r(e,i)))}}class o extends HTMLElement{async connectedCallback(){const t=await n;if(!t)return;const e=t.menu.items.map(l=>`<li class="menu-item"><a class="transition-colors">${l}</a></li>`).join(""),i=t.menu.items.map(l=>`<li class="menu-mobile-item"><a class="transition-colors">${l}</a></li>`).join("");this.render(t.menu.title,e,i),this.setLinks(t.menu.links),this.setMobileLinks(t.menu.links),this.setupMobileToggle()}render(t,e,i){this.innerHTML=`
      <nav class="menu-background bg-gray-200 text-slate-800 dark:bg-gray-900 dark:text-slate-100 fixed top-0 left-0 w-full z-50 shadow">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <!-- Left: Hamburger + Logo -->
          <div class="flex items-center gap-4">
            <button id="hamburger-btn" class="relative w-6 h-6 md:hidden">
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-100 hamburger-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-0 close-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <a href="./index.html" class="menu-main-title transition-colors text-xl font-bold">${t}</a>
          </div>

          <!-- Center Menu (Desktop) -->
          <ul class="menuItemsWrapper hidden md:flex gap-8 text-sm font-medium">
            ${e}
          </ul>

          <!-- Right Icons -->
          <div class="hidden md:flex items-center gap-4">
            <button title="Search">
              <svg class="w-5 h-5 text-black dark:text-white hover:text-indigo-400 transition" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Sidebar Menu (Mobile) -->
        <div id="mobile-menu" class="fixed top-0 right-0 w-64 h-full bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 shadow-lg px-6 py-8 transform translate-x-full transition-transform duration-300 ease-in md:hidden z-50">
          <ul class="flex flex-col gap-6 font-semibold text-base">
            ${i}
          </ul>
        </div>
      </nav>
    `}setLinks(t){this.querySelectorAll(".menu-item a").forEach((i,l)=>{i.setAttribute("href",t[l]||"#")})}setMobileLinks(t){this.querySelectorAll(".menu-mobile-item a").forEach((i,l)=>{i.setAttribute("href",t[l]||"#")})}setupMobileToggle(){const t=this.querySelector("#hamburger-btn"),e=this.querySelector("#mobile-menu"),i=t;t&&e&&i&&(i.children[0].classList.add("opacity-100"),i.children[1].classList.add("opacity-0"),t.addEventListener("click",()=>r(e,i)))}}customElements.define("header-type-1",a),customElements.define("header-type-2",o)}class w extends HTMLElement{async connectedCallback(){const{img:r,title:a,description:o,price:s,buttonTitle:t,buttonLink:e}=this.dataset;this.render(r,a,o,s,t,e)}render(r,a,o,s,t,e){this.innerHTML=`
      <!-- Product Card -->
      <div class="card w-full bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <img class="w-full h-60 object-cover" src="${r||"./kiui.png"}" alt="${a||"default alt"}" />

        <div class="h-42 p-5 flex flex-col justify-between space-y-3">
          ${a?`<h2 class="card-title text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">${a}</h2>`:""}
          ${o?`<p class="card-description text-sm text-gray-600 dark:text-gray-400">${o}</p>`:""}

          ${s||e?`<div class="flex items-center justify-between mt-4">
                  ${s?`<span class="card-price text-lg font-bold text-gray-600 dark:text-indigo-400">$${s}</span>`:"<div></div>"}
                  ${t?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="card-btn px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 cursor-pointer transition">${t}</a>`:""}
                </div>`:""}
        </div>
      </div>
      <!-- Product Card -->
    `}}customElements.define("box-card-1",w);function k(n){class r extends HTMLElement{async connectedCallback(){const e=await n;e&&(this.logoRender=s.bind(this),this.render(e))}render(e){const i=e.socials.socials_names?e.socials.socials_names.map(l=>{if(this.logoRender(l))return`<a href="https://${l}" target="_blank">${this.logoRender(l)}</a>`}).join(""):"";this.innerHTML=`
    <div class="footer bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top  -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-300 dark:border-gray-700">
        <!-- Logo + Description  -->
        <div>
          <h2 class="footer-title text-2xl font-bold text-gray-800 dark:text-white">${e.title}</h2>
          <p class="footer-description mt-4 text-sm text-gray-600 dark:text-gray-400">${e.description}</p>
        </div>

        <!-- Links  -->
        <div>
          <h3 class="text-lg font-semibold mb-4 footer-item-title">${e.footerItems.item1.title}</h3>
          <ul class="space-y-2 text-sm">
          ${e.footerItems.item1.items.map((l,d)=>`<li><a href="${e.footerItems.item1.links[d]}" class="footer-item hover:underline">${l}</a></li>`).join("")}
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 footer-item-title">${e.footerItems.item2.title}</h3>
          <ul class="space-y-2 text-sm">
          ${e.footerItems.item2.items.map((l,d)=>`<li><a href="${e.footerItems.item2.links[d]}" class="footer-item hover:underline">${l}</a></li>`).join("")}
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 footer-item-title">${e.footerItems.item3.title}</h3>
          <ul class="space-y-2 text-sm">
          ${e.footerItems.item3.items.map((l,d)=>`<li><a href="${e.footerItems.item3.links[d]}" class="footer-item hover:underline">${l}</a></li>`).join("")}
          </ul>
        </div>
      </div>

      <!-- Bottom  -->
      <div class="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
        <p class="text-sm copyright">&copy; ${new Date().getFullYear()} ${e.title}. All rights reserved.</p>
         <div class="flex gap-4">
            ${i}
          </div>
      </div>
    </div>
</div>
    `}}class a extends HTMLElement{async connectedCallback(){const e=await n;e&&(this.logoRender=s.bind(this),this.render(e))}render(e){const i=e.socials.socials_names?e.socials.socials_names.map(l=>{if(this.logoRender(l))return`<a href="https://${l}" target="_blank">${this.logoRender(l)}</a>`}).join(""):"";this.innerHTML=`
    <div class="footer bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="footer-title text-3xl font-extrabold dark:text-white text-gray-950">${e.title}</h2>
          <p class="footer-description mt-2 text-sm text-gray-400">${e.description}</p>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="email"
            placeholder="Enter your email"
            class="input-email w-full sm:w-80 px-4 py-2 rounded-md text-gray-800 dark:text-gray-300 outline-1 focus:outline-blue-600"
          />
          <button
            class="footer-btn-subscribe bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
          >
            Subscribe
          </button>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left border-t border-gray-700 pt-10">
          ${Object.values(e.footerItems).map(l=>`
            <div>
              <h3 class="text-lg font-semibold mb-4 footer-item-title">${l.title}</h3>
              <ul class="space-y-2 text-sm">
                ${l.items.map((d,h)=>`<li class="footer-item"><a href="${l.links[h]}" class="hover:underline">${d}</a></li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>

        <!-- Bottom Social -->
        <div class="footer-bottom-social mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-700 pt-6 gap-4">
          <p class="copyright">&copy; ${new Date().getFullYear()} ${e.title}. All rights reserved.</p>
          <div class="flex gap-4">
            ${i}
          </div>
        </div>
      </div>
    </div>
    `}}class o extends HTMLElement{async connectedCallback(){const e=await n;e&&(this.logoRender=s.bind(this),this.render(e))}render({title:e,description:i,footerItems:l,socials:d}){const{item1:h,item2:g,item3:u}=l,v=d.socials_names?d.socials_names.map(c=>{if(this.logoRender(c))return`<a href="https://${c}" target="_blank">${this.logoRender(c)}</a>`}).join(""):"";this.innerHTML=`
    <footer class="footer  bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-16 text-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between lg:flex-row flex-col space-y-4 lg:space-y-0">

        <div class="flex-2/4 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl footer-title">${e}</h2>
            <p class="w-full md:w-1/2 footer-description">${i}</p>
            <div class="flex mt-5 md:ml-auto gap-4">
            ${v}
            </div>
          </div>

          <p class="text-gray-600 dark:text-gray-400 copyright">Copyright ${new Date().getFullYear()} ${e}, Inc. Terms & Privacy</p>

        </div>

        <div class="flex-1/4 flex justify-between flex-col sm:flex-row gap-4">
          <div>
            <h3 class="footer-item-title text-lg footer-title text-gray-400 font-bold">More on The ${h.title}</h3>
            <ul class="space-y-3 mt-4">
              ${h.items.map((c,m)=>`<li class="footer-item hover:underline"><a href=${h.links[m]}>${c}</a></li>`).join("")}
            </ul>
          </div>

          <div>
            <h3 class="footer-item-title text-lg footer-title text-gray-400 font-bold">More on The ${g.title}</h3>
            <ul class="space-y-3 mt-4">
              ${g.items.map((c,m)=>`<li class="footer-item hover:underline hover:underline"><a href=${g.links[m]}>${c}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h3 class="footer-item-title text-lg footer-title text-gray-400 font-bold">More on The ${u.title}</h3>
            <ul class="space-y-3 mt-4">
              ${u.items.map((c,m)=>`<li class="footer-item w-fit"><a class="hover:underline" href=${u.links[m]}>${c}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h3 class="footer-item-title text-lg footer-title text-amber-200 font-bold">More on The ${u.title}</h3>
            <ul class="space-y-3 mt-4">
              ${u.items.map((c,m)=>`<li class="footer-item hover:underline"><a href=${u.links[m]}>${c}</a></li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    `}}function s(t){let e=t.toLowerCase();switch(!0){case e.includes("instagram"):return`<svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
              </svg>`;case e.includes("facebook"):return`<svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>`;case e.includes("x.com"):return`<svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
               <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>`;case e.includes("t.me"):return`<svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
              </svg>`;case e.includes("youtube"):return`<svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>`;case e.includes("whatsapp"):return`<svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>`;case e.includes("linkedin"):return`<svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>`;default:return""}}customElements.define("footer-type-1",r),customElements.define("footer-type-2",a),customElements.define("footer-type-3",o)}const L=document.querySelector("#show-more"),p=document.querySelector("#show-more__button");p.addEventListener("click",()=>{p.textContent=p.textContent==="Show More"?"Show Less":"Show More",L.classList.toggle("active")});const $=document,f=$.querySelector("#KIUI-typewriter");let x=null,b=null;function M(n=[],r=100,a=1e3){let o=0,s=0;function t(){const i=n[o];x=setInterval(()=>{f.textContent+=i[s],s++,s>=i.length&&(clearInterval(x),setTimeout(()=>e(),a))},r)}function e(){const i=n[o];b=setInterval(()=>{s--,f.textContent=i.slice(0,s),s<=0&&(clearInterval(b),o=(o+1)%n.length,setTimeout(()=>t(),a))},r)}t()}window.initKIUITypeWriter=M;window.initHeader=y;window.initFooter=k;
