"use client";

import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: {
    email: string;
    isAuthenticated: boolean;
  };
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    email: "",
    isAuthenticated: false,
  });

  const login = (email: string, password: string) => {
    if (email === "musty@gmail.com" && password === "pass1") {
      setUser((prev) => ({
        ...prev,
        email,
        isAuthenticated: true,
      }));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser({ email: "", isAuthenticated: false });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth Hook must be used inside a FC component");
  }
  return context;
};

// import { createContext, ReactNode, useEffect, useState } from "react";

// interface User {
//   id: string;
//   email: string;
//   name: string;
//   role: string;
// }

// // interface AuthContextType {
// //   user: User | null;
// //   login: (email: string, password: string) => Promise<boolean>;
// //   logout: () => void;
// //   isLoading: boolean;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);
// const AuthContext = createContext<any>(undefined);

// // const FAKE_USERS = [
// //   {
// //     id: "1",
// //     email: "admin@example.com",
// //     password: "admin123",
// //     name: "Zesty Zen",
// //     role: "admin",
// //   },
// //   {
// //     id: "2",
// //     email: "user@example.com",
// //     password: "user123",
// //     name: "John Doe",
// //     role: "user",
// //   },
// // ];
// export const AuthProvider = ({ children }: { children: ReactNode }) => {
// //   const [user, setUser] = useState<User | null>(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("fakeAuthUser");
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //     setIsLoading(false);
// //   }, [])

// //   const login = async (email: string, password: string): Promise<boolean> => {
// //     setIsLoading(true);

// //     // simulate api delay
// //     await new Promise((resolve) => setTimeout(resolve, 1000));
// //     const foundUser = FAKE_USERS.find(
// //       (user) => user.email === email && user.password === password
// //     );
// //     if (foundUser) {
// //       const userData = {id: foundUser.id, email: foundUser.email, name: foundUser.name, role: foundUser.role};
// //       setUser(userData);
// //       localStorage.setItem("fakeAuthUser", JSON.stringify(userData));
// //       setIsLoading(false);
// //       return true;
// //   }
// // };

//   // const logout = () => {
//   //   setUser(null);
//   //   localStorage.removeItem("fakeAuthUser");
//   // }
