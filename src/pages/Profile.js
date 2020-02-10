import React from 'react';
import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';

export default function Profile() {

  const { id = 4 } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>
        Profile: {id}
      </h1>
      <button onClick={() => navigate('/')}>
        Voltar
      </button>

      <Link to="purchase">Compras</Link>
      <Link to="password">Senha</Link>
      <Link to="/profile">Voltar</Link>

      <Outlet />
    </>
  );
}
