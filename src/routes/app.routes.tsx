import { Dashboard } from "../pages/Dashboard";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator();

const AppDashboard = () => {
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Dashboard" component={Dashboard} />
        </AppStack.Navigator>
    )
}
export default AppDashboard;