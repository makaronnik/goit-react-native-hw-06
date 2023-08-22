import * as FileSystem from "expo-file-system";
import * as mime from "react-native-mime-types";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";

const uploadUserAvatar = async (userId, avatarUri) => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(avatarUri);
    const fileExtension = mime.extension(mime.lookup(fileInfo.uri));

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };

      xhr.responseType = "blob";

      xhr.open("GET", avatarUri, true);

      xhr.send(null);
    });

    const storageRef = ref(storage, `avatars/${userId}.${fileExtension}`);

    await uploadBytes(storageRef, blob);

    const url = await getDownloadURL(storageRef);

    return url;
  } catch (error) {
    throw error;
  }
};

export { uploadUserAvatar };
