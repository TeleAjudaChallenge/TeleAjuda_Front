import { useEffect, useState } from "react";
import CardFilial from "../../components/Cards/cardsFilial"
import { listaFilial } from "../../data/listaFilial"
import type { TipoFilial } from "../../types/tipoFilial";

export default function Contato(){
    const [filial, setFilial] = useState<TipoFilial[]>([]);
    const [filialSelecionada, setFilialSelecionada] = useState<number | null>(null);

    useEffect(() => {
        setFilial(listaFilial);
        }, []);

    
    return(
        <main>
            <h1>CONTATO</h1>
        <section>
            <div>
                {/* <img src="./img/icons/tel.png" alt="icone telefone"> */}
                <p>(11)1234-56789</p>
                <a href="tel:(11)1234-56789">Ligue Já</a>
            </div>
            <div>
                {/* <img src="./img/icons/email.png" alt="icone email"> */}
                <p>suporte@teleajuda.com.br</p>
                <a href="mailto:suporte@teleajuda.com.br">Envie um Email</a>
            </div>
        </section>
        <section>
            <div>
            <h2>Nossas Unidades</h2>
                <select id="unidade-select" name="tipo" required onChange={(e) => setFilialSelecionada(Number(e.target.value))}
>                   <option value="">Selecione uma unidade</option>
                    <option value="1">Vila Mariana</option>
                    <option value="2">Umarizal</option>
                    <option value="3">Lapa</option>
                    <option value="4">Clínicas</option>
                    <option value="5">Morumbi</option>
                </select>

            </div>
            <div style={{display:"flex",flexWrap:"wrap",width:"100vw",height:"100vh", flexDirection:"row"}}>
                {filialSelecionada && filial.filter((f) => f.id === filialSelecionada).map((f) => <CardFilial key={f.id} filial={f} />)}
            </div>
        </section>
        </main>
    )
}