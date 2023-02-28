import { Container } from "./styles"

import iconPeaple from '../../icons/iconPeaple.jpeg'
import iconApple from '../../icons/iconApple.webp'

import mac from '../../images/mac.png'
import iphone from '../../images/iphone.png'
import ipad from '../../images/ipad.png'
import watch from '../../images/watch.png'
import pods from '../../images/pods.png'
import airtag from '../../images/airtag.png'
import tv from '../../images/tv.png'
import accesories from '../../images/accessories.png'

export const Dash = () => {
    return (
        <>
            <Container>
                <div className="textDashboard">
                    <h1>Loja. O melhor jeito de comprar o que você ama.</h1>
                </div>
               
                <div className="aside">
                    <div className="asideOne">
                        <img className="asideOne-Image" src={iconPeaple} alt="" />
                        <div className="asideOne-Text">
                            <a>Precisa de ajuda para comprar?</a>
                            <a>Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="asideOne">
                        <img className="asideOne-Img" src={iconApple} alt="" />
                        <div className="asideOne-Text">
                            <a>Visite uma Apple Store</a>
                            <a>Procure uma loja perto de você {'>'}</a>
                        </div>
                    </div>
                    <div className="asideAfter">
                        <img src={mac} alt="" />
                        <img src={iphone} alt="" />
                        <img src={ipad} alt="" />
                        <img src={watch} alt="" />
                        <img src={pods} alt="" />
                        <img src={airtag} alt="" />
                        <img src={tv} alt="" />
                        <img src={accesories} alt="" />
                    </div>

                </div>
            </Container>
        </>
    )
}