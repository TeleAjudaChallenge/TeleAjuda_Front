import type { FilialProps } from "../../types/filialProps.ts";

export default function CardFilial({ filial }: FilialProps) {
  return (
    
    <article style={{border:"2px solid #000", backgroundColor:"#1b1b1b",color:"#fff", padding:"1%",margin:"2%", width:"25vw",height:"25vh"}}>
      <h2>{filial.nome}</h2>
      <p>Endereço: {filial.endereco}</p>
      <p>Horário de Atendimento: {filial.horario}</p>
    </article>
 
  );
}