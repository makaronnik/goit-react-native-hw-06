import { Pressable, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const DeleteButton = ({ onDelete }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onDelete}>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    paddingHorizontal: 23,
    paddingVertical: 8,

    borderRadius: 20,

    backgroundColor: "#F6F6F6",
  },
});

export default DeleteButton;
