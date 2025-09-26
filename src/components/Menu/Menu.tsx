import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Menu(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    // --- ESTILOS RESPONSIVOS PARA DESKTOP ---
    const desktopBaseLinkClass = "transition-all duration-300 font-semibold rounded-full lg:px-6 lg:text-base xl:px-12 xl:text-lg";
    const desktopActiveLinkClass = "bg-[color:var(--color-button)] text-black shadow-md";
    const desktopInactiveLinkClass = "text-black hover:text-gray-600";
    
    const getDesktopLinkClass = ({ isActive } : { isActive: boolean }) => 
        `h-full flex items-center ${desktopBaseLinkClass} ${isActive ? desktopActiveLinkClass : desktopInactiveLinkClass}`;

    // Estilos para o menu mobile
    const mobileLinkClass = "text-black hover:text-gray-600 text-2xl py-3";

    return(
        <nav>
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-black text-3xl z-50">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <ul className="hidden lg:flex items-stretch bg-white/50 backdrop-blur-sm border border-gray-900/10 rounded-full lg:py-3 xl:py-6">
                <li><NavLink to={"/"} className={getDesktopLinkClass}>Home</NavLink></li>
                <li><NavLink to={"/chamados"} className={getDesktopLinkClass}>Chamados</NavLink></li>
                <li><NavLink to={"/faq"} className={getDesktopLinkClass}>FAQ</NavLink></li>
                <li><NavLink to={"/contato"} className={getDesktopLinkClass}>Contato</NavLink></li>
                <li><NavLink to={"/pesquisa"} className={getDesktopLinkClass}>Pesquisa</NavLink></li>
                <li><NavLink to={"/sobre"} className={getDesktopLinkClass}>Sobre</NavLink></li>
            </ul>
            
            {isOpen && (
                <ul className="flex flex-col items-center space-y-4 bg-gray-100 shadow-md absolute left-0 top-full w-full p-6 lg:hidden">
                    <li><NavLink to={"/"} onClick={closeMenu} className={mobileLinkClass}>Home</NavLink></li>
                    <li><NavLink to={"/chamados"} onClick={closeMenu} className={mobileLinkClass}>Chamados</NavLink></li>
                    <li><NavLink to={"/faq"} onClick={closeMenu} className={mobileLinkClass}>FAQ</NavLink></li>
                    <li><NavLink to={"/contato"} onClick={closeMenu} className={mobileLinkClass}>Contato</NavLink></li>
                    <li><NavLink to={"/pesquisa"} onClick={closeMenu} className={mobileLinkClass}>Pesquisa</NavLink></li>
                    <li><NavLink to={"/sobre"} onClick={closeMenu} className={mobileLinkClass}>Sobre</NavLink></li>
                </ul>
            )}
        </nav>
    )
}