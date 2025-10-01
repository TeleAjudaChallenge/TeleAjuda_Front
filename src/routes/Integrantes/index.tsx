import fotoMatheus from '../../assets/img/fotoMatheus.jpeg';
import fotoJulia from '../../assets/img/fotoJulia.jpeg';
import fotoNicholas from '../../assets/img/fotoNicholas.jpeg';
import githubIcon from '../../assets/img/icone-github.png';
import linkedinIcon from '../../assets/img/icone-linkedin.png';

export default function Integrantes() {
  return (
    <main className="container mx-auto px-6 lg:px-24 py-10 space-y-16">
    
      <section className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>

      <section aria-label="Integrantes da equipe">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {/* Card Matheus */}
          <li className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">Matheus Borges Sansão</h3>
                <p className="text-sm text-gray-500">RM: 562896 | Turma: 1TDSPO</p>
            </div>
            <img src={fotoMatheus} alt="Foto de Matheus Borges Sansão" className="w-full h-80 object-cover object-top"/>
            <div className="p-4 mt-auto flex justify-center gap-6">
              <a href="https://github.com/Matheussansao" target="_blank" rel="noreferrer" title="GitHub de Matheus">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/matheus-sansao-6a0505171/" target="_blank" rel="noreferrer" title="LinkedIn de Matheus">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 transition-transform hover:scale-110" />
              </a>
            </div>
          </li>

          {/* Card Julia */}
          <li className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">Julia Correa e Souza Altino</h3>
                <p className="text-sm text-gray-500">RM: 564870 | Turma: 1TDSPO</p>
            </div>
            <img src={fotoJulia} alt="Foto de Julia Correa e Souza Altino" className="w-full h-80 object-cover"/>
            <div className="p-4 mt-auto flex justify-center gap-6">
              <a href="https://github.com/Juliacsou" target="_blank" rel="noreferrer" title="GitHub de Julia">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/julia-de-altino-540261258/" target="_blank" rel="noreferrer" title="LinkedIn de Julia">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 transition-transform hover:scale-110" />
              </a>
            </div>
          </li>

          {/* Card Nicholas */}
          <li className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">Nicholas Camillo Canadas de Paulo</h3>
                <p className="text-sm text-gray-500">RM: 561262 | Turma: 1TDSPO</p>
            </div>
            <img src={fotoNicholas} alt="Foto de Nicholas Camillo Canadas de Paulo" className="w-full h-80 object-cover"/>
            <div className="p-4 mt-auto flex justify-center gap-6">
              <a href="https://github.com/Canadas7" target="_blank" rel="noreferrer" title="GitHub de Nicholas">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/nicholas-ca%C3%B1adas-682a21248/" target="_blank" rel="noreferrer" title="LinkedIn de Nicholas">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 transition-transform hover:scale-110" />
              </a>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}