export default function Faq(){

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
            question: "A plataforma TeleAjuda é segura?",
            answer: "Sim. A segurança e a privacidade dos seus dados são nossa maior prioridade. Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD para garantir que suas informações e consultas sejam confidenciais e seguras."
        },
        {
            question: "Preciso instalar algum programa?",
            answer: "Não! A plataforma TeleAjuda funciona inteiramente no seu navegador de internet (como Google Chrome, Firefox ou Safari). Não é necessário baixar ou instalar nenhum software adicional."
        }
    ];

    return(
        <main>
            <div className="text-center">
                <h1>Central de Ajuda</h1>
                <p className="text-xl text-gray-600 mt-2">Encontre respostas para as perguntas mais comuns sobre a preparação para sua teleconsulta.</p>
            </div>

            <div className="max-w-3xl mx-auto mt-12 space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 py-4">
                        <h3 className="font-semibold text-lg">{item.question}</h3>
                        <p className="text-gray-600 mt-2">{item.answer}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}