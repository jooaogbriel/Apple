import { Container } from "./styles"

import cardOne from '../../ImagesContainerOne/cardOne.jpeg'
import cardTwo from '../../ImagesContainerOne/cardTwo.jpeg'
import cardThree from '../../ImagesContainerOne/cardThree.jpeg'
import cardFour from '../../ImagesContainerOne/cardFour.jpeg'
import cardFive from '../../ImagesContainerOne/cardFive.jpeg'
import cardSix from '../../ImagesContainerOne/cardSix.jpeg'
import cardSeven from '../../ImagesContainerOne/cardSeven.jpeg'
import cardEigth from '../../ImagesContainerOne/cardEigth.jpeg'
import cardNine from '../../ImagesContainerOne/cardNine.jpeg'
import cardTen from '../../ImagesContainerOne/cardTen.png'


export const News = () => {
    return (
        <Container>
            
            <div className="textNews">
                <h2><span>As novidadese. </span>Veja o que acabou de chegar.</h2>
            </div>
          
            <div className="cards">
            <div className="Scrolbar">
                <div className="cards-info">
                    <label>É SÓ ATÉ 13/03</label>
                    <h1>Última chance de os AirPods entrarem na turma.</h1>
                    <figcaption>Economize em um Mac ou iPad com o desconto para educação**. É só até 13/03***.</figcaption>
                    <img src={cardOne} alt="" />
                </div>
            </div>

            <div className="Scrolbar">
                <label>PULSEIRA BLACK UNITY</label>
                <h1>Criatividade e comunidade entrelaçadas</h1>
                <p>R$ 499</p>
                <img src={cardTwo} alt="" />
            </div>

            <div className="Scrolbar">
                <label>IPHONE 14</label>
                <h1>Grande e grandão</h1>
                <p>A partir de R$ 7.599</p>
                <img src={cardThree} alt="" />
            </div>

            <div className="Scrolbar">
                <label>MACBOOK PRO DE 14 E 16 POL.</label>
                <h1>Desbrava fronteiras.</h1>
                <h1>Derruba barreiras.</h1>
                <p>A partir de R$ 23.999</p>
                <img src={cardFour} alt="" />
            </div>

            <div className="Scrolbar">
                <label>MAC MINI</label>
                <h1>Mais músculos. Mais célebro</h1>
                <p>A partir de R$ 7.499</p>
                <img src={cardFive} alt="" />
            </div>

            <div className="Scrolbar">
                <label>IPHONE 14 PRO.</label>
                <h1>Pro. E além</h1>
                <p>A partir de R$ 9.499.</p>
                <img src={cardSix} alt="" />
            </div>

            <div className="Scrolbar">
                <label>APPLE WATCH SERIES 8</label>
                <h1>Um grande salto para sua saúde.</h1>
                <p>A partir de R$ 5.299</p>
                <img src={cardSeven} alt="" />
            </div>

            <div className="Scrolbar">
                <label>IPAD</label>
                <h1>Inspira. Desenha. Diverte.</h1>
                <p>A partir de R$ 5.299</p>
                <img src={cardEigth} alt="" />
            </div>

            <div className="Scrolbar">
                <label>IPAD PRO</label>
                <h1>Com a potência do M2.</h1>
                <p>A partir de R$ 9.799</p>
                <img src={cardNine} alt="" />
            </div>

            <div className="Scrolbar">
                <label>APPLE WATCH ULTRA</label>
                <h1>A aventura te espera.</h1>
                <p>A partir de R$ 10.299</p>
                <img src={cardTen} alt="" />
            </div>
            </div>
           
        </Container>
    )
}