import { lerLocalStorage, desenharProdutoCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData){
    
    const elementoPedido = `<p class="text-xl font-bold my-4"> ${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit'
    })}</p> 
    <section class="bg-stone-300 p-3 rounded-lg shadow-lg shadow-slate-400" id='historico-container-pedidos-${pedidoComData.dataPedido}'> </section>`;

    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for (const idProduto in pedidoComData.pedido){
        desenharProdutoCarrinhoSimples(idProduto, `historico-container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
} 


function renderizarHistoricoPedido(){
    const historico = lerLocalStorage('historico');

    for(const pedidoComData of historico){
        criarPedidoHistorico(pedidoComData);
    }
}

renderizarHistoricoPedido();