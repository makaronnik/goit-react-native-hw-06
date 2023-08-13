import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FormInput from "./FormInput";

const FormPasswordInput = ({ isLast = false, onChangeText }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.inputWrapper}>
      <FormInput
        placeholder="Пароль"
        textContentType="newPassword"
        isLast={isLast}
        secureTextEntry={hidePassword}
        onChangeText={onChangeText}
      />
      <Pressable
        style={styles.showPasswordWrapper}
        onPress={() => {
          setHidePassword(!hidePassword);
        }}
      >
        <Text style={styles.showPassword}>
          {hidePassword ? "Показати" : "Сховати"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
  },
  showPassword: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  showPasswordWrapper: {
    position: "absolute",
    right: 16,
    top: 22,
  },
});

export default FormPasswordInput;
