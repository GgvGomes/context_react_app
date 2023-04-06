import { createContext, useContext, useState, useEffect } from "react";
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { View, ActivityIndicatorBase } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from "../services/auth";
import api from "../services/api";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  singIn(): Promise<void>;
  loading: boolean;
  singOut(): void;
  user: User | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageDate() {
      const storageUser = await AsyncStorage.getItem("@GGAuth:user");
      const storageToken = await AsyncStorage.getItem("@GGAuth:token");

      if (storageUser && storageToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageDate();
  }, []);

  async function singIn() {
    const response = await auth.singIn();

    setUser(response.user);

    api.defaults.headers["Authorization"] = `Bearer ${response.token}`;

    await AsyncStorage.setItem("@GGAuth:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@GGAuth:token", response.token);
  }

  async function singOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, singIn, singOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
