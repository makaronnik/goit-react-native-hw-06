import { View, Text, StyleSheet } from "react-native";
import AvatarImage from "./AvatarImage";

const AuthorBlock = () => {
  return (
    <View style={styles.container}>
      <AvatarImage />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 8,
    justifyContent: "center",
  },
  name: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.80)",
  },
});

export default AuthorBlock;
