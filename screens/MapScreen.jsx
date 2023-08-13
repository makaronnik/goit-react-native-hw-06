import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/core";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const {
    params: { post },
  } = useRoute();

  const { latitude, longitude } = post.location;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude, longitude }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#fff",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
