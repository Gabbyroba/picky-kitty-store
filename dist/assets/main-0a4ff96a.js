import{l as x,c as a,s}from"./utilidades-1d916fea.js";const o=x("carrinho")??{};function E(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function C(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function y(){Object.keys(o).length!==0&&(window.location.href="./checkout.html")}function v(){const e=document.getElementById("fechar-carrinho"),t=document.getElementById("abrir-carrinho"),n=document.getElementById("finalizar-compra");e.addEventListener("click",C),t.addEventListener("click",E),n.addEventListener("click",y,()=>{})}function c(e){document.getElementById(`quantidade-${e}`).innerText=o[e]}function u(e){delete o[e],s("carrinho",o),h(),i()}function f(e){o[e]++,s("carrinho",o),c(e),i()}function $(e){if(o[e]===1){u(e);return}o[e]--,s("carrinho",o),c(e),i()}function p(e){const t=a.find(d=>d.id===e),n=document.getElementById("produtos-carrinho"),r=document.createElement("article"),g=["bg-slate-200","flex","p-4","border-1","rounded-lg","relative"];for(const d of g)r.classList.add(d);const b=`<button class="absolute top-0 right-2" id="remover-item-${t.id}">
    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900"></i>
  </button>
  <img src="./assets/img/${t.imagem}.jpg" 
  alt="Carrinho: ${t.nome}"
  class="h-20 border-1 rounded-md"/>
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">${t.nome}</p>
    <p class="text-slate-500 text-xs">${t.tipo}</p>
    <p class="text-green-700 text-lg">R$${t.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg"> 
    <button class="ml-2" id="decrementar-produto-${t.id}"><i class="fa-solid fa-square-minus fa-xs"></i></button>
    <p class="ml-2" id="quantidade-${e}">${o[t.id]}</p>
    <button class="ml-2" id="incrementar-produto-${t.id}"><i class="fa-solid fa-square-plus fa-xs"></i></i></button>
  </div>`;r.innerHTML+=b,n.appendChild(r),document.getElementById(`incrementar-produto-${t.id}`).addEventListener("click",()=>f(t.id)),document.getElementById(`decrementar-produto-${t.id}`).addEventListener("click",()=>$(t.id)),document.getElementById(`remover-item-${t.id}`).addEventListener("click",()=>u(t.id))}function h(){const e=document.getElementById("produtos-carrinho");e.innerHTML="";for(const t in o)p(t)}function B(e){if(e in o){f(e);return}o[e]=1,p(e)}function i(){const e=document.getElementById("preco-total");let t=0;for(const n in o)t+=a.find(r=>r.id===n).preco*o[n];e.innerText=`Total: R$${t}`}function L(){for(const e of a){const t=`<div class="border-solid rounded-lg w-64 p-4 space-y-2 flex flex-col justify-between shadow-xl shadow-slate-400 group ${e.cardbrinde?"brinde-disponível":"alterar-sob-demanda"}" id="card-produto-${e.id}">
        <img 
            src="./assets/img/${e.imagem}.jpg"
            alt="${e.nome}"
            class="h-auto group-hover:scale-110 duration 300 my-3 rounded-lg"
        />
        <p class="text-sm">${e.marca}</p>
        <p class="text-base font-semibold">${e.nome}</p>
        <p class="text-base font-semibold">R$${e.preco}</p>
        <button id="adicionar-${e.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700 border-1 rounded-md"><i class="fa-solid fa-cart-plus fa-lg"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=t}}function I(){for(const e of a)document.getElementById(`adicionar-${e.id}`).addEventListener("click",()=>{B(e.id),i(),c(idProduto)})}const l=document.getElementById("container-produto");function m(){const e=Array.from(l.getElementsByClassName("hidden"));for(const t of e)t.classList.remove("hidden")}function k(){m();const e=Array.from(l.getElementsByClassName("alterar-sob-demanda"));for(const t of e)t.classList.add("hidden")}function T(){m();const e=Array.from(l.getElementsByClassName("brinde-disponível"));for(const t of e)t.classList.add("hidden")}function w(){document.getElementById("exibir-todos").addEventListener("click",m),document.getElementById("exibir-com-brinde").addEventListener("click",k),document.getElementById("exibir-sob-demanda").addEventListener("click",T)}L();v();h();I();w();
