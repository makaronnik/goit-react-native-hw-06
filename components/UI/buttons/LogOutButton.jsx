import { Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { logout } from "../../../store/user/userThunks";

const LogOutButton = () => {
  const dispatch = useDispatch();

  return (
    <Pressable style={styles.button} onPress={() => dispatch(logout())}>
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
