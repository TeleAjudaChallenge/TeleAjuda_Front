export default function Integrantes() {
  return (
    <main className="container mx-auto px-6 lg:px-24 py-10 space-y-16">
    
      <section className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
          QUEM SOMOS
        </h1>

        <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-700">
          <p>
            Somos estudantes do 1º semestre do curso de Análise e Desenvolvimento de Sistemas (ADS) da FIAP,
            participando do Challenge proposto pela faculdade.
          </p>
          <p>
            Este projeto foi desenvolvido com o objetivo de apoiar o Instituto de Reabilitação do Hospital das Clínicas
            (HC-IMREA), com foco na área de teleconsulta, contribuindo com soluções que tornem o atendimento mais acessível,
            prático e eficiente para pacientes e profissionais da saúde.
          </p>
          <p>
            Nosso grupo é composto por alunos que, mesmo no início da jornada acadêmica, estão comprometidos em aplicar seus
            conhecimentos em um projeto real, com impacto social e propósito. Acreditamos que a tecnologia tem o poder de
            transformar vidas, e é com esse pensamento que desenvolvemos este site.
          </p>
        </div>
      </section>

      
      <section aria-label="Integrantes da equipe">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold grid place-items-center text-xl">
                MB
              </div>
              <div>
                <p className="font-semibold text-lg text-gray-800">Matheus Borges Sansão</p>
                <p className="text-sm text-gray-500">RM: 562896</p>
                <p className="text-sm text-gray-500">Turma: 1TDSPO</p>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <a href="https://github.com/Matheussansao" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/matheus-sansao-6a0505171/" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">LinkedIn</a>
            </div>
          </li>

          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold grid place-items-center text-xl">
                JA
              </div>
              <div>
                <p className="font-semibold text-lg text-gray-800">Julia Correa e Souza Altino</p>
                <p className="text-sm text-gray-500">RM: 564870</p>
                <p className="text-sm text-gray-500">Turma: 1TDSPO</p>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <a href="https://github.com/Juliacsou" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/julia-de-altino-540261258/" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">LinkedIn</a>
            </div>
          </li>

          <li className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
             
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold grid place-items-center text-xl">
                NP
              </div>
              <div>
                <p className="font-semibold text-lg text-gray-800">Nicholas Camillo Canadas de Paulo</p>
                <p className="text-sm text-gray-500">RM: 561262</p>
                <p className="text-sm text-gray-500">Turma: 1TDSPO</p>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <a href="https://github.com/Canadas7" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/nicholas-ca%C3%B1adas-682a21248/" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">LinkedIn</a>
            </div>
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto border-t border-dashed border-gray-300 pt-8 text-center">
        <p className="text-lg leading-relaxed text-gray-700">
          Esse projeto representa não apenas um desafio acadêmico, mas também um passo importante no nosso
          desenvolvimento como profissionais da área de tecnologia, além de uma oportunidade de colaborar com
          a instituição de grande importância como HC-IMREA.
        </p>
      </section>
    </main>
  );
}