// src/pages/Sobre.jsx
export default function Sobre() {
  return (
    <main className="container mx-auto px-6 lg:px-24 py-10 space-y-14">
      <header className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-primary)]">
          Sobre o TeleAjuda
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Uma plataforma simples, acessível e integrada ao Portal do Paciente HC, criada para reduzir faltas em
          teleconsultas, promover acessibilidade digital e oferecer atendimento mais humano.
        </p>
      </header>

      <section className="max-w-5xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">O desafio atual</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-gray-800">
              Idosos e pessoas com pouca experiência digital têm dificuldade em usar plataformas de saúde.
            </p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-gray-800">Isso gera insegurança e frustração.</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-gray-800">
              Resultado: faltas em consultas online e menor eficácia no tratamento.
            </p>
          </li>
        </ul>
      </section>

      <section className="max-w-5xl space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Nossa resposta: <span className="text-[var(--color-primary)]">TeleAjuda</span>
        </h2>
        <p className="text-gray-700">
          Plataforma simples, acessível e integrada ao Portal do Paciente HC.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">Assistente Virtual</h3>
            <p className="text-gray-600 mt-1">
              Responde dúvidas frequentes e orienta o paciente de forma imediata.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">Sistema de Tickets</h3>
            <p className="text-gray-600 mt-1">
              Permite abrir chamados e receber suporte humano quando necessário.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">Pesquisa de Satisfação</h3>
            <p className="text-gray-600 mt-1">
              Coleta feedback para avaliar qualidade e buscar melhorias contínuas.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">Lembretes Automáticos</h3>
            <p className="text-gray-600 mt-1">
              Notificações de datas e horários para reduzir faltas.
            </p>
          </div>
        </div>

 
        <div className="mt-4 rounded-2xl border border-indigo-200 bg-indigo-50 text-indigo-900 p-5">
          <strong className="block">TeleAjuda — sua consulta começa em 5 minutos.</strong>
        </div>
      </section>

      <section className="max-w-5xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Por que o TeleAjuda faz diferença?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-gray-800">📉 Reduz faltas em consultas</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-gray-800">♿ Promove acessibilidade digital</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-gray-800">😊 Atendimento humanizado e acolhedor</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-gray-800">📈 Aumenta a eficiência do sistema de saúde</p>
          </li>
        </ul>
      </section>

      <section className="max-w-5xl space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Evolução da solução</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">📊 Pesquisa com pacientes</h3>
            <p className="text-gray-600 mt-1">Levantamento de dores, barreiras e necessidades.</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">🖥 Protótipo navegável</h3>
            <p className="text-gray-600 mt-1">Fluxos simples focados em acessibilidade.</p>
          </li>
          <li className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">🧪 Testes de usabilidade</h3>
            <p className="text-gray-600 mt-1">Iterações a partir do feedback dos usuários.</p>
          </li>
        </ol>
      </section>

    
      <section className="max-w-4xl">
        <p className="text-gray-700 text-lg leading-relaxed">
          O TeleAjuda reforça a inclusão, o acolhimento e a eficiência nos atendimentos — conectando tecnologia ao cuidado.
        </p>
      </section>
    </main>
  );
}
