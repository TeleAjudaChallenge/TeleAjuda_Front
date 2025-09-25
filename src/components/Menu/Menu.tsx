import { Link } from "react-router-dom";
import { AiOutlineForm } from 'react-icons/ai';

export default function Menu(){
    return(
        <nav>
            <ul className="flex space-x-8">
                <li><Link to={"/"} className="hover:text-gray-400">Home</Link></li>
                <li className="flex gap-2 items-center"><Link to={"/chamados"} className="hover:text-gray-400">Chamados</Link> <Link to={"/chamados"} className="hover:text-gray-400"><AiOutlineForm/></Link></li>
                <li><Link to={"/contato"} className="hover:text-gray-400">Contato</Link></li>
                <li><Link to={"/pesquisa"} className="hover:text-gray-400">Pesquisa</Link></li>
                <li><Link to={"/sobre"} className="hover:text-gray-400">Sobre</Link></li>
            </ul>
        </nav>
    )
}