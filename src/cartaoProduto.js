import { catalogo } from "./utilidades";
import { adicionarAoCarrinho, atualizarPrecoCarrinho, atualizarInformacaoQuantidade} from "./menuCarrinho";

export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="border-solid rounded-lg w-64 p-4 space-y-2 flex flex-col justify-between shadow-xl shadow-slate-400 group ${produtoCatalogo.cardbrinde ? 'brinde-disponível':'alterar-sob-demanda'}" id="card-produto-${produtoCatalogo.id}">
        <img 
            src="./assets/img/${produtoCatalogo.imagem}.jpg"
            alt="${produtoCatalogo.nome}"
            class="h-auto group-hover:scale-110 duration 300 my-3 rounded-lg"
        />
        <p class="text-sm">${produtoCatalogo.marca}</p>
        <p class="text-base font-semibold">${produtoCatalogo.nome}</p>
        <p class="text-base font-semibold">R$${produtoCatalogo.preco}</p>
        <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700 border-1 rounded-md"><i class="fa-solid fa-cart-plus fa-lg"></i></button>
        </div>`;
    
        document.getElementById("container-produto").innerHTML += cartaoProduto;
      }
}

export function botaoAdicionarCarrinho() {for (const produtoCatalogo of catalogo){

    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => {
        adicionarAoCarrinho(produtoCatalogo.id);
        atualizarPrecoCarrinho();
        atualizarInformacaoQuantidade(idProduto);
      });
}
}


  