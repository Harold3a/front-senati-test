import {Outlet} from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <p className="text-center">Por favor, regístrate para continuar.</p>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Outlet/>
      </div>
    </>
  );
}