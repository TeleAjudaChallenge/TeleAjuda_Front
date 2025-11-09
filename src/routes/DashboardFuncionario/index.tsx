import { useEffect, useState } from 'react';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';

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

const API_URL = "https://teleajuda.onrender.com";
const GET_ALL_TICKETS = "/ticket";

export default function DashboardFuncionario() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    if (!user) {
        return <main className="text-center p-10">Carregando permissões...</main>
    }
    
    return (
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
                            {/* Botão de Resposta virá aqui */}
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
    );
}