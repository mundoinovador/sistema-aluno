import "./AuthProvider.scss";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Usuário deslogado com sucesso.");
      })
      .catch((error) => {
        console.log("Erro ao deslogar:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  let timer;

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      logout();
    }, 30 * 60 * 1000);
  };

  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keydown", resetTimer);

  resetTimer();

  if (loading) {
    return (
      <div className="auth-provider-container">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
