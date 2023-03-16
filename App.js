import { StatusBar, StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import LoginPage from "./src/components/Login/Login";
import RegisterPage from "./src/components/Register/Register";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" inactiveColor="gray">
        <Tab.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color }) => (
              <Icon2 name="login" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterPage}
          options={{
            tabBarLabel: "Register",
            tabBarColor: "red",
            tabBarIcon: ({ color }) => (
              <Icon name="registered" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
