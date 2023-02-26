import { Container } from "./styles";
import { useState } from "react";

const MenuMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
        <Container>
        <div className="options">
            <button>Loja</button>
            <button>Mac</button>
            <button>iPad</button>
            <button>iPhone</button>
            <button>Apple Watch</button>
            <button>AirPods</button>
            <button>TV e Casa</button>
            <button>Entretenimento</button>
            <button>Acessórios</button>
            <button>Suporte</button>
        </div>
        </Container>
    );
};

export default MenuMobile;