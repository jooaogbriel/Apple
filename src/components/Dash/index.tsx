import { Container } from "./styles"
import iconPeaple from '../../icons/iconPeaple.jpeg'
import iconApple from '../../icons/iconApple.webp'

export const Dash = () => {
    return (
        <>
            <Container>
                <h1>Loja. O melhor jeito de comprar o que você ama.</h1>
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
                </div>
            </Container>
        </>
    )
}