import { useContext } from "react";

import AppDashboard from "./app.routes";
import AuthRoutes from "./auth.routes";

import AuthContext from "../contexts/auth";
import { ActivityIndicatorBase, View, Text } from "react-native";

export function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando...</Text>
        {/* <ActivityIndicatorBase size="large" color="#999" /> */}
      </View>
    );
  }

  return signed ? <AppDashboard /> : <AuthRoutes />;
}
