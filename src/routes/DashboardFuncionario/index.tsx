import { useEffect, useState } from 'react';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function DashboardFuncionario() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
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

        // Lógica de fetch virá aqui
        setIsLoading(false); // Apenas para este commit
        
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
                {isLoading && (
                     <p className="text-center text-gray-500">Buscando tickets...</p>
                )}
                
                {/* A lista de tickets virá aqui */}
                
                {!isLoading && (
                    <p className="text-center text-gray-500">Nenhum ticket encontrado.</p>
                )}
            </section>
        </main>
    );
}