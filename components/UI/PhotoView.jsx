import { StyleSheet, ImageBackground } from "react-native";

const PhotoView = ({ photoData }) => (
  <ImageBackground
    source={photoData}
    resizeMode="cover"
    style={styles.photoView}
  />
);

const styles = StyleSheet.create({
  photoView: {
    flex: 1,
  },
});

export default PhotoView;
