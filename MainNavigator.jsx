import "react-native-gesture-handler";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import CommentsScreen from "./screens/CommentsScreen";
import Loader from "./components/UI/Loader";
import { GoBackButton } from "./components/UI/buttons";
import { showErrorMessage } from "./utils/messageHelper";
import { setUser, clearUser } from "./store/user/userSlice";
import { selectUserState } from "./store/user/userSelectors";
import { auth } from "./firebase/config";

const MainNavigator = () => {
  const headerOptions = useMemo(
    () => ({
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
      headerLeft: () => <GoBackButton />,
    }),
    []
  );

  const {
    user,
    isLoading: userIsLoading,
    error: userError,
  } = useSelector(selectUserState);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (maybeUser) => {
      if (maybeUser) {
        const { uid, email, displayName, photoURL } = maybeUser;

        dispatch(setUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  const { Navigator, Screen } = createStackNavigator();

  if (userError) {
    showErrorMessage(userError);
  }

  return (
    <>
      {userIsLoading ? (
        <Loader />
      ) : (
        <NavigationContainer>
          {user ? (
            <Navigator initialRouteName="Home">
              <Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Screen
                name="CommentsScreen"
                component={CommentsScreen}
                options={{
                  title: "Коментарі",
                  ...headerOptions,
                }}
              />
              <Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  title: "Мапа",
                  ...headerOptions,
                }}
              />
            </Navigator>
          ) : (
            <Navigator initialRouteName="Login">
              <Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            </Navigator>
          )}
        </NavigationContainer>
      )}
    </>
  );
};

export default MainNavigator;
