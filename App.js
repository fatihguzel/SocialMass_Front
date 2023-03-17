import "react-native-gesture-handler";
import { Alert, Button, StatusBar, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import IconIcons from "react-native-vector-icons/Ionicons";
import LoginPage from "./src/components/Login/Login";
import RegisterPage from "./src/components/Register/Register";
import Home from "./src/components/Home/Home";
import ProfilePage from "./src/components/Profile/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendsPage from "./src/components/Friends/Friends";
import MessagesPage from "./src/components/Message/Message";

export default function App({ navigation }) {
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const x = 2;
  return (
    <NavigationContainer>
      {/* USER NOT LOGINED */}
      {x == 1 ? (
        <Stack.Navigator
          initialRouteName="LoginPage"
          screenOptions={{
            title: "",
            contentStyle: {
              backgroundColor: "#f1edf5",
            },
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{
                headerStyle: {
                  backgroundColor: "#f1edf5",
                },
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen
              name="RegisterPage"
              component={RegisterPage}
              options={{
                headerStyle: {
                  backgroundColor: "#f1edf5",
                },
                headerShadowVisible: false,
              }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="HomePage"
              component={Home}
              options={{
                headerStyle: {
                  backgroundColor: "#f1edf5",
                },
                headerShadowVisible: false,
              }}
            />

            <Stack.Screen
              name="Logout"
              component={LoginPage}
              options={{
                headerStyle: {
                  backgroundColor: "#f1edf5",
                },
                headerShadowVisible: false,
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        // USER LOGINED
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            title: "",
            contentStyle: {
              backgroundColor: "#f1edf5",
            },
          }}
        >
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
              <Stack.Navigator
                initialRouteName="HomePage"
                screenOptions={{
                  title: "",
                  contentStyle: {
                    backgroundColor: "#f1edf5",
                    headerStyle: {
                      backgroundColor: "#f1edf5",
                    },
                    headerShadowVisible: false,
                  },
                }}
              >
                <Stack.Screen
                  name="HomePage"
                  component={Home}
                  options={{
                    title: "",
                    headerStyle: {
                      backgroundColor: "#f1edf5",
                    },
                    headerShadowVisible: false,
                  }}
                />
                <Stack.Screen
                  name="ProfilePage"
                  component={ProfilePage}
                  options={{
                    title: "",
                    headerStyle: {
                      backgroundColor: "#f1edf5",
                    },
                    headerShadowVisible: false,
                  }}
                />
                <Stack.Screen
                  name="FriendsPage"
                  component={FriendsPage}
                  options={{
                    title: "",
                    headerStyle: {
                      backgroundColor: "#f1edf5",
                    },
                    headerShadowVisible: false,
                  }}
                />
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
              <Stack.Navigator
                initialRouteName="ProfilePage"
                screenOptions={{
                  title: "",
                  contentStyle: {
                    backgroundColor: "#f1edf5",
                  },
                }}
              >
                <Stack.Screen
                  name="ProfilePage"
                  component={ProfilePage}
                  options={{
                    title: "",
                    headerStyle: {
                      backgroundColor: "#f1edf5",
                    },
                    headerShadowVisible: false,
                  }}
                />
                <Stack.Screen
                  name="FriendsPage"
                  component={FriendsPage}
                  options={{
                    title: "",
                    headerStyle: {
                      backgroundColor: "#f1edf5",
                    },
                    headerShadowVisible: false,
                  }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen
            name="ChatPage"
            options={{
              tabBarLabel: "Message",
              tabBarColor: "red",
              tabBarIcon: ({ color }) => (
                <IconIcons name="md-chatbox" color={color} size={25} />
              ),
            }}
          >
            {() => (
              <Stack.Navigator
                initialRouteName="Messages"
                screenOptions={{
                  title: "",
                  contentStyle: {
                    backgroundColor: "#f1edf5",
                  },
                }}
              >
                <Stack.Screen
                  name="MessagesPage"
                  component={MessagesPage}
                  options={{
                    title: "",
                    headerStyle: {
                      backgroundColor: "#f1edf5",
                    },
                    headerShadowVisible: false,
                  }}
                />
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
