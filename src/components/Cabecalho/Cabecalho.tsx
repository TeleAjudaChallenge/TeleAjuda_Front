import Menu from "../Menu/Menu";
import logo from '/src/assets/img/LogoTeleAjuda.png';
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <header className="bg-gray-100 p-6 flex justify-between items-center shadow-lg relative sticky top-0 z-50">
            <Link to={"/"}>
                <img src={logo} alt="Logo da TeleAjuda" className="h-24" /> 
            </Link>
            <Menu/>
        </header>
    )
}