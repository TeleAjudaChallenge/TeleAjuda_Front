export default function Chamados(){
    return(
        <main>
            <h1>Abra um Ticket</h1>
            <section className="formulario">
            <form id="formularioTicket">
              <label htmlFor="nome">Nome</label><br />
              <input type="text" id="nome" name="nome" required /><br />
              
              <label htmlFor="email">Email</label><br />
              <input type="email" id="email" name="email" required /><br />
              
              <label htmlFor="telefone">Telefone</label><br />
              <input type="tel" id="telefone" name="telefone" required /><br />
              
              <label htmlFor="tipo">Quem você é</label><br />
              <select id="tipo" name="tipo" required>
                <option value="">Selecione</option>
                <option value="parente">Parente</option>
                <option value="cuidador">Cuidador</option>
                <option value="paciente">Paciente</option>
              </select><br />
              
              <label htmlFor="titulo">Título do Problema:</label><br />
              <input type="text" id="titulo" name="titulo" required /><br />
              
              <label htmlFor="descricao">Descrição do Problema:</label><br />
              <textarea id="descricao" name="descricao" rows={5} cols={40} required></textarea><br />
              
              <button id="enviarFormulario" type="submit">Enviar</button>
            </form>
    </section>
        </main>
    )
}