import{a as y,S as v,i as l}from"./assets/vendor-CiduK07e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function L(r){const s={params:{key:"48902989-5d77fe06f72350c30855133ec",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}};return y.get("https://pixabay.com/api/",s)}function S(r){const s={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function a(i){const{webformatURL:d,largeImageURL:u,tags:f,likes:m,views:p,comments:g,downloads:h}=i;return`<li class="gallery-item">
          <a class="gallery-link" href="${u}">
            <img class="gallery-image" src="${d}" alt="${f}"/>
          </a>
          <div class="gallery-list-container">
            <div class="field">
              <span class="name-field">Likes</span>
              <span class="value">${m}</span>
            </div>
            <div class="field">
              <span class="name-field">Views</span>
              <span class="value">${p}</span>
            </div>
            <div class="field">
              <span class="name-field">Comments</span>
              <span class="value">${g}</span>
            </div>
            <div class="field">
              <span class="name-field">Downloads</span>
              <span class="value">${h}</span>
            </div>
          </div>
          </li>
`}function o(i){return i.map(a).join("")}const e=o(r);s.list.insertAdjacentHTML("afterbegin",e),new v(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh(),s.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};n.form.addEventListener("submit",b);function b(r){r.preventDefault();const s=n.input.value.trim();if(s==="")return l.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."});q(),R(),L(s).then(a=>{a.data.hits.length===0&&l.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),S(a.data.hits)}).catch(a=>{c(),l.error({title:"ERROR",message:`Error fetching images: ${a}`,position:"topRight"})}),c(),r.target.reset()}function R(){n.loader.classList.add("hidden")}function c(){n.loader.classList.remove("hidden")}function q(){n.gallery.innerHTML=""}
//# sourceMappingURL=index.js.map
