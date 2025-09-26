import Menu from "../Menu/Menu";
import logo from '/src/assets/img/LogoTeleAjuda.png';
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <header>
            <Link to={"/"}>
                <img src={logo} alt="Logo da TeleAjuda IMREA" /> 
            </Link>
            <Menu/>
        </header>
    )
}