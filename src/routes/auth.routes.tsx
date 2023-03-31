import { SingIn } from "../pages/SingIn";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SingIn" component={SingIn} />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;