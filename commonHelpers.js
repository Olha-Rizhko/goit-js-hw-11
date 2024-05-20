import{i as o,S as y}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="43969100-31d832a553472532b672b1645",g="https://pixabay.com/api/",d=a=>{const s=new URLSearchParams({key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${g}?${s}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})},p=a=>a.reduce((s,{tags:r,webformatURL:i,largeImageURL:e,likes:t,views:l,comments:m,downloads:u})=>s+`
			<li class="gallery-item item-gallery">
				<a class="item-gallery-link" href="${e}">
					<img class="item-gallery-img" src="${i}" alt="${r}">
				</a>
				<ul class="item-gallery-data">
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Likes</h2>
						<p class="item-gallery-counter">${t}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Views</h2>
						<p class="item-gallery-counter">${l}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Comments</h2>
						<p class="item-gallery-counter">${m}</p>
					</li>
					<li class="item-gallery-data-item">
						<h2 class="item-gallery-subtitle">Downloads</h2>
						<p class="item-gallery-counter">${u}</p>
					</li>
				</ul>
			</li>
		`,""),c=document.querySelector(".js-gallery"),f=document.querySelector(".js-search-form"),n=document.querySelector(".js-loader");function L(a){a.preventDefault();const s=a.target.elements.searchword.value.trim();if(c.innerHTML="",s==="")return o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});n.classList.remove("is-hidden"),d(s).then(r=>{r.hits.length===0&&o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML=p(r.hits),new y(".item-gallery-link",{captionsData:"alt",captionsDelay:250})}).catch(r=>console.log(r)).finally(()=>{a.target.reset(),n.classList.add("is-hidden")})}f.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
