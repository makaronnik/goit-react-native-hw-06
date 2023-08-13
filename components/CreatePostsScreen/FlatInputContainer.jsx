import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const FlatInputContainer = ({ placeholder, onChangeText, icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,

    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  focusedContainer: {
    borderColor: "#FF6C00",
  },
  input: {
    paddingTop: 14,
    paddingBottom: 13,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  iconWrapper: {
    marginRight: 4,
  },
});

export default FlatInputContainer;
