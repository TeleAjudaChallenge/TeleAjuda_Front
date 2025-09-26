import Menu from "../Menu/Menu";
import logo from '/src/assets/img/LogoTeleAjuda.png';
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <header className="bg-gray-100 p-6 flex justify-between items-center shadow-lg relative">
            <Link to={"/"}>
                {/* Adicionamos a classe h-24 para aumentar a altura do logo */}
                <img src={logo} alt="Logo da TeleAjuda IMREA" className="h-24" /> 
            </Link>
            <Menu/>
        </header>
    )
}