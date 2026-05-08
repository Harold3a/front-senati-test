import {Link} from "react-router";
import {useForm} from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage.tsx";
import type {RegisterForm} from "../types";
import axios from "axios";
import type {AxiosResponse} from "axios";

export default function RegisterView() {

  const initialValues:RegisterForm = {
    username: "",
    email: "",
    password: "",
    repeat_password: ""
  };

  const {register, reset, watch, handleSubmit, formState: {errors}} = useForm({defaultValues: initialValues});

  const watchPassword = watch("password","");

  const handleFormSubmit = async (data:RegisterForm) => {
    console.log("Enviando información al backend");
    await axios.post(`/backend/api/auth/register`, data).then((response: AxiosResponse) => {
      console.log("Respuesta: ", response.data);
      reset();
    }).catch((error: unknown) => {
      console.log("Error: ", error);
      if(axios.isAxiosError(error)){
        console.error("Error en la solicitud: ", error.response?.data.error);
      }else{
        console.error("Error desconocido: ", error);
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Formulario Registro</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} >
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu usuario"
              {...register("username", {
                required: {
                  value: true,
                  message: "El nombre de usuario es requerido"
                }
              })}
            />
            {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El email es requerido"
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El email no es válido"
                }
              })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "El password es requerido"
                },
                minLength: {
                  value: 6,
                  message: "El password debe tener al menos 6 caracteres"
                }
              })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </div>
          <div className="mb-6">
            <label htmlFor="repeat-password" className="block text-sm font-medium text-gray-700 mb-2">
              Repetir Contraseña
            </label>
            <input
              type="password"
              id="repeat-password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Repetir tu contraseña"
              {...register("repeat_password", {
                required: {
                  value: true,
                  message: "El password es requerido"
                },
                minLength: {
                  value: 6,
                  message: "El password debe tener al menos 6 caracteres"
                },
                validate: (value) => {
                  if(value !== watchPassword){
                    return "Las contraseñas no coinciden";
                  }
                  return true;
                }
              })}
            />
            {errors.repeat_password && <ErrorMessage>{errors.repeat_password.message}</ErrorMessage>}
          </div>
          <button type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Registrarse
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/auth/login" className="text-sm text-blue-500 hover:underline">
            ¿Tienes una cuenta? Login
          </Link>
        </div>
      </div>
    </div>
  );
}