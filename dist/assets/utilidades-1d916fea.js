(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const n=[{id:"1",marca:"Picky Kitty",nome:"Ilustração Pássaro Laranja",preco:70,imagem:"product-1",tipo:"Quadro Mdf",cardbrinde:!0},{id:"2",marca:"Picky Kitty",nome:"Ilustração Corvo Amigável",preco:85,imagem:"product-2",tipo:"Retrato Portátil",cardbrinde:!1},{id:"3",marca:"Picky Kitty",nome:"Ilustração Gato Preto Círculo",preco:100,imagem:"product-3",tipo:"Quadro Mdf",cardbrinde:!0},{id:"4",marca:"Picky Kitty",nome:"Ilustração Gato Preto Janela",preco:120,imagem:"product-4",tipo:"Quadro Digital",cardbrinde:!1},{id:"5",marca:"Picky Kitty",nome:"Ilustração Cachorro Salsicha",preco:110,imagem:"product-5",tipo:"Quadro Mdf",cardbrinde:!0},{id:"6",marca:"Picky Kitty",nome:"Ilustração Florzinha Clean",preco:85,imagem:"product-6",tipo:"Retrato Portátil",cardbrinde:!1},{id:"7",marca:"Picky Kitty",nome:"Ilustração Calopsita Folhagem",preco:80,imagem:"product-7",tipo:"Quadro Mdf",cardbrinde:!0},{id:"8",marca:"Picky Kitty",nome:"Ilustração Vaso de Flor",preco:65,imagem:"product-8",tipo:"Quadro Digital",cardbrinde:!1}];function d(o,a){localStorage.setItem(o,JSON.stringify(a))}function u(o){return JSON.parse(localStorage.getItem(o))}function m(o){localStorage.removeItem(o)}function p(o,a,c){const r=n.find(s=>s.id===o),e=document.getElementById(a),t=document.createElement("article"),i=["flex","bg-stone-200","rounded-lg","p-1","relative","mb-2","w-96"];for(const s of i)t.classList.add(s);const l=`
        <img
          src="./assets/img/${r.imagem}.jpg"
          alt="Carrinho: ${r.nome}"
          class="h-24 rounded-lg"
        />
        <div class="p-2 flex flex-col justify-between">
          <p class="text-slate-900 text-sm">
            ${r.nome}
          </p>
          <p class="text-slate-400 text-xs">${r.tipo}</p>
          <p class="text-green-700 text-lg">$${r.preco}</p>
        </div>
        <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
            <p id='quantidade-${r.id}' class='ml-2'>${c}</p>
        </div>`;t.innerHTML=l,e.appendChild(t)}export{m as a,n as c,p as d,u as l,d as s};
