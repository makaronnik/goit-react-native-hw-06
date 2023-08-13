import { StyleSheet, Text, Pressable } from "react-native";

const FormSubmitButton = ({
  text,
  onSubmit,
  buttonStyles,
  disabled = false,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        disabled && styles.containerDisabled,
        buttonStyles && buttonStyles,
      ]}
      onPress={disabled ? null : onSubmit}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    marginTop: 43,
    padding: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  containerDisabled: {
    backgroundColor: "#F6F6F6",
  },
  text: {
    color: "#fff",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  textDisabled: {
    color: "#BDBDBD",
  },
});

export default FormSubmitButton;
