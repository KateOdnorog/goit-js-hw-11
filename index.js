import{a as h,S as y,i as l}from"./assets/vendor-CiduK07e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function v(a){const r={params:{key:"48902989-5d77fe06f72350c30855133ec",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}};return h.get("https://pixabay.com/api/",r)}function L(a){const r={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function s(i){const{webformatURL:c,largeImageURL:d,tags:u,likes:f,views:m,comments:p,downloads:g}=i;return`<li class="gallery-item">
          <a class="gallery-link" href="${d}">
            <img class="gallery-image" src="${c}" alt="${u}"/>
          </a>
          <div class="gallery-list-container">
            <div class="field">
              <span class="name-field">Likes</span>
              <span class="value">${f}</span>
            </div>
            <div class="field">
              <span class="name-field">Views</span>
              <span class="value">${m}</span>
            </div>
            <div class="field">
              <span class="name-field">Comments</span>
              <span class="value">${p}</span>
            </div>
            <div class="field">
              <span class="name-field">Downloads</span>
              <span class="value">${g}</span>
            </div>
          </div>
          </li>
`}function o(i){return i.map(s).join("")}const e=o(a);r.list.insertAdjacentHTML("afterbegin",e),new y(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh(),r.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};n.form.addEventListener("submit",S);function S(a){a.preventDefault();const r=n.input.value.trim();if(r==="")return l.warning({position:"topRight",title:"WARN",message:"You have not specified any search parameters."});q(),b(),v(r).then(s=>{if(s.data.hits.length===0)return l.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});L(s.data.hits)}).catch(s=>l.error({title:"ERROR",message:`Error fetching images: ${s}`,position:"topRight"})),R(),a.target.reset()}function b(){n.loader.classList.add("hidden")}function R(){n.loader.classList.remove("hidden")}function q(){n.gallery.innerHTML=""}
//# sourceMappingURL=index.js.map
