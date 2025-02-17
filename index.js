import{a as y,S as h,i as l}from"./assets/vendor-CiduK07e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function v(a){const s={params:{key:"48902989-5d77fe06f72350c30855133ec",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}};return y.get("https://pixabay.com/api/",s)}function L(a){const s={list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function i(r){const{webformatURL:c,largeImageURL:d,tags:u,likes:m,views:f,comments:p,downloads:g}=r;return`<li class="gallery-item">
          <a class="gallery-link" href="${d}">
            <img class="gallery-image" src="${c}" alt="${u}"/>
          </a>
          <div class="gallery-list-container">
            <div class="field">
              <span class="name-field">Likes</span>
              <span class="value">${m}</span>
            </div>
            <div class="field">
              <span class="name-field">Views</span>
              <span class="value">${f}</span>
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
`}function o(r){return r.map(i).join("")}const e=o(a);s.list.insertAdjacentHTML("afterbegin",e),new h(".gallery a",{captionsData:"alt",animationSpeed:250}).refresh(),s.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),input:document.querySelector(".input-field"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};n.loader.classList.add("hidden");n.form.addEventListener("submit",S);function S(a){a.preventDefault();const s=n.input.value;if(s==="")return l.error({position:"topRight",title:"ERROR",message:"You have not specified any search parameters."});n.loader.classList.remove("hidden"),v(s).then(i=>{n.gallery.innerHTML="",L(i.data.hits)}).catch(i=>{l.error({title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}),a.target.reset()}
//# sourceMappingURL=index.js.map
