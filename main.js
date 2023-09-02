import { botaoAdicionarCarrinho, renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarCarrinho, renderizarProdutosCarrinho} from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtrosCatalogo";

      renderizarCatalogo();
      inicializarCarrinho();
      renderizarProdutosCarrinho();
      botaoAdicionarCarrinho();
      inicializarFiltros();