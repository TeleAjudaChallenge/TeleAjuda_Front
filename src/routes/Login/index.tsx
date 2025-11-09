import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaIdCard, FaLock } from 'react-icons/fa';
import { useAuth } from '../../App';

const formatarCPF = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .substring(0, 14);
};

type FormValues = {
  cpf: string;
  senha: string;
};

export default function Login() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>();
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cpfFormatado, setCpfFormatado] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpfDigitado = formatarCPF(e.target.value);
    setCpfFormatado(cpfDigitado);
    setValue("cpf", cpfDigitado, { shouldValidate: true });
  };

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setApiError(null);

    try {
      await login(data.cpf, data.senha);

    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      setApiError(error.message || "CPF ou senha inválidos.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <main className="flex items-center justify-center min-h-[70vh] py-12 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        <div className="p-8 md:p-12 md:order-last">
          <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
            Bem-vindo de volta!
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaIdCard className="text-gray-400" />
                </span>
                <input
                  type="text"
                  id="cpf"
                  className="form-default w-full pl-10"
                  placeholder="000.000.000-00"
                  {...register("cpf", {
                    required: "O CPF é obrigatório",
                    minLength: { value: 14, message: "CPF incompleto" }
                  })}
                  value={cpfFormatado}
                  onChange={handleCpfChange}
                  maxLength={14}
                />
              </div>
              {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>}
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock className="text-gray-400" />
                </span>
                <input
                  type="password"
                  id="senha"
                  className="form-default w-full pl-10"
                  placeholder="••••••••"
                  {...register("senha", { required: "A senha é obrigatória" })}
                />
              </div>
              {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
            </div>

            {apiError && <p className="text-red-500 text-sm text-center">{apiError}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-black font-bold py-3 px-4 rounded-lg transition-transform hover:scale-105 shadow-lg disabled:opacity-50"
              style={{ backgroundColor: 'var(--color-button)' }}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center text-white md:order-first" style={{ backgroundColor: 'var(--color-primary)' }}>
          <h2 className="text-3xl font-bold mb-4">Ainda não tem conta?</h2>
          <p className="mb-6">Crie sua conta para ter acesso completo e abrir seus chamados.</p>
          <Link
            to="/cadastro"
            className="bg-white text-black font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg"
            style={{ color: 'var(--color-primary)' }}
          > Cadastrar
          </Link>
        </div>
      </div>
    </main>
  );
}
