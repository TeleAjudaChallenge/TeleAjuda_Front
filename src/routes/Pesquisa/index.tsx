import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../../App";

const ESCALA = Array.from({ length: 11 }, (_, i) => i);

type ApiPesquisaData = {
  nt_app: number;
  nt_site: number;
  nt_suporte: number;
  paciente?: {
    cpf_paciente: string;
  };
};

type FormValues = {
  notaApp: string;
  notaSite: string;
  notaSuporte: string;
};

// CORREÇÃO: Adicionado tipos para os parâmetros
function RatingGroup({ id, legend, register, watch, errors }: { id: string, legend: string, register: any, watch: any, errors: any }) {
  const helpId = `${id}-help`;
  const currentValue = watch(id);

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
              value={n}
              className="sr-only"
              {...register(id, { required: "Por favor, selecione uma nota." })}
            />
            <span
              className={`
                flex items-center justify-center h-10 rounded-lg border text-sm transition
                ${
                  currentValue == n
                    ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-[var(--color-primary)]/60'
                }
              `}
              title={`${legend}: ${n}`}
            >
              {n}
            </span>
          </label>
        ))}
      </div>
      {errors[id] && <p className="text-red-500 text-sm mt-2">{errors[id].message}</p>}
    </fieldset>
  );
}

// Componente Principal
export default function Pesquisa() {
  const { register, handleSubmit, watch, formState: { errors, isValid }, reset } = useForm<FormValues>({
    mode: 'onChange'
  });
  const [sending, setSending] = useState(false);
  const [okMsg, setOkMsg] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth(); // 4. Pega o usuário

  const onSubmit = async (data: FormValues) => {
    setOkMsg("");
    setApiError(null);
    setSending(true);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const PESQUISA_ENDPOINT = "/pesquisa";
   
    const apiData: ApiPesquisaData = {
      nt_app: Number(data.notaApp),
      nt_site: Number(data.notaSite),
      nt_suporte: Number(data.notaSuporte),
    };

    if (isAuthenticated && user && user.perfil === "Paciente" && user.cpf) {
      apiData.paciente = {
        cpf_paciente: user.cpf // API espera o CPF
      };
    }

    console.log("Enviando Pesquisa para API:", apiData);
   
    try {
      const response = await fetch(`${API_URL}${PESQUISA_ENDPOINT}`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-API-Key': API_KEY 
        },
        body: JSON.stringify(apiData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Não foi possível enviar a avaliação.");
      }
     
      setOkMsg("Avaliação enviada com sucesso. Obrigado pelo feedback!");
      reset();

    } catch (err: any) { // <-- AQUI ESTAVA O ERRO (troquei '()' por '{}')
      setApiError(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="container mx-auto px-6 lg:px-24 py-10">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
          Pesquisa de Satisfação
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Avalie sua experiência com o app, o site e o nosso suporte.
        </p>
      </header>

      <section className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-gray-50 rounded-2xl p-5 md:p-8 border border-gray-200"
        >
          <RatingGroup
            id="notaApp"
            legend="Nota para o Aplicativo"
            register={register}
            watch={watch}
            errors={errors}
          />
          <RatingGroup
            id="notaSite"
            legend="Nota para o Site"
            register={register}
            watch={watch}
            errors={errors}
          />
          <RatingGroup
            id="notaSuporte"
            legend="Nota para o Suporte"
            register={register}
            watch={watch}
            errors={errors}
          /> 

          {okMsg && (
            <div className="rounded-xl border border-green-200 bg-green-50 text-green-800 px-4 py-3">
              {okMsg}
            </div>
          )}

          {apiError && (
            <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3">
              <strong>Erro ao enviar:</strong> {apiError}
            </div>
          )}

          <div className="flex items-center gap-3 pt-4">
            <button
              type="submit"
              disabled={!isValid || sending}
              className={`
                inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
                text-white bg-[var(--color-primary)] shadow
                disabled:opacity-60 disabled:cursor-not-allowed
                hover:brightness-110 transition
              `}
            >
              {sending ? "Enviando..." : "Enviar Avaliação"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}