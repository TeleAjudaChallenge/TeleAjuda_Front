import { useState } from 'react';
import { MdOutlineChevronRight, MdHelpOutline } from 'react-icons/md';

export default function Faq(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = [
        {
            question: "Como testo minha câmera e áudio?",
            answer: "Navegue até a nossa página 'Simular Consulta'. A ferramenta irá guiar você passo a passo para verificar se sua câmera, microfone e conexão com a internet estão prontos para a teleconsulta."
        },
        {
            question: "O que devo fazer se a minha internet estiver lenta?",
            answer: "Nosso simulador irá informar a velocidade da sua conexão. Caso não seja suficiente, recomendamos que você se aproxime do seu roteador Wi-Fi, feche outros aplicativos que possam estar usando a internet e, se possível, conecte seu computador diretamente ao roteador com um cabo de rede."
        },
        {
            question: "Como posso registrar um chamado ou ticket de suporte?",
            answer: "É muito simples! Vá até a página 'Chamados' em nosso menu principal. Lá, você encontrará um formulário onde poderá preencher seu nome, email, telefone e descrever o problema. Nossa equipe de suporte receberá sua solicitação e entrará em contato o mais breve possível."
        },
        {
            question: "Como funciona o ChatBot para dúvidas rápidas?",
            answer: "Nosso ChatBot, localizado no canto inferior direito da tela, está disponível 24/7 para ajudar com as dúvidas mais comuns. Basta clicar no ícone, digitar sua pergunta de forma clara e nosso assistente virtual fornecerá a resposta instantaneamente ou o direcionará para o setor correto."
        },
        {
            question: "Como localizar a clínica mais próxima de mim?",
            answer: "Acesse a página 'Contato' no menu. Nela, você encontrará uma seção chamada 'Nossas Unidades' com um menu de seleção. Basta escolher a unidade desejada para ver o endereço completo, horário de funcionamento e informações de contato."
        },
        {
            question: "A plataforma TeleAjuda é segura?",
            answer: "Sim. A segurança e a privacidade dos seus dados são nossa maior prioridade. Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD para garantir que suas informações e consultas sejam confidenciais e seguras."
        },
        {
            question: "Preciso instalar algum programa?",
            answer: "Não! A plataforma TeleAjuda funciona inteiramente no seu navegador de internet (como Google Chrome, Firefox ou Safari). Não é necessário baixar ou instalar nenhum software adicional."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return(
        <>
            <div className="text-center p-8 md:p-12">
                <h1 
                    className="text-5xl md:text-6xl font-bold" 
                    style={{ color: 'var(--color-primary)' }}
                >
                    Central de Ajuda
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12 px-4">
                
                <div 
                    className="flex flex-col items-center justify-center text-center p-8 rounded-2xl h-full"
                    style={{ backgroundColor: 'rgba(217, 0, 50, 0.05)' }}
                >
                    <MdHelpOutline size={60} style={{ color: 'var(--color-primary)' }}/>
                    <h2 className="text-4xl font-bold mt-4" style={{ color: 'var(--color-primary)' }}>
                        Dúvidas Comuns
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-sm">
                        Encontre respostas para as perguntas mais comuns sobre a preparação para sua teleconsulta.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 py-4 overflow-hidden">
                            <button 
                                onClick={() => handleToggle(index)} 
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="font-semibold text-lg text-gray-800">{item.question}</h3>
                                <MdOutlineChevronRight 
                                    className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}
                                    size={24}
                                    style={{ color: 'var(--color-primary)' }}
                                />
                            </button>
                            <div 
                                className={`transition-all duration-500 ease-in-out grid ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-gray-600 pt-4">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}