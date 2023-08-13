import { View, Text, StyleSheet } from "react-native";
import { photoViewContainer } from "../../styles";
import PhotoView from "../UI/PhotoView";
import { CommentsLink, LocationLink } from "../UI/links";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={photoViewContainer.base}>
        <PhotoView photoData={post.photoData} />
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.bottomRow}>
        <CommentsLink post={post} />
        <LocationLink post={post} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  title: {
    marginTop: 8,

    fontSize: 16,
    fontFamily: "Roboto-Medium",

    color: "#212121",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 8,
  },
});

export default Post;
