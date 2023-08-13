import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/core";
import { photoViewContainer } from "../styles";
import PhotoView from "../components/UI/PhotoView";

const CommentsScreen = () => {
  const {
    params: { post },
  } = useRoute();

  return (
    <View style={styles.container}>
      <View style={photoViewContainer.base}>
        <PhotoView photoData={post.photoData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 32,
    paddingHorizontal: 16,

    backgroundColor: "#fff",
  },
});

export default CommentsScreen;
