import { View, Text, StyleSheet } from "react-native";

const AvatarImage = () => {
  return <View style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,

    borderRadius: 16,

    backgroundColor: "#F6F6F6",
  },
});

export default AvatarImage;
