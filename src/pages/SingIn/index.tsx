import { Button, View } from "react-native";

import { useAuth } from "../../contexts/auth";

export function SingIn() {
  const { signed, user ,singIn } = useAuth();

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
