import { Link } from "react-router-dom"
import banner1 from "/src/assets/img/banner1.png";
import banner3 from "/src/assets/img/banner3.png";
import imgContato from "/src/assets/img/Contato.png";

export default function Home(){
    
    return(
        <>
            {/* Seção Principal (Hero) - Responsiva */}
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

            {/* O resto do conteúdo continua dentro do <main> */}
            <main>
                {/* Seção "Precisa de Ajuda?" - Estilizada */}
                <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Coluna de Texto */}
                        <div>
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
                        {/* Coluna de Imagem com a classe 'max-w-sm' removida */}
                        <div className="flex justify-center">
                            <img src={banner3} alt="Imagem de ajuda" className="rounded-2xl w-full"/>
                        </div>
                    </div>
                </section>

                {/* Seções restantes, ainda não estilizadas */}
                <section>
                    <div>
                        <h2>Quem somos?</h2>
                        <p>Descubra quem somos, o que fazemos </p><p>e como podemos ajudar na sua recuperação.</p>
                        <Link to={"/sobre"}>Clique Aqui</Link>
                    </div>
                    <div>
                        <img src={imgContato} alt="Imagem de contato"/>
                    </div>
                </section>

                <section>
                    <div>
                        <h2>Entre em contato com a nossa equipe</h2>
                        <p>Estamos prontos para oferecer o suporte que você precisa.</p>
                    </div>
                    <div>
                        <Link to={"/contato"}>Clique Aqui</Link>
                    </div>   
                </section>
            </main>
        </>
    )
}