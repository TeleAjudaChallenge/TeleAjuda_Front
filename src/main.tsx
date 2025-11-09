import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx'
import Error from "./routes/Error/index.tsx"

import Home from "./routes/Home/index.tsx"
import Chamados from "./routes/Chamados/index.tsx"
import Contato from "./routes/Contato/index.tsx"
import Pesquisa from "./routes/Pesquisa/index.tsx"
import Integrantes from "./routes/Integrantes/index.tsx"
import Faq from "./routes/Faq/index.tsx"
import Sobre from "./routes/Sobre/index.tsx"
import Cadastro from "./routes/Cadastro/index.tsx"
import Login from "./routes/Login/index.tsx"
import Perfil from "./routes/Perfil/index.tsx"

import ProtectedRoute from './routes/ProtectedRoute/index.tsx';

import DashboardFuncionario from "./routes/DashboardFuncionario/index.tsx";
import VerPesquisas from "./routes/VerPesquisa/index.tsx";

import "./global.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
     
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/chamados", element: <Chamados /> },
          { path: "/contato", element: <Contato /> },
          { path: "/contato/:filialId", element: <Contato /> },
          { path: "/pesquisa", element: <Pesquisa /> },
          { path: "/integrantes", element: <Integrantes /> },
          { path: "/faq", element: <Faq /> },
          { path: "/sobre", element: <Sobre /> },
          { path: "/perfil", element: <Perfil /> },
         
          { path: "/dashboard-funcionario", element: <DashboardFuncionario /> },
          { path: "/ver-pesquisas", element: <VerPesquisas /> }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
