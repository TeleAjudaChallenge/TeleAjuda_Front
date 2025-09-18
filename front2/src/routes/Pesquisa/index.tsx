export default function Pesquisa(){
    return(
        <main>
            <h1>Pesquisa</h1>
            <section>   
              <form id="pesquisaSatisfacao">
                <fieldset>
                  <legend>Nota para o Aplicativo:</legend>
                  <div>
                    <label><input type="radio" name="notaApp" value="0" required />0</label>
                    <label><input type="radio" name="notaApp" value="1" />1</label>
                    <label><input type="radio" name="notaApp" value="2" />2</label>
                    <label><input type="radio" name="notaApp" value="3" />3</label>
                    <label><input type="radio" name="notaApp" value="4" />4</label>
                    <label><input type="radio" name="notaApp" value="5" />5</label>
                    <label><input type="radio" name="notaApp" value="6" />6</label>
                    <label><input type="radio" name="notaApp" value="7" />7</label>
                    <label><input type="radio" name="notaApp" value="8" />8</label>
                    <label><input type="radio" name="notaApp" value="9" />9</label>
                    <label><input type="radio" name="notaApp" value="10" />10</label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Nota para o Site:</legend>
                    <div>
                      <label><input type="radio" name="notaSite" value="0" required />0</label>
                      <label><input type="radio" name="notaSite" value="1" />1</label>
                      <label><input type="radio" name="notaSite" value="2" />2</label>
                      <label><input type="radio" name="notaSite" value="3" />3</label>
                      <label><input type="radio" name="notaSite" value="4" />4</label>
                      <label><input type="radio" name="notaSite" value="5" />5</label>
                      <label><input type="radio" name="notaSite" value="6" />6</label>
                      <label><input type="radio" name="notaSite" value="7" />7</label>
                      <label><input type="radio" name="notaSite" value="8" />8</label>
                      <label><input type="radio" name="notaSite" value="9" />9</label>
                      <label><input type="radio" name="notaSite" value="10" />10</label>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Nota para o Suporte:</legend>
                      <div>
                        <label><input type="radio" name="notaSuporte" value="0" required />0</label>
                        <label><input type="radio" name="notaSuporte" value="1" />1</label>
                        <label><input type="radio" name="notaSuporte" value="2" />2</label>
                        <label><input type="radio" name="notaSuporte" value="3" />3</label>
                        <label><input type="radio" name="notaSuporte" value="4" />4</label>
                        <label><input type="radio" name="notaSuporte" value="5" />5</label>
                        <label><input type="radio" name="notaSuporte" value="6" />6</label>
                        <label><input type="radio" name="notaSuporte" value="7" />7</label>
                        <label><input type="radio" name="notaSuporte" value="8" />8</label>
                        <label><input type="radio" name="notaSuporte" value="9" />9</label>
                        <label><input type="radio" name="notaSuporte" value="10" />10</label>
                      </div>
                  </fieldset>
                  <br />
                  <button id="botaoPesquisa" type="submit">Enviar Avaliação</button>
            </form>         
        </section> 
        </main>
    )
}