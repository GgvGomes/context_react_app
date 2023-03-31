import { Button, Text, View } from "react-native";

import AuthContext from "../../contexts/auth";
import { useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export function Dashboard() {
  const { signed, singOut, user } = useContext(AuthContext);

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
