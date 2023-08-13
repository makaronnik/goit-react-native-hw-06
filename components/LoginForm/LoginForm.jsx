import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { validateEmail } from "../../utils/validators";
import { FormTitle, FormInput, FormPasswordInput } from "../UI/formElements";
import HidableFormFooter from "../BaseFormScreen/HidableFormFooter";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const isFormValid = email && password;
  const isMailValid = validateEmail(email);

  const handleOnSubmit = () => {
    if (!isFormValid) {
      return;
    }

    let errorMessage = null;

    if (!isMailValid) {
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

    console.log({ email, password });

    navigation.navigate("Home");
  };

  const LinkText = (
    <Text>
      Немає акаунту? <Text style={styles.underlinedText}>Зареєструватися</Text>
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <FormTitle text="Увійти"></FormTitle>
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
          buttonText="Увійти"
          linkText={LinkText}
          paddingBottom={144}
          onChangeScreen={() => navigation.navigate("Registration")}
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
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  underlinedText: {
    textDecorationLine: "underline",
  },
});

export default LoginForm;
