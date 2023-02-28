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
                <div className="main">
                <div className="textDashboard">
                    <h1><span>Loja. </span>O melhor jeito de comprar o que você ama.</h1>
                </div>
               
                <div className="aside">
                    <div className="asideOne">
                        <img className="asideOne-Image" src={iconPeaple} alt="" />
                        <div className="asideOne-Text">
                            <a>Precisa de ajuda para comprar?</a>
                            <a className="link" >Fale com um especialista</a>
                        </div>
                    </div>
                    <div className="asideOne">
                        <img className="asideOne-Img" src={iconApple} alt="" />
                        <div className="asideOne-Text">
                            <a>Visite uma Apple Store</a>
                            <a className="link" >Procure uma loja perto de você {'>'}</a>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="asideAfter">
                        <div className="asideAfter-text">
                            <img className="imageDash" src={mac} alt="" />
                            <p>Mac</p>
                        </div>

                        <div className="asideAfter-text">
                            <img className="imageDash"  src={iphone} alt="" />
                            <p>iPhone</p>
                        </div>

                        <div className="asideAfter-text">
                            <img className="imageDash" src={ipad} alt="" />
                            <p>iPad</p>
                        </div>

                        <div className="asideAfter-text">
                            <img className="imageDash" src={watch} alt="" />
                            <p>Apple Watch</p>
                        </div>

                        <div className="asideAfter-text">
                            <img className="imageDash" src={pods} alt="" />
                            <p>AirPods</p>
                        </div>

                        <div className="asideAfter-text">
                            <img className="imageDash" src={airtag} alt="" />
                            <p>AirTag</p>
                        </div>

                        <div className="asideAfter-text">
                            <img className="imageDash" src={tv} alt="" />
                            <p>Apple TV 4K</p>
                        </div>

                       <div className="asideAfter-text">
                            <img className="imageDash" src={accesories} alt="" />
                            <p>Acessórios</p>
                       </div>
                        
                    </div>
            </Container>
        </>
    )
}