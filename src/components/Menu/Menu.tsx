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

            {isOpen && (
                <ul className="flex flex-col items-center space-y-4 bg-gray-100 shadow-md absolute left-0 top-full w-full p-6 md:hidden">
                    <li><NavLink to={"/"} onClick={closeMenu} className="text-black hover:text-gray-600 text-lg">Home</NavLink></li>
                    <li><NavLink to={"/chamados"} onClick={closeMenu} className="text-black hover:text-gray-600 text-lg">Chamados</NavLink></li>
                    <li><NavLink to={"/contato"} onClick={closeMenu} className="text-black hover:text-gray-600 text-lg">Contato</NavLink></li>
                    <li><NavLink to={"/pesquisa"} onClick={closeMenu} className="text-black hover:text-gray-600 text-lg">Pesquisa</NavLink></li>
                    <li><NavLink to={"/sobre"} onClick={closeMenu} className="text-black hover:text-gray-600 text-lg">Sobre</NavLink></li>
                </ul>
            )}
        </nav>
    )
}