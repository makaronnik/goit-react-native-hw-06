import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAirv_pHov0e4SyTo8WonQ5ZE6Z7rm7joA",
  authDomain: "goit-react-native-hw-kyiv.firebaseapp.com",
  projectId: "goit-react-native-hw-kyiv",
  storageBucket: "goit-react-native-hw-kyiv.appspot.com",
  messagingSenderId: "468692597689",
  appId: "1:468692597689:web:1015850105318b28bd1468",
  measurementId: "G-X09480H4H2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
