import { Container } from "./styles";
import MenuMobile from "../MenuMobile";

import apple from '../../icons/iconapple.svg' 
import search from '../../icons/search.svg'
import bag from '../../icons/bag.png'

export const Header = () => {
    return (
        <Container>
            <header>
                <nav>
                    <ul>
                        <li><img src={apple} alt="" /></li>
                        <li>Loja</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>AirPods</li>
                        <li>TV e Casa</li>
                        <li>Entretenimento</li>
                        <li>Acessórios</li>
                        <li>Suporte</li>
                        <li><img src={search} alt="" /></li>
                        <li><img src={bag} alt="" /></li>
                    </ul>
                </nav>
            </header>
            {/* {menuOpen && (
        <div className="menuMobileHeader">
          <MenuMobile />
        </div>
      )} */}
        </Container>
    )
}