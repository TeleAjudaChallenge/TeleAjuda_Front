import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardsFilial from "../../components/Cards/cardsFilial";
import { listaFilial } from "../../data/listaFilial";
import type { TipoFilial } from "../../types/tipoFilial";

export default function Contato() {
  const { filialId } = useParams();
  const navigate = useNavigate();
  
  const [filial, setFilial] = useState<TipoFilial[]>([]);
  const [filialSelecionada, setFilialSelecionada] = useState<number | null>(null);

  useEffect(() => {
    setFilial(listaFilial);
    if (filialId) {
      setFilialSelecionada(Number(filialId));
    }
  }, [filialId]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (id) {
      navigate(`/contato/${id}`);
    } else {
      navigate('/contato');
      setFilialSelecionada(null);
    }
  };

  return (
    <main className="container mx-auto px-6 lg:px-24 py-10 space-y-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
          CONTATO
        </h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">Telefone</p>
          <p className="text-xl font-semibold mt-1">(11)1234-56789</p>
          <a
            href="tel:(11)1234-56789"
            className="inline-block mt-3 px-4 py-2 rounded-lg text-white font-semibold bg-[var(--color-primary)] hover:brightness-110 transition"
          >
            Ligue Já
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500">E-mail</p>
          <p className="text-xl font-semibold mt-1 break-all">suporte@teleajuda.com.br</p>
          <a
            href="mailto:suporte@teleajuda.com.br"
            className="inline-block mt-3 px-4 py-2 rounded-lg font-semibold bg-[var(--color-button)] text-black shadow hover:scale-[1.02] transition"
          >
            Envie um Email
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Nossas Unidades</h2>
        </div>

        <div className="max-w-sm mx-auto">
          <select
            id="unidade-select"
            name="tipo"
            value={filialSelecionada || ""}
            onChange={handleSelectChange}
            className="w-full rounded-lg border-gray-300 px-4 py-2 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
          >
            <option value="">Selecione uma unidade</option>
            <option value="1">Vila Mariana</option>
            <option value="2">Umarizal</option>
            <option value="3">Lapa</option>
            <option value="4">Clínicas</option>
            <option value="5">Morumbi</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-4 w-full justify-center">
          {filialSelecionada &&
            filial
              .filter((f) => f.id === filialSelecionada)
              .map((f) => <CardsFilial key={f.id} filial={f} />)}
        </div>
      </section>
    </main>
  );
}