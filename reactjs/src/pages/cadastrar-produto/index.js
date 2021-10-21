import { Container } from "./styled";

export default function CadastrarProduto () {
    return (
        <Container>

            <h1>ADICIONAR PRODUTO</h1>
            <div className="box-cadastro">
                        
                        <div className="box-info">

                                <div className="identificacao">
                                    <div class="id">
                                        ID DO PRODUTO:
                                        <input type="text"/>
                                    </div>

                                    <div className="cd-interno">
                                        CÓDIGO DO PRODUTO:
                                        <input type="text"/>
                                    </div>
                                </div>

                                <div className="dados">
                                    <div className="nome">
                                        NOME DO PRODUTO:
                                        <input type="text"/>
                                    </div>

                                    <div className="preco">
                                        PREÇO DO PRODUTO
                                        <input type="text"/>
                                    </div>
                                </div>

                                <div className="opcoes">

                                    <div className="sexo">
                                        SEXO:
                                        <select name="sexo" placeholder="SELECIONE">
                                            <option selected>SELECIONE</option>
                                            <option>FEMININO</option>
                                            <option>MASCULINO</option>
                                        </select>
                                    </div>
                                    <div className="cores">
                                        CORES:
                                        <input type="text"/>
                                    </div>
                                </div>

                                <div className="opcoes2">

                                    <div className="categoria">
                                        CATEGORIA:
                                        <select name="sexo" placeholder="SELECIONE">
                                            <option selected>SELECIONE</option>
                                            <option>FEMININO</option>
                                            <option>MASCULINO</option>
                                        </select>
                                    </div>

                                    <div className="cores">
                                        TAMANHOS:
                                        <input type="text"/>
                                    </div>
                                </div>

                                <div className="link">
                                    IMAGEM DO PRODUTO:
                                    <input type="text"/>
                                </div>

                                <div className="descricao">
                                    DESCRIÇÃO:
                                    <textarea/>
                                </div>
                        </div>

                        <div className="box-acoes">
                            <div className="imagem">
                                <img src="./public/assets/images/aaa.png" alt=""/>
                            </div>

                            <div className="cadastrar">
                                <button>
                                    <span>CADASTRAR</span>
                                </button>
                            </div>

                            <div className="cancelar">
                                <button>
                                    <span>CANCELAR</span>
                                </button>
                            </div>

                        </div>
            </div>
        </Container>
    )
}