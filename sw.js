if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const a=e=>n(e,r),u={module:{uri:r},exports:t,require:a};s[r]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(l(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Cigarettes-10e85d3d.png",revision:null},{url:"assets/Computer-b4ca7750.png",revision:null},{url:"assets/index-db824706.js",revision:null},{url:"assets/index-fb877e3c.css",revision:null},{url:"assets/logo-ecc203fb.svg",revision:null},{url:"assets/Map1-66a35908.png",revision:null},{url:"assets/Map2-baab6045.png",revision:null},{url:"assets/Map3-7a563da6.png",revision:null},{url:"assets/Map3Triangulating-438c9d0e.png",revision:null},{url:"assets/Map4-7e09f052.png",revision:null},{url:"assets/pencil-f8a51d9a.svg",revision:null},{url:"assets/PUCK-ab5d6f09.png",revision:null},{url:"assets/settings-33942631.svg",revision:null},{url:"assets/Wallet-edeed7c1.png",revision:null},{url:"index.html",revision:"9b1920b1c9e8c1c6e0b10c87200689cc"},{url:"registerSW.js",revision:"8d6ae81a4fae920b9ab459db0c69ab69"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"69916656f86ebd778324739271d89db4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
