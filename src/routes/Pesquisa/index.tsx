import { useState } from "react";

const ESCALA = Array.from({ length: 11 }, (_, i) => i); // 0..10
function RatingGroup({ id, legend, value, onChange, required }) {
  const helpId = `${id}-help`;

  return (
    <fieldset className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
      <legend className="font-semibold text-lg md:text-xl text-gray-900">
        {legend}
      </legend>
      <p id={helpId} className="text-sm text-gray-500 mt-1">
        0 = ruim &nbsp;•&nbsp; 10 = excelente
      </p>

      <div
        role="radiogroup"
        aria-labelledby={`${id}-legend`}
        aria-describedby={helpId}
        className="mt-4 grid grid-cols-6 sm:grid-cols-11 gap-2"
      >
        {ESCALA.map((n) => (
          <label key={n} className="group">
        
            <input
              type="radio"
              name={id}
              value={n}
              className="sr-only peer"
              checked={value === n}
              onChange={() => onChange(n)}
              required={required}
            />
       
            <span
              className="
                flex items-center justify-center h-10 rounded-lg border text-sm
                border-gray-300 bg-white text-gray-700
                peer-checked:text-white peer-checked:border-[var(--color-primary)]
                peer-checked:bg-[var(--color-primary)]
                hover:border-[var(--color-primary)]/60 transition
              "
              title={`${legend}: ${n}`}
            >
              {n}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function Pesquisa() {
  const [notaApp, setNotaApp] = useState(null);
  const [notaSite, setNotaSite] = useState(null);
  const [notaSuporte, setNotaSuporte] = useState(null);

  const [sending, setSending] = useState(false);
  const [okMsg, setOkMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const tudoPreenchido =
    notaApp !== null && notaSite !== null && notaSuporte !== null;

  async function handleSubmit(e) {
    e.preventDefault();
    setOkMsg("");
    setErrMsg("");

    if (!tudoPreenchido) {
      setErrMsg("Preencha todas as notas antes de enviar.");
      return;
    }

    try {
      setSending(true);

      await new Promise((r) => setTimeout(r, 900));

      setOkMsg("Avaliação enviada com sucesso. Obrigado pelo feedback!");
      setNotaApp(null);
      setNotaSite(null);
      setNotaSuporte(null);
    } catch (err) {
      setErrMsg("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="container mx-auto px-6 lg:px-24 py-10">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-primary)]">
          Pesquisa de Satisfação
        </h1>
        <p className="text-gray-600 mt-2">
          Avalie sua experiência com o app, o site e o nosso suporte.
        </p>
      </header>

      <section className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 rounded-2xl p-5 md:p-8 border border-gray-200"
        >
          <RatingGroup
            id="notaApp"
            legend="Nota para o Aplicativo"
            value={notaApp}
            onChange={setNotaApp}
            required
          />
          <RatingGroup
            id="notaSite"
            legend="Nota para o Site"
            value={notaSite}
            onChange={setNotaSite}
            required
          />
          <RatingGroup
            id="notaSuporte"
            legend="Nota para o Suporte"
            value={notaSuporte}
            onChange={setNotaSuporte}
            required
          />

        
          {okMsg && (
            <div className="rounded-xl border border-green-200 bg-green-50 text-green-800 px-4 py-3">
              {okMsg}
            </div>
          )}
          {errMsg && (
            <div className="rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3">
              {errMsg}
            </div>
          )}

    
          <div className="flex items-center gap-3">
            <button
              id="botaoPesquisa"
              type="submit"
              disabled={!tudoPreenchido || sending}
              className={`
                inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
                text-white bg-[var(--color-primary)] shadow
                disabled:opacity-60 disabled:cursor-not-allowed
                hover:brightness-110 transition
              `}
            >
              {sending ? "Enviando..." : "Enviar Avaliação"}
            </button>

        
            <span className="text-sm text-gray-500">
              Selecione uma nota de 0 a 10 para cada item.
            </span>
          </div>
        </form>
      </section>
    </main>
  );
}
