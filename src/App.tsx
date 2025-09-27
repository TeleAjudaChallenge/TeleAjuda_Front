import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho.tsx"
import Rodape from "./components/Rodape/Rodape.tsx"

export default function App(){

  return(
    <>
        <Cabecalho/>
        <div>
          <Outlet/>
        </div>
        <Rodape/>
    </>
  );
}