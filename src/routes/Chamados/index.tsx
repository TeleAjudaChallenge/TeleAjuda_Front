import { useForm } from 'react-hook-form';
import { FaHeadset } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type FormValues = {
    nome: string;
    email: string;
    telefone: string;
    tipo: string;
    titulo: string;
    descricao: string;
};

export default function Chamados(){
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const navigate = useNavigate();

    const onSubmit = (data: FormValues) => {
        console.log(data);
        alert(`Obrigado, ${data.nome}! Seu ticket foi enviado com sucesso.`);
        reset();

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return(
        <>
            <div className="text-center p-8 md:p-12">
                <h1 
                    className="text-5xl md:text-6xl font-bold" 
                    style={{ color: 'var(--color-primary)' }}
                >
                    Abra um Ticket
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12 px-4">
                
                <div 
                    className="flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                    style={{ backgroundColor: 'rgba(217, 0, 50, 0.05)' }}
                >
                    <FaHeadset size={60} style={{ color: 'var(--color-primary)' }}/>
                    <h2 className="text-4xl font-bold mt-4" style={{ color: 'var(--color-primary)' }}>
                        Precisa de Ajuda?
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-sm">
                        Preencha o formulário ao lado com os detalhes do seu problema e nossa equipe de suporte entrará em contato o mais breve possível.
                    </p>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-default">
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" {...register("nome", { required: "O nome é obrigatório" })} />
                            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" {...register("email", { required: "O email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" {...register("telefone", { required: "O telefone é obrigatório" })} />
                            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="tipo">Quem você é</label>
                            <select id="tipo" {...register("tipo", { required: "Selecione uma opção" })}>
                                <option value="">Selecione</option>
                                <option value="parente">Parente</option>
                                <option value="cuidador">Cuidador</option>
                                <option value="paciente">Paciente</option>
                            </select>
                            {errors.tipo && <p className="text-red-500 text-sm mt-1">{errors.tipo.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="titulo">Título do Problema:</label>
                            <input type="text" id="titulo" {...register("titulo", { required: "O título é obrigatório" })} />
                            {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo.message}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="descricao">Descrição do Problema:</label>
                            <textarea id="descricao" rows={5} {...register("descricao", { required: "A descrição é obrigatória" })}></textarea>
                            {errors.descricao && <p className="text-red-500 text-sm mt-1">{errors.descricao.message}</p>}
                        </div>
                        
                        <button type="submit">Enviar</button>
                    </form>
                </div>

            </div>
        </>
    )
}