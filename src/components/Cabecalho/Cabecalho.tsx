import Menu from "../Menu/Menu";
import logo from '/src/assets/img/LogoTeleAjuda.png';
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <header className="bg-primary text-white p-4 flex justify-between items-center">
            <Link to={"/"}>
                <img src={logo} alt="Logo da TeleAjuda IMREA" className="h-12" />
            </Link>
            <Menu/>
        </header>
    )
}