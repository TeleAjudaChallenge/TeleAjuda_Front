import { Link } from "react-router-dom";
import logo from '/LogoTeleAjuda.png';

export default function Error(){
    return(
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 text-center">
            <img src={logo} alt="Logo TeleAjuda" className="h-40 mb-8" />
            
            <h1 className="text-8xl font-extrabold" style={{ color: 'var(--color-primary)' }}>
                404
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">
                Página Não Encontrada
            </h2>
            <p className="text-lg text-gray-600 mt-2">
                Desculpe, a página que você está procurando não existe.
            </p>
            
            {/* O detalhe do erro virá aqui */}

            <Link 
                to="/"
                className="inline-block mt-8 text-white text-lg font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105"
                style={{ backgroundColor: 'var(--color-primary)' }}
            >
                Voltar para a Home
            </Link>
        </main>
    )
}