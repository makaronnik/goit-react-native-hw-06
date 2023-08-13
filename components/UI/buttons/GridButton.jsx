import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const GridButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "Posts",
        })
      }
    >
      <Ionicons name="grid-outline" size={24} color="#212121" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    padding: 8,
  },
});

export default GridButton;
