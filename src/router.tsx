import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './views/LoginView.tsx';
import RegisterView from './views/RegisterView.tsx';
import AuthLayout from './layouts/AuthLayout.tsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<h1 className="font-black">Hola mundo SENATI</h1>}></Route>
          <Route path="/api/auth/login" element={<LoginView />}></Route>
          <Route path="/api/auth/register" element={<RegisterView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}