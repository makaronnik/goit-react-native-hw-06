import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const LogOutButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Login")}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
});

export default LogOutButton;
