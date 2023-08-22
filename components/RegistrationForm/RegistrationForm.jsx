import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../store/user/userThunks";
import { validateEmail } from "../../utils/validators";
import { FormTitle, FormInput, FormPasswordInput } from "../UI/formElements";
import ChangeAvatar from "./ChangeAvatar";
import HidableFormFooter from "../BaseFormScreen/HidableFormFooter";

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUri, setAvatarUri] = useState(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isFormValid = login && email && password;
  const isMailValid = validateEmail(email);

  const handleOnSubmit = () => {
    if (!isFormValid) {
      return;
    }

    let errorMessage = null;

    if (!login) {
      errorMessage = "Введіть логін";
    } else if (!isMailValid) {
      errorMessage = "Введіть коректну адресу електронної пошти";
    } else if (!password) {
      errorMessage = "Введіть пароль";
    }

    if (errorMessage) {
      showMessage({
        message: "Помилка",
        description: errorMessage,
        type: "danger",
        style: {
          paddingTop: 30,
          justifyContent: "center",
          alignItems: "center",
        },
      });

      return;
    }

    dispatch(register({ login, email, password, avatarUri }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <ChangeAvatar imageUri={avatarUri} setImageUri={setAvatarUri} />
        <FormTitle text="Реєстрація"></FormTitle>
        <FormInput
          placeholder="Логін"
          textContentType="username"
          onChangeText={setLogin}
          value={login}
        />
        <FormInput
          placeholder="Адреса електронної пошти"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <FormPasswordInput
          isLast={true}
          onChangeText={setPassword}
          value={password}
        />
        <HidableFormFooter
          buttonText="Зареєстуватися"
          linkText="Вже є акаунт? Увійти"
          paddingBottom={46}
          onChangeScreen={() => navigation.navigate("Login")}
          onSubmit={handleOnSubmit}
          buttonDisabled={!isFormValid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "relative",

    paddingTop: 92,
    paddingBottom: 32,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
});

export default RegistrationForm;
