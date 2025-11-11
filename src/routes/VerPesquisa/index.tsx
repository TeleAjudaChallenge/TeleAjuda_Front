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

// APAGADO API_URL e GET_ALL_PESQUISAS DAQUI

export default function VerPesquisas() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [pesquisas, setPesquisas] = useState<Pesquisa[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

            // CORREÇÃO: Lê as variáveis do .env
            const API_URL = import.meta.env.VITE_API_URL;
            const API_KEY = import.meta.env.VITE_API_KEY;
            const GET_ALL_PESQUISAS = "/pesquisa";

            try{
                const response = await fetch (`${API_URL}${GET_ALL_PESQUISAS}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type':'application/json',
                        'X-API-Key': API_KEY // ADICIONADO
                    },
                });
                if (!response.ok) {
                    throw new Error("Não foi possivel carregar os dados da pesquisa.");
                }
                const data: Pesquisa[] = await response.json();
                setPesquisas(data);

                if (data.length > 0) {
                    const totalApp = data.reduce((sum, item) => sum + item.nt_app, 0);
                    const totalSite = data.reduce((sum, item) => sum + item.nt_site, 0);
                    const totalSuporte = data.reduce((sum, item) => sum + item.nt_suporte, 0);

                    setAvgApp(totalApp / data.length);
                    setAvgSite(totalSite / data.length);
                    setAvgSuporte(totalSuporte / data.length);
                }
            } catch (err: any) {
                setError(err.message)
            } finally {
                setIsLoading(false)
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
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                            <h2 className="text-lg font-semibold text-gray-600">Média App</h2>
                            <p className="text-5xl font-bold mt-2" style={{ color: 'var(--color-primary)' }}>
                                {avgApp.toFixed(1)}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                            <h2 className="text-lg font-semibold text-gray-600">Média Site</h2>
                            <p className="text-5xl font-bold mt-2" style={{ color: 'var(--color-primary)' }}>
                                {avgSite.toFixed(1)}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                            <h2 className="text-lg font-semibold text-gray-600">Média Suporte</h2>
                            <p className="text-5xl font-bold mt-2" style={{ color: 'var(--color-primary)' }}>
                                {avgSuporte.toFixed(1)}
                            </p>
                        </div>
                    </section>

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