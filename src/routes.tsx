import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import { AuthProvider } from "./context.tsx/AuthContext";
import { UserProvider } from "./context.tsx/UserContext";
import ProtectedRoute from "./route/RouterProtect";

function Rotas() {
  return (
    <AuthProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}></Route>
        </Routes>
      </UserProvider>
    </AuthProvider>
  );
}

export default Rotas;
