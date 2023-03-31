import { Button, View } from "react-native";

import AuthContext from "../../contexts/auth";
import { useContext } from "react";

export function SingIn() {
  const { signed, user ,singIn } = useContext(AuthContext);

  console.log(signed)

  function handleSingIn() {
    singIn();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Sing In" onPress={handleSingIn} />
    </View>
  );
}
