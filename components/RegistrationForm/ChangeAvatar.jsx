import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import AddAvatarButton from "./AddAvatarButton";
import RemoveAvatarButton from "./RemoveAvatarButton";
import { photoViewContainer } from "../../styles";
import PhotoView from "../UI/PhotoView";

const ChangeAvatar = ({ imageUri, setImageUri }) => {
  const addAvatar = useCallback(async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    imageUri = result?.assets[0]?.uri;

    if (imageUri) {
      setImageUri(imageUri);
    }
  }, []);

  const removeAvatar = useCallback(async () => {
    setImageUri(null);
  }, []);

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.avatarShape, styles.avatarWrapper]}>
        <View
          style={[
            photoViewContainer.base,
            !imageUri && photoViewContainer.empty,
            styles.avatarShape,
            imageUri && styles.avatarHasImage,
          ]}
        >
          {imageUri && <PhotoView photoData={{ uri: imageUri }} />}
        </View>

        {imageUri ? (
          <RemoveAvatarButton
            style={styles.removeAvatarButton}
            onPress={() => removeAvatar()}
          />
        ) : (
          <AddAvatarButton
            style={styles.addAvatarButton}
            onPress={() => addAvatar()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatarShape: {
    width: 120,
    height: 120,

    borderRadius: 16,
  },
  avatarHasImage: {
    backgroundColor: "transparent",
  },
  avatarWrapper: {
    position: "absolute",

    top: -153,
  },
  addAvatarButton: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  removeAvatarButton: {
    position: "absolute",
    right: -18,
    bottom: 8,
  },
});

export default ChangeAvatar;
