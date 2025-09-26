import Menu from "../Menu/Menu";
import logo from '/src/assets/img/LogoTeleAjuda.png';
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        // Adicionamos as classes de layout e estilo aqui
        <header className="bg-gray-100 p-6 flex justify-between items-center shadow-lg relative">
            <Link to={"/"}>
                <img src={logo} alt="Logo da TeleAjuda IMREA" /> 
            </Link>
            <Menu/>
        </header>
    )
}