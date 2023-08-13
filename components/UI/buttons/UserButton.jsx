import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const UserButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "Profile",
        })
      }
    >
      <Feather name="user" size={24} color="#212121" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 8,
  },
});

export default UserButton;
