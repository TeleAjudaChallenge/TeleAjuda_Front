import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/chamados"}>Chamados</Link></li>
                <li><Link to={"/contato"}>Contato</Link></li>
                <li><Link to={"/pesquisa"}>Pesquisa</Link></li>
                <li><Link to={"/sobre"}>Sobre</Link></li>
            </ul>
        </nav>
    )
}