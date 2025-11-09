import { useEffect, useState } from 'react';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';

type Pesquisa = {
    id_pesquisa_satis?: number;
    nt_app: number;
    nt_site: number;
    nt_suporte: number;
    paciente?: {
        cpf_paciente: string;
    };
};

const API_URL = "https://teleajuda.onrender.com";
const GET_ALL_PESQUISAS = "/pesquisa";

export default function VerPesquisas() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [pesquisas, setPesquisas] = useState<Pesquisa[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Estados para as médias (ainda não usados)
    const [avgApp, setAvgApp] = useState(0);
    const [avgSite, setAvgSite] = useState(0);
    const [avgSuporte, setAvgSuporte] = useState(0);

    useEffect(() => {
        if (!user) {
            return;
        }
        if (user.perfil !== "Funcionario") {
            navigate('/perfil');
            return;
        }

        const fetchPesquisas = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(${API_URL}${GET_ALL_PESQUISAS}, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!response.ok) {
                    throw new Error("Não foi possível carregar os dados da pesquisa.");
                }
                const data: Pesquisa[] = await response.json();
                setPesquisas(data);

                // Cálculo de médias virá aqui
                
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPesquisas();
    }, [user, navigate, logout]);

    if (!user) {
        return <main className="text-center p-10">Carregando permissões...</main>;
    }

    return (
        <main className="container mx-auto px-6 lg:px-24 py-10">
            <header className="max-w-4xl mx-auto mb-8 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
                    Resultados da Pesquisa
                </h1>
                <p className="text-gray-600 mt-2 text-xl">
                    Aqui estão as médias de satisfação dos pacientes.
                </p>
            </header>
            
            {isLoading && <p className="text-center text-gray-500">Carregando resultados...</p>}
            {error && <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">{error}</div>}
            
            {!isLoading && !error && (
                <>
                    {/* Seção de Médias virá aqui */}
                    
                    <section className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-center">Todas as Respostas ({pesquisas.length})</h2>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente (CPF)</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nota App</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nota Site</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nota Suporte</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {pesquisas.map((p, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">{p.paciente?.cpf_paciente || "Anônimo"}</td>
                                            <td className="px-6 py-4 text-center">{p.nt_app}</td>
                                            <td className="px-6 py-4 text-center">{p.nt_site}</td>
                                            <td className="px-6 py-4 text-center">{p.nt_suporte}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}