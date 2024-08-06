import React, { useState } from "react";
import Modal from "react-modal";
import api from "../../services/api";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  email: string;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  isOpen,
  onRequestClose,
  email,
}) => {
  const [recoveryCode, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await api.post("/recuperacao-senha", {
        email,
        recoveryCode,
        newPassword,
      });

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.error || "Erro ao redefinir senha");
      } else {
        setError("Erro ao redefinir senha");
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="relative bg-white rounded-lg w-full max-w-md p-6 mx-4 overflow-y-auto max-h-[90%] outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    >
      <div>
        <h2 className="text-center text-2xl font-bold mb-4">Redefinir Senha</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="reset-code" className="block mb-2">
            Código de Recuperação:
          </label>
          <input
            type="text"
            id="reset-code"
            value={recoveryCode}
            onChange={handleCodeChange}
            className="w-full p-2 border mb-3 rounded"
            required
          />
          <label htmlFor="new-password" className="block mb-2">
            Nova Senha:
          </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="w-full p-2 border mb-3 rounded"
            required
          />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          {successMessage && (
            <div className="text-green-500 mb-2">{successMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4"
          >
            Redefinir Senha
          </button>
        </form>
        <button className="mt-4 text-red-500" onClick={onRequestClose}>
          Fechar
        </button>
      </div>
    </Modal>
  );
};

export default ResetPasswordModal;
