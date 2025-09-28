import { RiHeadphoneLine } from 'react-icons/ri';

export default function Chamados(){
    return(
        <main className="bg-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Coluna Esquerda - Informativa */}
                <div className="bg-red-50 p-8 md:p-12 flex flex-col justify-center items-center text-center">
                    <RiHeadphoneLine size={80} style={{ color: 'var(--color-primary)' }}/>
                    <h1 className="text-4xl font-bold mt-6" style={{ color: 'var(--color-primary)' }}>
                        Precisa de Ajuda?
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Preencha o formulário ao lado com os detalhes do seu problema e nossa equipe de suporte entrará em contato o mais breve possível.
                    </p>
                </div>

                {/* Coluna Direita - Formulário */}
                <div className="p-8 md:p-12">
                    <h2 
                        className="text-3xl font-bold mb-6"
                        style={{ color: 'var(--color-primary)' }}
                    >
                        Abra um novo Ticket
                    </h2>
                    <form id="formularioTicket" className="form-default">
                        <div>
                            <label htmlFor="nome" className="font-semibold text-gray-700">Nome</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>
                      
                        <div>
                            <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                      
                        <div>
                            <label htmlFor="telefone" className="font-semibold text-gray-700">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" required />
                        </div>
                      
                        <div>
                            <label htmlFor="tipo" className="font-semibold text-gray-700">Quem você é</label>
                            <select id="tipo" name="tipo" required>
                                <option value="">Selecione</option>
                                <option value="parente">Parente</option>
                                <option value="cuidador">Cuidador</option>
                                <option value="paciente">Paciente</option>
                            </select>
                        </div>
                      
                        <div>
                            <label htmlFor="titulo" className="font-semibold text-gray-700">Título do Problema</label>
                            <input type="text" id="titulo" name="titulo" required />
                        </div>
                      
                        <div>
                            <label htmlFor="descricao" className="font-semibold text-gray-700">Descrição do Problema</label>
                            <textarea id="descricao" name="descricao" rows={4} required></textarea>
                        </div>
                      
                        <button id="enviarFormulario" type="submit">
                            Enviar Ticket
                        </button>
                    </form>
                </div>

            </div>
        </main>
    )
}