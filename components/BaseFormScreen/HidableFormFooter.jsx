import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Keyboard } from "react-native";
import { FormSubmitButton } from "../UI/formElements";

const HidableFormFooter = ({
  buttonText,
  linkText,
  paddingBottom,
  onChangeScreen,
  onSubmit,
  buttonDisabled = false,
}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });

    const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  if (keyboardStatus) {
    return <View></View>;
  }

  return (
    <View style={{ paddingBottom }}>
      <FormSubmitButton
        text={buttonText}
        onSubmit={onSubmit}
        disabled={buttonDisabled}
      ></FormSubmitButton>
      <Pressable style={styles.switchToWrapper} onPress={onChangeScreen}>
        <Text style={styles.switchTo}>{linkText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  switchTo: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  switchToWrapper: {
    marginTop: 16,
    alignItems: "center",
  },
});

export default HidableFormFooter;
