import { Link } from "react-router-dom"
import banner1 from "/src/assets/img/banner1.png";
import banner3 from "/src/assets/img/banner3.png";
import imgContato from "/src/assets/img/Contato.png";

export default function Home(){
    
    return(
        <> {/* Fragmento para agrupar os elementos */}
            {/* 1. A seção principal foi movida para fora do <main> para remover a borda branca */}
            <section 
                className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-start px-24" 
                style={{ backgroundImage: `url(${banner1})` }}
            >
                {/* 2. Aumentamos o tamanho da fonte e trocamos a cor para a primária */}
                <h1 className="text-7xl font-bold mb-6" style={{ color: 'var(--color-primary)', textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
                    Bem Vindo(a) ao <br/> TeleAjuda IMREA
                </h1>
                {/* 3. Alteramos o texto do botão */}
                <Link 
                    to={"/faq"} 
                    className="inline-block text-white text-lg font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105"
                    style={{ backgroundColor: 'var(--color-button)' }}
                >
                    Tire suas dúvidas
                </Link>
            </section>

            {/* O resto do conteúdo continua dentro do <main> */}
            <main>
                <section>
                    <div>
                        <h2>Precisa de Ajuda?</h2>
                        <p>Abra um chamado e tire seus duvidas com nosso time de suporte.</p>
                        <Link to={"/chamados"}>Clique Aqui</Link>
                    </div>
                    <div>
                        <img src={banner3} alt="Imagem de ajuda"/>
                    </div>
                </section>

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