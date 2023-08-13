import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.button} onPress={() => navigation.goBack()}>
      <Feather name="arrow-left" size={24} color="#212121" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 16,
  },
});

export default GoBackButton;
