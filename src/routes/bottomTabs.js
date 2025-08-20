import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Ocorrencias from "../screens/Ocorrencias";
import Reservas from "../screens/Reservas";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator();

export default function BottonTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Ocorrencias" component={Ocorrencias} />
            <Tab.Screen name="Reservas" component={Reservas} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}