import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoveryPassword from "../pages/RecoveryPassword";

function RouterManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<RecoveryPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterManager;
