import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";

const registerUser = async (email, password, name) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(user, { displayName: name });

    return user;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

const updateUserAvatar = async (avatarUrl) => {
  try {
    const user = auth.currentUser;

    await updateProfile(user, { photoURL: avatarUrl });
  } catch (error) {
    throw error;
  }
};

export { registerUser, loginUser, logoutUser, updateUserAvatar };
