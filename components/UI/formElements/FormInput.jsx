import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const FormInput = ({ placeholder, isLast, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        isLast && styles.lastInput,
        isFocused && styles.focusedInput,
      ]}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,
    marginBottom: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",

    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",

    backgroundColor: "#F6F6F6",
  },
  lastInput: {
    marginBottom: 0,
  },
  focusedInput: {
    borderColor: "#FF6C00",

    backgroundColor: "#FFFFFF",
  },
});

export default FormInput;
