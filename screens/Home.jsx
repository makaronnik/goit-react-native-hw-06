import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import {
  LogOutButton,
  GridButton,
  UserButton,
  CreatePostsButton,
  GoBackButton,
} from "../components/UI/buttons";

const Home = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        headerTintColor: "#212121",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.408,
          textAlign: "center",
        },
        headerStyle: {
          borderBottomColor: "rgba(189, 189, 189, 0.7)",
          borderBottomWidth: 0.8,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,

          paddingTop: 9,
          paddingBottom: 34,

          borderTopColor: "rgba(189, 189, 189, 0.7)",
          borderTopWidth: 0.7,
          elevation: 0,
        },
        tabBarIcon: () => {
          if (route.name === "Posts") {
            return <GridButton />;
          }

          if (route.name === "Profile") {
            return <UserButton />;
          }

          return <CreatePostsButton />;
        },
      })}
    >
      <Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <LogOutButton />,
        }}
      />
      <Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          headerLeft: () => <GoBackButton />,
          unmountOnBlur: true,
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профіль",
          tabBarStyle: { display: "none" },
          headerLeft: () => <GoBackButton />,
        }}
      />
    </Navigator>
  );
};

export default Home;
