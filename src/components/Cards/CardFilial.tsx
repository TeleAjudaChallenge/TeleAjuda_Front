import type { FilialProps } from "../../types/filialProps.ts";

export default function CardFilial({ filial }: FilialProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg w-full md:w-auto md:min-w-[300px]">
      <h2 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
        {filial.nome}
      </h2>
      <div className="mt-4 space-y-2 text-gray-600">
        <p>
          <strong>Endereço:</strong> {filial.endereco}
        </p>
        <p>
          <strong>Horário de Atendimento:</strong> {filial.horario}
        </p>
      </div>
    </article>
  );
}