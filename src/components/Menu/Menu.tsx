
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Menu(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = ({ isActive } : { isActive: boolean }) => {
        const baseClasses = "font-semibold px-6 text-lg rounded-full transition-all duration-300";
        const layoutClasses = "h-full flex items-center";

        if (isActive) {
            return `${layoutClasses} ${baseClasses} bg-[color:var(--color-button)] text-black shadow-md`;
        } else {
            return `${layoutClasses} ${baseClasses} text-black hover:text-gray-600`;
        }
    };

    return(
        <nav>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-black text-2xl z-50">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <ul className="hidden md:flex items-stretch bg-white/50 backdrop-blur-sm border border-gray-900/10 rounded-full py-2">
                <li><NavLink to={"/"} className={getLinkClass}>Home</NavLink></li>
                <li><NavLink to={"/chamados"} className={getLinkClass}>Chamados</NavLink></li>
                <li><NavLink to={"/contato"} className={getLinkClass}>Contato</NavLink></li>
                <li><NavLink to={"/pesquisa"} className={getLinkClass}>Pesquisa</NavLink></li>
                <li><NavLink to={"/sobre"} className={getLinkClass}>Sobre</NavLink></li>
            </ul>
        </nav>
    )
}