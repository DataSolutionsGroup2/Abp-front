import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context.tsx/AuthContext";
import api from "../../services/api";

const Login: React.FC = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        nome,
        senha,
      });

      if (response.status === 200) {
        const { token, user } = response.data;

        if (!token) {
          throw new Error("Token não recebido do servidor");
        }

        login(token, user);
        setNome("");
        setSenha("");
        navigate("/adm");
      } else {
        console.log("Erro ao Logar:", response.data);
      }
    } catch (error: any) {
      console.error("Erro de login:", error);

      if (error.response) {
        if (error.response.status === 401) {
          setError("Credenciais inválidas. Por favor, tente novamente.");
        } else if (error.response.status === 500) {
          setError(
            "O servidor encontrou um erro. Por favor, tente novamente mais tarde."
          );
        }
      } else {
        setError(
          "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde."
        );
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="select-none flex flex-col h-screen">
      <header className="bg-gradient-to-r from-green-900 to-emerald-900 py-10 text-white text-center"></header>
      <div className="flex justify-center items-center flex-grow px-4 md:px-0">
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="rounded-lg border text-green-900 bg-white w-full p-7 mb-3 shadow-2xl">
            <div className="text-center mb-5 font-medium text-lg">
              Entre com a sua conta
            </div>
            <label htmlFor="nome" className="mt-3 font-medium">
              Nome
            </label>
            <input
              className="mb-3 mt-3 roboto rounded-lg p-2 w-full border-[#4CAF50] border hover:border hover:w-full transition-all"
              type="text"
              id="nome"
              placeholder="Entre com o seu usuário"
              value={nome}
              onChange={handleUserChange}
            />
            <label htmlFor="senha" className="mt-3 font-medium">
              Senha
            </label>
            <input
              ref={passwordRef}
              className="mb-3 mt-3 rounded-lg p-2 w-full border-[#4CAF50] border hover:border hover:w-full transition-all"
              type="password"
              id="senha"
              placeholder="Entre com a sua senha"
              value={senha}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />

            {error && (
              <div className="text-[#4CAF50] font-bold mt-2">{error}</div>
            )}
            <button
              className="w-full bg-gradient-to-r from-green-500 to-emerald-900 hover:from-green-600 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg mb-2"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-col ml-8 gap-4 items-center"></div>
      </div>
      <footer className="bg-gradient-to-r from-green-900 to-emerald-900 py-10"></footer>
    </div>
  );
};

export default Login;
