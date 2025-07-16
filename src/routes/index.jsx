import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import CourseDetail from "../pages/CourseDetail";
import VideoAulas from "../pages/VideoAulas";
import { AuthProvider } from "../components/AuthProvider";
import ProtectedRoute from "../components/ProtectedRoute";
import Salvos from "../pages/Salvos";

function RouterManager() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery" element={<RecoveryPassword />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detail"
            element={
              <ProtectedRoute>
                <CourseDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aulas-gravadas"
            element={
              <ProtectedRoute>
                <VideoAulas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/salvos"
            element={
              <ProtectedRoute>
                <Salvos />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default RouterManager;
