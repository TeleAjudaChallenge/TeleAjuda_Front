import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho.tsx";
import Rodape from "./components/Rodape/Rodape.tsx";
import { createContext, useState, useContext, useEffect } from 'react';

// --- DEFINIÇÃO DE TIPOS ---
type User = {
    id: number;
    nome: string;
    email: string;
    perfil: "Paciente" | "Funcionario";
    telefone?: string;
    celular?: string;
    dataNascimento?: string;
    rghc?: string;
    cpf?: string;
    id_funcionario?: number;
};

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    login: (cpf: string, senha: string) => Promise<void>;
    logout: () => void;
    updateUserContext: (updatedUser: User) => void;
};

// --- CRIAÇÃO DO CONTEXTO ---
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- HOOK CUSTOMIZADO ---
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro do App');
    }
    return context;
}

// --- COMPONENTE APP (Provedor) ---
export default function App() {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthPage, setIsAuthPage] = useState(false);

    useEffect(() => {
        const authRoutes = ['/login', '/cadastro'];
        if (authRoutes.includes(location.pathname)) {
            setIsAuthPage(true);
        } else {
            setIsAuthPage(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        const storedUser = localStorage.getItem('teleajuda_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (cpf: string, senha: string) => {
        const API_URL = "https://teleajuda.onrender.com";

        try {
            // --- TENTATIVA 1: LOGAR COMO PACIENTE ---
            const validacaoPaciente = await fetch(`${API_URL}/paciente/validar/${cpf}/${senha}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (validacaoPaciente.ok) {
                const dadosResponse = await fetch(`${API_URL}/paciente/cpf/${cpf}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }});
                if (!dadosResponse.ok) throw new Error('CPF validado (Paciente), mas não foi possível buscar os dados.');
               
                const dadosApi = await dadosResponse.json();
                const userData: User = {
                    id: dadosApi.id_paciente || dadosApi.id,
                    nome: dadosApi.nm_paciente, email: dadosApi.mail_paciente,
                    telefone: dadosApi.tel_paciente, cpf: dadosApi.cpf_paciente,
                    rghc: dadosApi.rghc, dataNascimento: dadosApi.dt_nasc_paciente,
                    perfil: "Paciente"
                };
               
                setUser(userData);
                setIsAuthenticated(true);
                localStorage.setItem('teleajuda_user', JSON.stringify(userData));
                navigate('/perfil');
                return;
            }

            // --- TENTATIVA 2: LOGAR COMO FUNCIONÁRIO ---
            const validacaoFuncionario = await fetch(`${API_URL}/funcionario/validar/${cpf}/${senha}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (validacaoFuncionario.ok) {
                const dadosResponse = await fetch(`${API_URL}/funcionario/cpf/${cpf}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }});
                if (!dadosResponse.ok) throw new Error('CPF validado (Funcionário), mas não foi possível buscar os dados.');
               
                const dadosApi = await dadosResponse.json();
                const userData: User = {
                    id: 0,
                    id_funcionario: dadosApi.id_funcionario || dadosApi.id,
                    nome: dadosApi.nm_funcionario, email: dadosApi.mail_funcionario,
                    cpf: dadosApi.cpf_funcionario, perfil: "Funcionario"
                };
               
                setUser(userData);
                setIsAuthenticated(true);
                localStorage.setItem('teleajuda_user', JSON.stringify(userData));
                navigate('/');
                return;
            }

            throw new Error('CPF ou senha inválidos.');

        } catch (error: any) {
            console.error("Erro no processo de login:", error.message);
            throw new Error(error.message || 'CPF ou senha inválidos.');
        }
    };
   
    const logout = () => {
        setUser(null); setToken(null); setIsAuthenticated(false);
        localStorage.removeItem('teleajuda_user');
        navigate('/login');
    };

    const updateUserContext = (updatedUser: User) => {
        // Lógica de update será implementada
        console.log("Update a ser implementado", updatedUser);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout, updateUserContext }}>
            {!isAuthPage && <Cabecalho />}
            <div className="flex-1">
                <Outlet />
            </div>
            {!isAuthPage && <Rodape />}
        </AuthContext.Provider>
    );
}
