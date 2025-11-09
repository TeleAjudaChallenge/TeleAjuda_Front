import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUserPlus, FaEnvelope, FaLock, FaIdCard, FaPhone, FaRegAddressCard, FaCalendarAlt, FaUserMd } from 'react-icons/fa';

const API_URL = "https://teleajuda.onrender.com";

const formatarCPF = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .substring(0, 14);
};

type FormValues = {
  tipoUsuario: "Paciente" | "Funcionario";
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
  rghc: string;
  dataNascimento: string;
};

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormValues>();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cpfFormatado, setCpfFormatado] = useState("");

  const tipoUsuarioSelecionado = watch("tipoUsuario");

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpfDigitado = formatarCPF(e.target.value);
    setCpfFormatado(cpfDigitado);
    setValue("cpf", cpfDigitado, { shouldValidate: true });
  };

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setApiError(null);

    let endpoint = "";
    let apiData = {};

    if (data.tipoUsuario === "Paciente") {
      endpoint = "/paciente";
      apiData = {
        nm_paciente: data.nome,
        mail_paciente: data.email,
        senha_paciente: data.senha,
        cpf_paciente: data.cpf,
        tel_paciente: data.telefone,
        rghc: data.rghc,
        dt_nasc_paciente: data.dataNascimento
      };
    } else if (data.tipoUsuario === "Funcionario") {
      endpoint = "/funcionario";
      apiData = {
        nm_funcionario: data.nome,
        mail_funcionario: data.email,
        senha: data.senha,
        cpf_funcionario: data.cpf
      };
    } else {
      setApiError("Selecione um tipo de usuário.");
      setIsLoading(false);
      return;
    }

    console.log(`Enviando para ${endpoint}:`, apiData);

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Erro ${response.status}: Não foi possível cadastrar`);
      }

      alert("Cadastro realizado com sucesso! Você será redirecionado para o login.");
      navigate('/login');

    } catch (error: any) {
      console.error("Erro final no catch:", error);
      setApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-[70vh] py-12 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
          <h2 className="text-3xl font-bold mb-4">Já tem uma conta?</h2>
          <p className="mb-6">Faça login para acessar a plataforma e gerenciar seus chamados.</p>
          <Link
            to="/login"
            className="bg-white text-black font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg"
            style={{ color: 'var(--color-primary)' }}>
            Entrar
          </Link>
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
            Crie sua Conta
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <label htmlFor="tipoUsuario" className="block text-sm font-medium text-gray-700 mb-1">Eu sou*</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaUserMd className="text-gray-400" /></span>
                <select
                  id="tipoUsuario"
                  className="form-default w-full pl-10"
                  {...register("tipoUsuario", { required: "Selecione um tipo de usuário" })}>
                  <option value="">Selecione...</option>
                  <option value="Paciente">Paciente</option>
                  <option value="Funcionario">Funcionário</option>
                </select>
              </div>
              {errors.tipoUsuario && <p className="text-red-500 text-sm mt-1">{errors.tipoUsuario.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome*</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaUserPlus className="text-gray-400" /></span>
                  <input type="text" id="nome" className="form-default w-full pl-10" {...register("nome", { required: "Nome é obrigatório" })} />
                </div>
                {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail*</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaEnvelope className="text-gray-400" /></span>
                  <input type="email" id="email" className="form-default w-full pl-10" {...register("email", { required: "Email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF*</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaIdCard className="text-gray-400" /></span>
                  <input
                    type="text" id="cpf" className="form-default w-full pl-10"
                    placeholder="000.000.000-00"
                    {...register("cpf", { required: "CPF é obrigatório", minLength: { value: 14, message: "CPF incompleto" } })}
                    value={cpfFormatado}
                    onChange={handleCpfChange}
                    maxLength={14}
                  />
                </div>
                {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>}
              </div>

              {tipoUsuarioSelecionado === 'Paciente' && (
                <>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone*</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaPhone className="text-gray-400" /></span>
                      <input type="tel" id="telefone" className="form-default w-full pl-10" {...register("telefone", { required: "Telefone é obrigatório" })} />
                    </div>
                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="rghc" className="block text-sm font-medium text-gray-700 mb-1">RGHC*</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaRegAddressCard className="text-gray-400" /></span>
                      <input type="text" id="rghc" className="form-default w-full pl-10" {...register("rghc", { required: "RGHC é obrigatório" })} />
                    </div>
                    {errors.rghc && <p className="text-red-500 text-sm mt-1">{errors.rghc.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento*</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaCalendarAlt className="text-gray-400" /></span>
                      <input type="date" id="dataNascimento" className="form-default w-full pl-10" {...register("dataNascimento", { required: "Data é obrigatória" })} />
                    </div>
                    {errors.dataNascimento && <p className="text-red-500 text-sm mt-1">{errors.dataNascimento.message}</p>}
                  </div>
                </>
              )}
            </div>

            <div className="pt-2">
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">Senha*</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaLock className="text-gray-400" /></span>
                <input type="password" id="senha" className="form-default w-full pl-10" {...register("senha", { required: "Senha é obrigatória", minLength: { value: 6, message: "Mínimo 6 caracteres" } })} />
              </div>
              {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
            </div>

            {apiError && (
              <div className="text-red-500 text-sm text-center pt-2">
                <strong>Erro ao cadastrar:</strong>
                <pre className="whitespace-pre-wrap">{apiError}</pre>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-black font-bold py-3 px-4 rounded-lg transition-transform hover:scale-105 shadow-lg disabled:opacity-50 mt-4"
              style={{ backgroundColor: 'var(--color-button)' }}
            >
              {isLoading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
