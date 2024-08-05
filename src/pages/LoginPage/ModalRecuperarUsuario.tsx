import React, { useState } from "react";
import Modal from "react-modal";
import api from "../../services/api";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await api.post("/recover-password", { email });

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.error || "Erro ao recuperar senha");
      } else {
        setError("Erro ao recuperar senha");
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
        <h2 className="text-center text-2xl font-bold mb-4">Recuperar Senha</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="forgot-email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="forgot-email"
            value={email}
            onChange={handleEmailChange}
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
            Enviar Email de Recuperação
          </button>
        </form>
        <button className="mt-4 text-red-500" onClick={onRequestClose}>
          Fechar
        </button>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
