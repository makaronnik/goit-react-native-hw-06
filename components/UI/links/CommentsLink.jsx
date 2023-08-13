import { Pressable, StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CommentsLink = ({ post }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("CommentsScreen", { post })}
    >
      <View style={styles.row}>
        <Feather
          name="message-circle"
          size={24}
          color="#BDBDBD"
          style={styles.icon}
        />
        <Text style={styles.counter}>0</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    transform: [{ rotateY: "180deg" }],
  },
  counter: {
    marginLeft: 6,

    fontSize: 16,
    fontFamily: "Roboto-Regular",

    color: "#BDBDBD",
  },
});

export default CommentsLink;
