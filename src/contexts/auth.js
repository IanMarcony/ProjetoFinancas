import React, { useState, createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: "Ian",
    uid: "712671249874817",
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
