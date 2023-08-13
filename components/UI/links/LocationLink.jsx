import { Pressable, StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LocationLink = ({ post }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("MapScreen", { post })}
    >
      <View style={styles.row}>
        <Feather name="map-pin" size={24} color="#BDBDBD" style={styles.icon} />
        <Text style={styles.address}>{post.address}</Text>
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
  },
  icon: {
    transform: [{ rotateY: "180deg" }],
  },
  address: {
    marginLeft: 4,

    fontSize: 16,
    fontFamily: "Roboto-Regular",

    textDecorationLine: "underline",

    color: "#212121",
  },
});

export default LocationLink;
