import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";


const idsProdutosCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho(){
    document.getElementById('carrinho').classList.add('right-[0px]');
    document.getElementById('carrinho').classList.remove('right-[-360px]');
}

function fecharCarrinho(){
    document.getElementById('carrinho').classList.remove('right-[0px]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

function irParaCheckout() {
  if (Object.keys(idsProdutosCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const botaoIrParaCheckout = document.getElementById("finalizar-compra");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoIrParaCheckout.addEventListener("click", irParaCheckout, () =>{atualizarPrecoCarrinho;});
}

export function atualizarInformacaoQuantidade(idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutosCarrinhoComQuantidade[idProduto];
  return;  
}

function removerDoCarrinho(idProduto){
  delete idsProdutosCarrinhoComQuantidade[idProduto];
  salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade);
  renderizarProdutosCarrinho();
  atualizarPrecoCarrinho();
  
}

function incrementarQuantidadeProduto(idProduto){
    idsProdutosCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade);
    atualizarInformacaoQuantidade(idProduto); 
    atualizarPrecoCarrinho();
}

function decrementarQuantidadeProduto(idProduto){
    if(idsProdutosCarrinhoComQuantidade[idProduto] === 1){
      removerDoCarrinho(idProduto);
      return;
    }
      idsProdutosCarrinhoComQuantidade[idProduto]--;
      salvarLocalStorage("carrinho", idsProdutosCarrinhoComQuantidade); 
      atualizarInformacaoQuantidade(idProduto); 
      atualizarPrecoCarrinho();       
}

function desenharProdutosNoCarrinho(idProduto){
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');

  const elementoArticle = document.createElement('article');
  const articleClasses = ['bg-slate-200','flex','p-4','border-1','rounded-lg', 'relative'];

  for (const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `<button class="absolute top-0 right-2" id="remover-item-${produto.id}">
    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900"></i>
  </button>
  <img src="./assets/img/${produto.imagem}.jpg" 
  alt="Carrinho: ${produto.nome}"
  class="h-20 border-1 rounded-md"/>
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">${produto.nome}</p>
    <p class="text-slate-500 text-xs">${produto.tipo}</p>
    <p class="text-green-700 text-lg">R$${produto.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg"> 
    <button class="ml-2" id="decrementar-produto-${produto.id}"><i class="fa-solid fa-square-minus fa-xs"></i></button>
    <p class="ml-2" id="quantidade-${idProduto}">${idsProdutosCarrinhoComQuantidade[produto.id]}</p>
    <button class="ml-2" id="incrementar-produto-${produto.id}"><i class="fa-solid fa-square-plus fa-xs"></i></i></button>
  </div>`;

  elementoArticle.innerHTML += cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click',() => incrementarQuantidadeProduto(produto.id));

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click',() => decrementarQuantidadeProduto(produto.id));

  document.getElementById(`remover-item-${produto.id}`).addEventListener('click',() => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho(){
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutosCarrinhoComQuantidade){
    desenharProdutosNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto){
    if(idProduto in idsProdutosCarrinhoComQuantidade){
      incrementarQuantidadeProduto(idProduto);
      return;
    }
    idsProdutosCarrinhoComQuantidade[idProduto] = 1;
    desenharProdutosNoCarrinho(idProduto);

}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for (const idProdutoNoCarrinho in idsProdutosCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *
      idsProdutosCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: R$${precoTotalCarrinho}`;
}