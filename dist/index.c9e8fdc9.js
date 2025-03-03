/*!
 * Minimal theme switcher using a checkbox
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2025 - Licensed under MIT
 * Modified by Yohn https://github.com/Yohn/PicoCSS
 */({_scheme:"auto",toggleSelector:"input[name='color-mode-toggle']",rootAttribute:"data-theme",localStorageKey:"picoPreferredColorScheme",init(){if(this.checkbox=document.querySelector(this.toggleSelector),!this.checkbox){console.error("Theme switcher toggle not found");return}this.scheme=this.schemeFromLocalStorage??this.schemeFromHTML,this.checkbox.checked="dark"===this.scheme,this.checkbox.addEventListener("change",()=>{this.scheme=this.checkbox.checked?"dark":"light",this.schemeToLocalStorage()})},get schemeFromLocalStorage(){return window.localStorage?.getItem(this.localStorageKey)},get schemeFromHTML(){return document.documentElement.getAttribute(this.rootAttribute)??"auto"},get preferredColorScheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},set scheme(scheme){"auto"===scheme?this._scheme=this.preferredColorScheme:("dark"===scheme||"light"===scheme)&&(this._scheme=scheme),this.applyScheme()},get scheme(){return this._scheme},applyScheme(){document.documentElement.setAttribute(this.rootAttribute,this._scheme)},schemeToLocalStorage(){window.localStorage?.setItem(this.localStorageKey,this.scheme)}}).init();
//# sourceMappingURL=index.c9e8fdc9.js.map
