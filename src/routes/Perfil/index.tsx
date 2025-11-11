import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
// CORREÇÃO: 'import type'
import type { User } from '../../App';

// APAGADO API_URL DAQUI

type FormValues = {
  nome: string;
  email: string;
  telefone?: string;
  celular?: string;
  dataNascimento?: string;
  rghc?: string;
  cpf?: string;
};

export default function Perfil() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const navigate = useNavigate();

  const { user, isAuthenticated, logout, updateUserContext } = useAuth();
 
  const [isLoading, setIsLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState<{type: "success" | "error", text: string} | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    if (user) {
      reset({
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        celular: user.celular,
        dataNascimento: user.dataNascimento?.split('T')[0],
        rghc: user.rghc,
        cpf: user.cpf
      });
    }
  }, [isAuthenticated, user, navigate, reset]);

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setApiMessage(null);

    // CORREÇÃO: Lê as variáveis do .env
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    if (!user) {
        setApiMessage({ type: "error", text: "Você não está autenticado." });
        return;
    }

    const apiData = {
        cpf_paciente: data.cpf,
        nm_paciente: data.nome,
        tel_paciente: data.telefone,
        mail_paciente: data.email,
        rghc: data.rghc,
        dt_nasc_paciente: data.dataNascimento,
        // CORREÇÃO: Linha da senha removida
    };

    try {
      const response = await fetch(`${API_URL}/paciente`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY // ADICIONADO
        },
        body: JSON.stringify(apiData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Erro ${response.status}: Não foi possível atualizar`);
      }

      setApiMessage({ type: "success", text: "Dados atualizados com sucesso!" });

      const updatedUser: User = {
        ...user,
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        celular: data.celular,
        dataNascimento: data.dataNascimento,
        rghc: data.rghc,
        cpf: data.cpf
      };
      updateUserContext(updatedUser);

    } catch (error: any) {
      console.error("Erro ao atualizar perfil:", error);
      setApiMessage({ type: "error", text: error.message || "Não foi possível conectar à API." });
    } finally {
      setIsLoading(false);
    }
  };
 
  if (!user) {
    return <main className="text-center p-10">Carregando perfil...</main>
  }

 
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
          Meu Perfil
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Veja e atualize suas informações cadastrais.
        </p>
      </header>

      <section className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <FaUserCircle size={60} className="text-gray-300" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.nome}</h2>
              <p className="text-gray-500">{user.perfil} (ID: {user.id})</p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="ml-auto bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition"
            >
              Sair (Logout)
            </button>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF (Não pode ser alterado)</label>
              <input
                type="text"
                id="cpf"
                className="form-default w-full bg-gray-100 cursor-not-allowed"
                {...register("cpf")}
                disabled
              />
            </div>
           
            <div>
              <label htmlFor="rghc" className="block text-sm font-medium text-gray-700 mb-1">RGHC (Não pode ser alterado)</label>
              <input
                type="text"
                id="rghc"
                className="form-default w-full bg-gray-100 cursor-not-allowed"
                {...register("rghc")}
                disabled
              />
            </div>

            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome*</label>
              <input
                type="text"
                id="nome"
                className="form-default w-full"
                {...register("nome", { required: "O nome é obrigatório" })}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail*</label>
              <input
                type="email"
                id="email"
                className="form-default w-full"
                {...register("email", { required: "O e-mail é obrigatório" })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone Fixo</label>
              <input
                type="tel"
                id="telefone"
                placeholder="(11) 2233-4455"
                className="form-default w-full"
                {...register("telefone")}
              />
            </div>
           
            <div>
              <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                className="form-default w-full"
                {...register("dataNascimento")}
              />
            </div>
          </div>

          {apiMessage && (
            <div className={`text-sm text-center p-3 rounded-lg ${
              apiMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {apiMessage.text}
            </div>
          )}

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto text-black font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-lg disabled:opacity-50"
              style={{ backgroundColor: 'var(--color-button)' }}
            >
              {isLoading ? "Salvando..." : "Salvar Alterações"}
            </button>
            <button
              type="button"
              onClick={() => reset(user)}
              disabled={isLoading}
              className="w-full md:w-auto bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}