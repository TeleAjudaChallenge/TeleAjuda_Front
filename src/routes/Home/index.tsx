import { Link } from "react-router-dom"
import banner1 from "/src/assets/img/banner1.png";
import banner3 from "/src/assets/img/banner3.png";
import imgContato from "/src/assets/img/Contato.png";

export default function Home(){
    
    return(
        <>
            <section 
                className="bg-cover bg-right lg:bg-center flex flex-col justify-center h-[80vh] lg:h-[70vh] 
                           px-6 text-center lg:text-left lg:items-start lg:px-24" 
                style={{ backgroundImage: `url(${banner1})` }}
            >
                <h1 
                    className="font-bold mb-6 text-4xl md:text-6xl lg:text-7xl" 
                    style={{ color: 'var(--color-primary)', textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}
                >
                    Bem Vindo(a) ao <br/> TeleAjuda IMREA
                </h1>
                <Link 
                    to={"/faq"} 
                    className="inline-block text-white text-lg font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 self-center lg:self-start"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                >
                    Tire suas dúvidas
                </Link>
            </section>

            <main>
                <section className="bg-white shadow-2xl rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <h2 className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>
                                Precisa de Ajuda?
                            </h2>
                            <p className="mt-4 text-xl text-gray-600">
                                Abra um chamado e tire suas dúvidas com nosso time de suporte.
                            </p>
                            <Link 
                                to={"/chamados"}
                                className="inline-block mt-8 text-black text-lg font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"
                                style={{ backgroundColor: 'var(--color-button)' }}
                            >
                                Clique Aqui
                            </Link>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <img src={banner3} alt="Imagem de ajuda" className="rounded-2xl w-full"/>
                        </div>
                    </div>
                </section>

                <section className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="hidden md:flex justify-center md:order-first">
                            <img src={imgContato} alt="Imagem de contato" className="rounded-2xl w-full"/>
                        </div>
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <h2 className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>
                                Quem somos?
                            </h2>
                            <p className="mt-4 text-xl text-gray-600">
                                Descubra quem somos, o que fazemos e como podemos ajudar na sua recuperação.
                            </p>
                            <Link 
                                to={"/sobre"}
                                className="inline-block mt-8 text-black text-lg font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"
                                style={{ backgroundColor: 'var(--color-button)' }}
                            >
                                Clique Aqui
                            </Link>
                        </div>
                    </div>
                </section>

                <section 
                    className="text-white rounded-2xl p-8 md:p-12 mt-12 text-center"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                >
                    <h2 className="text-5xl font-bold text-white">Entre em contato com a nossa equipe</h2>
                    <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
                        Estamos prontos para oferecer o suporte que você precisa.
                    </p>
                    <Link 
                        to={"/contato"}
                        className="inline-block mt-8 bg-white text-lg font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"
                        style={{ color: 'var(--color-primary)' }}
                    >
                        Clique Aqui
                    </Link>
                </section>
            </main>
        </>
    )
}