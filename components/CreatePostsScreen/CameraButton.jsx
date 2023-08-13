import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

const CameraButton = ({ cameraRef, setPhotoData }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={async () => {
        if (cameraRef) {
          const { uri } = await cameraRef.takePictureAsync();
          const photoData = await MediaLibrary.createAssetAsync(uri);
          setPhotoData(photoData);
        }
      }}
    >
      <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 18,

    backgroundColor: "#FFF",

    borderRadius: 50,
  },
});

export default CameraButton;
