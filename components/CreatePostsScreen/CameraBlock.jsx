import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CameraButton from "./CameraButton";
import PhotoView from "../UI/PhotoView";
import { photoViewContainer } from "../../styles";

const CameraBlock = ({ photoData, setPhotoData }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={[photoViewContainer.base, photoViewContainer.empty]}>
        <View style={styles.cameraView}>
          <CameraButton cameraRef={cameraRef} setPhotoData={setPhotoData} />
        </View>
      </View>
    );
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={[styles.container, photoViewContainer.base]}>
      {photoData ? (
        <PhotoView photoData={photoData} />
      ) : (
        <Camera style={styles.camera} ratio="1:1" ref={setCameraRef}>
          <View style={styles.cameraView}>
            <CameraButton cameraRef={cameraRef} setPhotoData={setPhotoData} />
          </View>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  camera: {
    flex: 1,

    width: "100%",
  },
  cameraView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "transparent",
  },
  photoView: {
    flex: 1,
  },
});

export default CameraBlock;
