import { StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import AuthorBlock from "../components/PostsScreen/AuthorBlock";
import Post from "../components/Post/Post";

const PostsScreen = () => {
  const { params: post } = useRoute();

  return (
    <ScrollView style={styles.container}>
      <AuthorBlock />
      {post && <Post post={post} />}
      {post && <Post post={post} />}
      {post && <Post post={post} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

export default PostsScreen;
