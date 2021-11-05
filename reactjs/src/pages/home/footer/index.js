import {Container} from './styled'
import {Link} from 'react-router-dom'

export default function Rodapé () {
    return (
        <Container>

            <div className="container">

                <div class="box-cartao">
                    <div class="opcoes"><img src="./assets/images/receipt.svg" alt="" /></div>
                    <div class="opcoes"><img src="./assets/images/logo-pix.png" alt="" /></div>
                    <div class="opcoes"><img src="./assets/images/elo.svg" alt="" /></div>
                    <div class="opcoes"><img src="./assets/images/hiper.svg" alt="" /></div>
                    <div class="opcoes"><img src="./assets/images/master.svg" alt="" /></div>
                    <div class="opcoes"><img src="./assets/images/visa.svg" alt="" /></div>
                </div>

                <div className="rodape">


                <div className="row1">
                    <h1>
                        Sobre a Destiny
                    </h1>

                    <div className="about-us">
                        <Link to="/sobre-nos">
                        QUEM SOMOS?
                        </Link>
                    </div>

                </div>

                <div className="row2">
                    <h1 className="contact">
                        Fale Conosco
                    </h1>
                    <div className="email">
                    Contato@destiny.com
                    </div>
                    
                    <div className="telefone">
                    0800-773-3475  
                    </div>
                </div>
            
                <div className="row3">
                    <h1>
                        REDES SOCIAIS
                    </h1>

                    <div className="icones">
                        <div className="fb">
                            <img src="./assets/images/Facebook-transparente.svg" alt=""/>
                        </div>
                    
                    
                    <div className="insta">
                        <img src="./assets/images/Instagram-transparente.svg" alt=""/>
                    </div>


                </div>
                </div>
                </div>
           </div>

        </Container>
    )
}