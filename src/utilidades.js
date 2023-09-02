export const catalogo = [{ 
    id: "1", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Pássaro Laranja', 
    preco: 70, 
    imagem: 'product-1',
    tipo:'Quadro Mdf',
    cardbrinde: true
   },     
{   id: "2", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Corvo Amigável', 
    preco: 85, 
    imagem: 'product-2',
    tipo:'Retrato Portátil',
    cardbrinde: false},
 { id: "3", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Gato Preto Círculo', 
    preco: 100, 
    imagem: 'product-3',
    tipo:'Quadro Mdf',
    cardbrinde: true}, 
 { id: "4", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Gato Preto Janela', 
    preco: 120, 
    imagem: 'product-4',
    tipo:'Quadro Digital',
    cardbrinde: false}, 
 { id: "5", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Cachorro Salsicha', 
    preco: 110, 
    imagem: 'product-5',
    tipo:'Quadro Mdf',
    cardbrinde: true},
 { id: "6", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Florzinha Clean', 
    preco: 85, 
    imagem: 'product-6',
    tipo:'Retrato Portátil',
    cardbrinde: false
    }, 
 { id: "7", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Calopsita Folhagem', 
    preco: 80, 
    imagem: 'product-7',
    tipo:'Quadro Mdf',
    cardbrinde: true 
     }, 
 {  id: "8", 
    marca: 'Picky Kitty', 
    nome: 'Ilustração Vaso de Flor', 
    preco: 65, 
    imagem: 'product-8',
    tipo:'Quadro Digital',
    cardbrinde: false 
    }]

   export function salvarLocalStorage(chave, informacao){
      localStorage.setItem(chave, JSON.stringify(informacao));
    }

    export function lerLocalStorage(chave){
      return JSON.parse(localStorage.getItem(chave));
    }

    export function apagarDoLocalStorage(chave){
      localStorage.removeItem(chave);
    }

    export function desenharProdutoCarrinhoSimples(
      idProduto,
      idContainerHtml,
      quantidadeProduto
    ) {
      const produto = catalogo.find((p) => p.id === idProduto);
      const containerProdutosCarrinho = document.getElementById(idContainerHtml);
    
      const elementoArticle = document.createElement("article"); 
      const articleClasses = [
        "flex",
        "bg-stone-200",
        "rounded-lg",
        "p-1",
        "relative",
        "mb-2",
        "w-96",
      ];
    
      for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
      }
     
    
      const cartaoProdutoCarrinho = `
        <img
          src="./assets/img/${produto.imagem}.jpg"
          alt="Carrinho: ${produto.nome}"
          class="h-24 rounded-lg"
        />
        <div class="p-2 flex flex-col justify-between">
          <p class="text-slate-900 text-sm">
            ${produto.nome}
          </p>
          <p class="text-slate-400 text-xs">${produto.tipo}</p>
          <p class="text-green-700 text-lg">$${produto.preco}</p>
        </div>
        <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
            <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
        </div>`;
      
    
      elementoArticle.innerHTML = cartaoProdutoCarrinho;
      containerProdutosCarrinho.appendChild(elementoArticle);
    }