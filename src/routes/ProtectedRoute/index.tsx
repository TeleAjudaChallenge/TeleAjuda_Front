import { Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  // A lógica de autenticação será adicionada aqui
  
  // Por enquanto, apenas renderiza as rotas filhas
  return <Outlet />;
}