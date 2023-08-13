import { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import CameraBlock from "../components/CreatePostsScreen/CameraBlock";
import { FormSubmitButton } from "../components/UI/formElements";
import FlatInputContainer from "../components/CreatePostsScreen/FlatInputContainer";
import DeleteButton from "../components/CreatePostsScreen/DeleteButton";

const CreatePostsScreen = () => {
  const [photoData, setPhotoData] = useState(null);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      setLocationPermissionGranted(status === "granted");

      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  isFormSubmitButtonDisabled = !photoData || !title || !address;

  const onSubmit = async () => {
    let location = null;

    if (locationPermissionGranted) {
      const { coords } = await Location.getCurrentPositionAsync({});

      location = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
    }

    navigation.navigate("Home", {
      screen: "Posts",
      params: {
        photoData,
        title,
        address,
        location,
      },
    });
  };

  const onDelete = () => {
    setPhotoData(null);
    setTitle("");
    setAddress("");
  };

  const addressInputIcon = <Feather name="map-pin" size={24} color="#BDBDBD" />;

  return (
    <ScrollView style={styles.container}>
      <CameraBlock photoData={photoData} setPhotoData={setPhotoData} />
      <Text style={styles.text}>Завантажте фото</Text>
      <FlatInputContainer
        placeholder="Назва..."
        value={title}
        onChangeText={setTitle}
      />
      <FlatInputContainer
        placeholder="Місцевість..."
        icon={addressInputIcon}
        value={address}
        onChangeText={setAddress}
      />
      <FormSubmitButton
        text="Опублікувати"
        buttonStyles={styles.submitButton}
        onSubmit={onSubmit}
        disabled={isFormSubmitButtonDisabled}
      />
      <DeleteButton onDelete={onDelete} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,

    marginTop: 8,
    marginBottom: 32,

    color: "#BDBDBD",
  },
  submitButton: {
    marginTop: 32,
  },
});

export default CreatePostsScreen;
