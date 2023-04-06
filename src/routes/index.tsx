import AppDashboard from "./app.routes";
import AuthRoutes from "./auth.routes";

import { View, Text } from "react-native";
import { useAuth } from "../contexts/auth";

export function Routes() {
  const { signed, loading } = useAuth();

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
