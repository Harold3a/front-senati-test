import {BrowserRouter, Routes, Route} from 'react-router';
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="font-black">Hola mundo SENATI</h1>}></Route>
        <Route path="/auth/login" element={<LoginView/>}></Route>
        <Route path="/auth/register" element={<RegisterView/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}