import { useEffect, useState } from 'react';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaTimes, FaRegCommentDots } from 'react-icons/fa';

type Ticket = {
    id_ticket: number;
    assunto: string;
    descricao: string;
    resposta: string | null;
    status?: string; 
    paciente?: {
        cpf_paciente: string;
        nm_paciente?: string;
    };
};
type ReplyFormValues = {
    resposta: string;
};
const API_URL = "https://teleajuda.onrender.com";
const GET_ALL_TICKETS = "/ticket";
const RESPOND_TICKET = "/ticket";

export default function DashboardFuncionario() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [ticketSelecionado, setTicketSelecionado] = useState<Ticket | null>(null);
    const { register, handleSubmit, reset } = useForm<ReplyFormValues>();

    useEffect(() => {
        if (!user) {
            return; 
        }
        if (user.perfil !== "Funcionario") {
            navigate('/perfil');
            return;
        }

        const fetchTickets = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(${API_URL}${GET_ALL_TICKETS}, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!response.ok) {
                    throw new Error("Não foi possível carregar os tickets.");
                }
                const data: Ticket[] = await response.json();
                setTickets(data.sort((a, b) => (a.resposta === null ? -1 : 1)));
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTickets();
    }, [user, navigate, logout]);

    const abrirModal = (ticket: Ticket) => {
        setTicketSelecionado(ticket);
        reset({ resposta: "" });
        setModalOpen(true);
    };
    const fecharModal = () => {
        setModalOpen(false);
        setTicketSelecionado(null);
    };

    const onReplySubmit = async (data: ReplyFormValues) => {
        if (!ticketSelecionado || !user || !user.cpf) {
            setError("Erro: Ticket ou funcionário não identificado.");
            setIsLoading(false);
            return;
        }
        
        setIsLoading(true);

        const apiData = {
            id_ticket: ticketSelecionado.id_ticket,
            resposta: data.resposta,
            funcionario: {
                cpf_funcionario: user.cpf
            }
        };

        try {
            const response = await fetch(${API_URL}${RESPOND_TICKET}, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) { 
                const errorText = await response.text();
                throw new Error(errorText || Erro ${response.status}: Não foi possível enviar a resposta.);
            }

            setTickets(tickets.map(t => 
                t.id_ticket === ticketSelecionado.id_ticket 
                ? { ...t, resposta: data.resposta, status: "FECHADO" } 
                : t
            ));
            fecharModal();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!user) {
        return <main className="text-center p-10">Carregando permissões...</main>
    }
    
    return (
        <>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="max-w-4xl mx-auto mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
                        Dashboard do Funcionário
                    </h1>
                    <p className="text-gray-600 mt-2 text-xl">
                        Olá, {user?.nome}. Aqui estão os tickets pendentes.
                    </p>
                </header>

                {error && (
                    <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
                        <strong>Erro:</strong> {error}
                    </div>
                )}

                <section className="max-w-5xl mx-auto space-y-4">
                    {isLoading && tickets.length === 0 && (
                         <p className="text-center text-gray-500">Buscando tickets...</p>
                    )}
                    {tickets.map(ticket => (
                        <div key={ticket.id_ticket} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                        ticket.resposta === null ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                    }`}>
                                        {ticket.resposta === null ? "Aberto" : "Respondido"}
                                    </span>
                                    <h2 className="text-xl font-bold mt-2">{ticket.assunto}</h2>
                                    <p className="text-gray-500 text-sm">ID do Ticket: {ticket.id_ticket}</p>
                                </div>
                                {ticket.resposta === null && (
                                    <button
                                        onClick={() => abrirModal(ticket)}
                                        className="bg-[var(--color-button)] text-black font-semibold py-2 px-4 rounded-lg flex items-center gap-2 hover:scale-105 transition"
                                    >
                                        <FaRegCommentDots /> Responder
                                    </button>
                                )}
                            </div>
                            <hr className="my-4" />
                            <div>
                                <h3 className="font-semibold">Descrição do Paciente:</h3>
                                <p className="text-gray-700 italic">"{ticket.descricao}"</p>
                            </div>
                            {ticket.resposta && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <h3 className="font-semibold text-green-700">Sua Resposta:</h3>
                                    <p className="text-gray-700 italic">"{ticket.resposta}"</p>
                                </div>
                            )}
                        </div>
                    ))}
                    {!isLoading && tickets.length === 0 && (
                        <p className="text-center text-gray-500">Nenhum ticket encontrado.</p>
                    )}
                </section>
            </main>

            {modalOpen && ticketSelecionado && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Responder Ticket #{ticketSelecionado.id_ticket}</h2>
                            <button onClick={fecharModal} className="text-gray-500 hover:text-gray-800">
                                <FaTimes size={24} />
                            </button>
                        </div>
                        
                        <div className="mb-4 space-y-1">
                            <p><strong>Assunto:</strong> {ticketSelecionado.assunto}</p>
                            <p><strong>Descrição:</strong> {ticketSelecionado.descricao}</p>
                        </div>

                        <form onSubmit={handleSubmit(onReplySubmit)}>
                            <label htmlFor="resposta" className="block text-sm font-medium text-gray-700 mb-1">Sua Resposta:</label>
                            <textarea 
                                id="resposta" 
                                rows={5}
                                className="form-default w-full"
                                {...register("resposta", { required: "A resposta é obrigatória" })}
                            ></textarea>
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full mt-4 text-white font-bold py-3 px-4 rounded-lg transition shadow-lg disabled:opacity-50"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                            >
                                {isLoading ? "Enviando..." : "Enviar Resposta"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}