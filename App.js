import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import LoginPage from "./src/components/Login/Login";
import RegisterPage from "./src/components/Register/Register";
import Home from "./src/components/Home/Home";
import ProfilePage from "./src/components/Profile/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendsPage from "./src/components/Friends/Friends";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const x = 2;
  return (
    <NavigationContainer>
      {/* USER NOT LOGINED */}
      {x == 1 ? (
        <Stack.Navigator
          initialRouteName="LoginPage"
          inactiveColor="gray"
          screenOptions={{
            title: "",
            cardStyle: {
              backgroundColor: "#dce5df",
            },
            headerTitleStyle: {
              color: "#dce5df",
              alignItems: "center",
              textAlign: "center",
            },
          }}
          barStyle={{
            backgroundColor: "white",
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{
                tabBarLabel: "Login",
                tabBarIcon: ({ color }) => (
                  <Icon2 name="login" color={color} size={26} />
                ),
              }}
            />
            <Stack.Screen
              name="RegisterPage"
              component={RegisterPage}
              options={{
                tabBarLabel: "Register",
                tabBarColor: "red",
                tabBarIcon: ({ color }) => (
                  <Icon name="registered" color={color} size={25} />
                ),
              }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="HomePage"
              component={Home}
              options={{
                tabBarLabel: "Home",
                tabBarColor: "red",
                tabBarIcon: ({ color }) => (
                  <Icon name="home" color={color} size={25} />
                ),
              }}
            />

            <Stack.Screen
              name="Logout"
              component={LoginPage}
              options={{
                tabBarLabel: "Logout",
                tabBarColor: "red",

                tabBarIcon: ({ color }) => (
                  <Icon2 name="logout" color={color} size={25} />
                ),
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        // USER LOGINED
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Icon2 name="home" color={color} size={25} />
              ),
            }}
          >
            {() => (
              <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen name="HomePage" component={Home} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="FriendsPage" component={FriendsPage} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Profile"
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <Icon2 name="account" color={color} size={25} />
              ),
            }}
          >
            {() => (
              <Stack.Navigator initialRouteName="ProfilePage">
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="FriendsPage" component={FriendsPage} />
              </Stack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen
            name="Logout"
            component={LoginPage}
            options={{
              tabBarLabel: "Logout",
              tabBarColor: "red",
              tabBarIcon: ({ color }) => (
                <Icon2 name="logout" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      )}

      <StatusBar />
    </NavigationContainer>
  );
}
