import { FaLaptopMedical, FaLightbulb, FaHeartbeat, FaRocket, FaTasks, FaUserCheck } from 'react-icons/fa';

export default function Sobre() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
          Sobre o TeleAjuda
        </h1>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Uma plataforma simples, acessível e integrada ao Portal do Paciente HC, criada para reduzir faltas em
          teleconsultas, promover acessibilidade digital e oferecer atendimento mais humano.
        </p>
      </header>

      <section className="max-w-5xl mx-auto space-y-6 mb-16">
        <h2 className="text-3xl font-bold text-center">O desafio atual</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-gray-800">
              Idosos e pessoas com pouca experiência digital têm dificuldade em usar plataformas de saúde.
            </p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-gray-800">Isso gera insegurança e frustração.</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-gray-800">
              Resultado: faltas em consultas online e menor eficácia no tratamento.
            </p>
          </li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto space-y-6 mb-16">
        <h2 className="text-3xl font-bold text-center">
          Nossa resposta: <span style={{ color: 'var(--color-primary)' }}>TeleAjuda</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <FaLaptopMedical className="mx-auto mb-3" size={32} style={{ color: 'var(--color-button)' }} />
            <h3 className="font-semibold text-lg">Assistente Virtual</h3>
            <p className="text-gray-600 mt-1">Responde dúvidas e orienta o paciente de forma imediata.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <FaTasks className="mx-auto mb-3" size={32} style={{ color: 'var(--color-button)' }} />
            <h3 className="font-semibold text-lg">Sistema de Tickets</h3>
            <p className="text-gray-600 mt-1">Permite abrir chamados e receber suporte humano.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <FaUserCheck className="mx-auto mb-3" size={32} style={{ color: 'var(--color-button)' }} />
            <h3 className="font-semibold text-lg">Pesquisa de Satisfação</h3>
            <p className="text-gray-600 mt-1">Coleta feedback para buscar melhorias contínuas.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <FaLightbulb className="mx-auto mb-3" size={32} style={{ color: 'var(--color-button)' }} />
            <h3 className="font-semibold text-lg">Lembretes Automáticos</h3>
            <p className="text-gray-600 mt-1">Notificações de datas e horários para reduzir faltas.</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Por que o TeleAjuda faz diferença?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <FaRocket size={24} className="text-[var(--color-primary)]" />
            <p className="text-gray-800 text-lg">📉 Reduz faltas em consultas</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <FaRocket size={24} className="text-[var(--color-primary)]" />
            <p className="text-gray-800 text-lg">♿ Promove acessibilidade digital</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <FaHeartbeat size={24} className="text-[var(--color-primary)]" />
            <p className="text-gray-800 text-lg">😊 Atendimento humanizado e acolhedor</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <FaHeartbeat size={24} className="text-[var(--color-primary)]" />
            <p className="text-gray-800 text-lg">📈 Aumenta a eficiência do sistema de saúde</p>
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto text-center mt-16 border-t pt-10">
        <p className="text-gray-700 text-xl leading-relaxed italic">
          O TeleAjuda reforça a inclusão, o acolhimento e a eficiência nos atendimentos — conectando tecnologia ao cuidado.
        </p>
      </section>
    </main>
  );
}