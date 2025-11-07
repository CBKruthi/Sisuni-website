import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  userEmail: string;
  login: (email: string, isAdmin: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const admin = localStorage.getItem("isAdmin") === "true";

    if (loggedIn && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
      setIsAdmin(admin);
    }

    setLoading(false);
  }, []);

  const login = (email: string, isAdminFlag: boolean) => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isAdmin", isAdminFlag ? "true" : "false");

    setUserEmail(email);
    setIsLoggedIn(true);
    setIsAdmin(isAdminFlag);
  };

  const logout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");

    setUserEmail("");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading authentication...</div>;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
