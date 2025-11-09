import { Outlet, useNavigate } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho.tsx";
import Rodape from "./components/Rodape/Rodape.tsx";
import { createContext, useState, useContext, ReactNode } from 'react';

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

    const login = async (cpf: string, senha: string) => {
        // Lógica de login será implementada
        console.log("Login a ser implementado", cpf, senha);
        return Promise.resolve();
    };
   
    const logout = () => {
        // Lógica de logout será implementada
        console.log("Logout a ser implementado");
    };

    const updateUserContext = (updatedUser: User) => {
        // Lógica de update será implementada
        console.log("Update a ser implementado", updatedUser);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout, updateUserContext }}>
            <Cabecalho />
            <div className="flex-1">
                <Outlet />
            </div>
            <Rodape />
        </AuthContext.Provider>
    );
}
