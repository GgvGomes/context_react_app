import { Button, Text, View } from "react-native";

import { useAuth } from "../../contexts/auth";
// import AsyncStorage from "@react-native-community/async-storage";

export function Dashboard() {
  const { singOut, user } = useAuth();

  function handleSingOut() {
    singOut();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{user?.name}</Text>
      <Button title="Sing Out" onPress={handleSingOut} />
    </View>
  );
}
