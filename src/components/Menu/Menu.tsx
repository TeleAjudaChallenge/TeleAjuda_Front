import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/LogoTeleAjuda.png';
import { useAuth } from "../../App";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user } = useAuth();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const desktopBaseLinkClass = "transition-all duration-300 font-semibold rounded-full lg:px-6 lg:text-base xl:px-12 xl:text-lg";
    const desktopActiveLinkClass = "bg-[color:var(--color-button)] text-black shadow-md";
    const desktopInactiveLinkClass = "text-black hover:text-gray-600";
    const getDesktopLinkClass = ({ isActive }: { isActive: boolean }) =>
        `h-full flex items-center ${desktopBaseLinkClass} ${isActive ? desktopActiveLinkClass : desktopInactiveLinkClass}`;

    const mobileBaseLinkClass = "w-full text-left py-2 px-4 rounded-lg text-lg";
    const mobileActiveLinkClass = "bg-[color:var(--color-primary)] text-white";
    const mobileInactiveLinkClass = "text-gray-700 hover:bg-gray-100";
    const getMobileLinkClass = ({ isActive }: { isActive: boolean }) =>
        `${mobileBaseLinkClass} ${isActive ? mobileActiveLinkClass : mobileInactiveLinkClass}`;

    const renderLinks = (isMobile: boolean) => {
        const getLinkClass = isMobile ? getMobileLinkClass : getDesktopLinkClass;

        if (user?.perfil === "Funcionario") {
            return (
                <>
                    <li><NavLink to={"/dashboard-funcionario"} onClick={closeMenu} className={getLinkClass}>Atender Tickets</NavLink></li>
                    <li><NavLink to={"/ver-pesquisas"} onClick={closeMenu} className={getLinkClass}>Ver Pesquisas</NavLink></li>
                    <li><NavLink to={"/perfil"} onClick={closeMenu} className={getLinkClass}>Perfil</NavLink></li>
                </>
            );
        }

        if (user?.perfil === "Paciente") {
            return (
                <>
                    <li><NavLink to={"/"} onClick={closeMenu} className={getLinkClass}>Home</NavLink></li>
                    <li><NavLink to={"/faq"} onClick={closeMenu} className={getLinkClass}>FAQ</NavLink></li>
                    <li><NavLink to={"/chamados"} onClick={closeMenu} className={getLinkClass}>Chamados</NavLink></li>
                    <li><NavLink to={"/contato"} onClick={closeMenu} className={getLinkClass}>Contato</NavLink></li>
                    <li><NavLink to={"/pesquisa"} onClick={closeMenu} className={getLinkClass}>Pesquisa</NavLink></li>
                    <li><NavLink to={"/integrantes"} onClick={closeMenu} className={getLinkClass}>Integrantes</NavLink></li>
                    <li><NavLink to={"/sobre"} onClick={closeMenu} className={getLinkClass}>Sobre</NavLink></li>
                    <li><NavLink to={"/perfil"} onClick={closeMenu} className={getLinkClass}>Olá, {user.nome.split(' ')[0]}</NavLink></li>
                </>
            );
        }

        if (!isAuthenticated) {
            return (
                <>
                    <li><NavLink to={"/"} onClick={closeMenu} className={getLinkClass}>Home</NavLink></li>
                    <li><NavLink to={"/faq"} onClick={closeMenu} className={getLinkClass}>FAQ</NavLink></li>
                    <li><NavLink to={"/contato"} onClick={closeMenu} className={getLinkClass}>Contato</NavLink></li>
                    <li><NavLink to={"/pesquisa"} onClick={closeMenu} className={getLinkClass}>Pesquisa</NavLink></li>
                    <li><NavLink to={"/integrantes"} onClick={closeMenu} className={getLinkClass}>Integrantes</NavLink></li>
                    <li><NavLink to={"/sobre"} onClick={closeMenu} className={getLinkClass}>Sobre</NavLink></li>
                    <li><NavLink to={"/login"} onClick={closeMenu} className={`h-full flex items-center text-black font-semibold rounded-full lg:px-6 lg:text-base xl:px-12 xl:text-lg transition-all duration-300 shadow-lg hover:brightness-110 ${isMobile ? mobileBaseLinkClass : ''}`} style={{ backgroundColor: 'var(--color-button)' }}>Login</NavLink></li>
                </>
            );
        }

        return null;
    };

    return (
        <nav>
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-black text-3xl z-50">
                    <FaBars />
                </button>
            </div>

            <ul className="hidden lg:flex items-stretch bg-white/50 backdrop-blur-sm border border-gray-900/10 rounded-full lg:py-3 xl:py-6">
                {renderLinks(false)}
            </ul>

            <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <img src={logo} alt="Logo TeleAjuda" className="h-12" />
                    <button onClick={closeMenu} className="text-gray-600 text-3xl">
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-2">
                    {renderLinks(true)}
                </ul>
            </div>

            {isOpen && <div onClick={closeMenu} className="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>}
        </nav>
    )
}
