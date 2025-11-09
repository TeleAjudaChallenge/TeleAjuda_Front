import { useForm } from 'react-hook-form';
import { FaHeadset } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../App';

type FormValues = {
    assunto: string;
    descricao: string;
};

const API_URL = "https://teleajuda.onrender.com";
const TICKET_ENDPOINT = "/ticket";

export default function Chamados() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        setApiError(null);

        if (!user || !user.cpf) {
            setApiError("Você precisa estar logado para abrir um chamado.");
            setIsLoading(false);
            return;
        }

        const apiData = {
            assunto: data.assunto,
            descricao: data.descricao,
            paciente: {
                cpf_paciente: user.cpf
            }
        };

        console.log("Enviando chamado para API:", apiData);

        try {
            const response = await fetch(`${API_URL}${TICKET_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Não foi possível registrar o chamado.");
            }

            alert(`Obrigado! Seu ticket foi enviado com sucesso.`);
            reset();
            navigate('/');

        } catch (error: any) {
            console.error("Erro ao abrir chamado:", error);
            setApiError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="text-center p-8 md:p-12">
                <h1 className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--color-primary)' }}> Abra um Ticket </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12 px-4">

                <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl" style={{ backgroundColor: 'rgba(217, 0, 50, 0.05)' }}>
                    <FaHeadset size={60} style={{ color: 'var(--color-primary)' }} />
                    <h2 className="text-4xl font-bold mt-4" style={{ color: 'var(--color-primary)' }}>
                        Precisa de Ajuda?
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-sm">
                        Preencha o formulário ao lado com os detalhes do seu problema e nossa equipe de suporte entrará em contato o mais breve possível.
                    </p>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-default">
                        <div>
                            <label htmlFor="assunto">Assunto (Título do Problema):</label>
                            <input type="text" id="assunto" {...register("assunto", { required: "O assunto é obrigatório" })} />
                            {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição do Problema:</label>
                            <textarea id="descricao" rows={5} {...register("descricao", { required: "A descrição é obrigatória" })}></textarea>
                            {errors.descricao && <p className="text-red-500 text-sm mt-1">{errors.descricao.message}</p>}
                        </div>

                        {apiError && (
                            <div className="text-red-500 text-sm text-center p-3 rounded-lg bg-red-50">
                                <strong>Erro ao enviar:</strong> {apiError}
                            </div>
                        )}_

                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
