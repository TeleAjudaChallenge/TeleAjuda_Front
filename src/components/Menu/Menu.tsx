import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            {/* Adicionamos as classes de estilo ao <ul> */}
            <ul className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-gray-900/10 rounded-full p-2">
                <li><Link to={"/"} className="text-black hover:text-gray-600">Home</Link></li>
                <li><Link to={"/chamados"} className="text-black hover:text-gray-600">Chamados</Link></li>
                <li><Link to={"/contato"} className="text-black hover:text-gray-600">Contato</Link></li>
                <li><Link to={"/pesquisa"} className="text-black hover:text-gray-600">Pesquisa</Link></li>
                <li><Link to={"/sobre"} className="text-black hover:text-gray-600">Sobre</Link></li>
            </ul>
        </nav>
    )
}