import { NavLink } from "react-router-dom";

export default function Menu(){

    const getLinkClass = ({ isActive } : { isActive: boolean }) => {
    
        const baseClasses = "font-semibold px-4 rounded-full transition-all duration-300";
        
        const layoutClasses = "h-full flex items-center";

        if (isActive) {
            return `${layoutClasses} ${baseClasses} bg-[color:var(--color-button)] text-black shadow-md`;
        } else {
            return `${layoutClasses} ${baseClasses} text-black hover:text-gray-600`;
        }
    };

    return(
        <nav>
            <ul className="flex items-stretch bg-white/50 backdrop-blur-sm border border-gray-900/10 rounded-full py-1.5">
                <li><NavLink to={"/"} className={getLinkClass}>Home</NavLink></li>
                <li><NavLink to={"/chamados"} className={getLinkClass}>Chamados</NavLink></li>
                <li><NavLink to={"/contato"} className={getLinkClass}>Contato</NavLink></li>
                <li><NavLink to={"/pesquisa"} className={getLinkClass}>Pesquisa</NavLink></li>
                <li><NavLink to={"/sobre"} className={getLinkClass}>Sobre</NavLink></li>
            </ul>
        </nav>
    )
}