import { Link } from "react-router-dom"
import banner1 from "/src/assets/img/banner1.png";
import banner3 from "/src/assets/img/banner3.png";
import imgContato from "/src/assets/img/Contato.png";

export default function Home(){
    
    return(
        <main>
        {/* Seção Principal (Hero) */}
        <section 
            className="h-[60vh] bg-cover bg-center flex items-center p-8 rounded-lg" 
            style={{ backgroundImage: `url(${banner1})` }}
        >
            <div className="bg-black/30 p-8 rounded-lg">
                <h1 className="text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    Bem Vindo(a) ao TeleAjuda IMREA
                </h1>
                <Link 
                    to={"/faq"} 
                    className="inline-block text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                >
                    Perguntas Frequentes
                </Link>
            </div>
        </section>

        {/* Seções Adicionais (ainda não estilizadas) */}
        <section>
            <div>
                <h2>Precisa de Ajuda?</h2>
                <p>Abra um chamado e tire seus duvidas com nosso time de suporte.</p>
                <Link to={"/chamados"}>Clique Aqui</Link>
            </div>
            <div>
                <img src={banner3} alt="Imagem de ajuda"></img>
            </div>
        </section>

        <section>
            <div>
                <h2>Quem somos?</h2>
                <p>Descubra quem somos, o que fazemos </p><p>e como podemos ajudar na sua recuperação.</p>
                <Link to={"/sobre"}>Clique Aqui</Link>
            </div>
            <div>
                <img src={imgContato} alt="Imagem de contato"></img>
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
    )
}