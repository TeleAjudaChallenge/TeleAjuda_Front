import { Link } from 'react-router-dom';
import logo from '/src/assets/img/LogoTeleAjuda.png';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

export default function Rodape(){
    return(
        <footer className="footer-app">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Coluna 1: Logo e Descrição */}
                <div className="md:col-span-1">
                    <img src={logo} alt="Logo TeleAjuda" className="h-20 mb-4"/>
                    <p className="text-gray-600">
                        Reduzindo o absenteísmo em teleconsultas através de uma solução acessível e intuitiva.
                    </p>
                </div>

                {/* Coluna 2: Navegação */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Navegação</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-600 hover:text-[color:var(--color-primary)]">Página Inicial</Link></li>
                        <li><Link to="/chamados" className="text-gray-600 hover:text-[color:var(--color-primary)]">Abrir Chamado</Link></li>
                        <li><Link to="/sobre" className="text-gray-600 hover:text-[color:var(--color-primary)]">Sobre Nós</Link></li>
                        <li><Link to="/faq" className="text-gray-600 hover:text-[color:var(--color-primary)]">Central de Ajuda</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Contato */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Contato</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-600">
                            <MdOutlineEmail className="text-[color:var(--color-primary)]" size={20}/>
                            <span>suporte@teleajuda.com.br</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                            <MdOutlinePhone className="text-[color:var(--color-primary)]" size={20}/>
                            <span>(11) 9999-9999</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
                <p>&copy; 2025 TeleAjuda. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
