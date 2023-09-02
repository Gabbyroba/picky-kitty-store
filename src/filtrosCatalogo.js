const catalogoProdutos = document.getElementById('container-produto');

function exibirTodos(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for (const produto of produtosEscondidos){
        produto.classList.remove('hidden');
    }
}

function esconderSobdmanda(){
    exibirTodos();
    const produtosSobDemanda = Array.from(catalogoProdutos.getElementsByClassName('alterar-sob-demanda'));

    for (const produto of produtosSobDemanda){
        produto.classList.add('hidden');
    }
}

function esconderCombrinde(){
    exibirTodos();
    const produtosCombrinde = Array.from(catalogoProdutos.getElementsByClassName('brinde-disponível'));

    for (const produto of produtosCombrinde){
        produto.classList.add('hidden');
    }
}

export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
    document.getElementById('exibir-com-brinde').addEventListener('click', esconderSobdmanda);
    document.getElementById('exibir-sob-demanda').addEventListener('click', esconderCombrinde);
}