import { StyleSheet, Text } from "react-native";

const FormTitle = ({ text }) => {
  return <Text style={styles.formTitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  formTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },
});

export default FormTitle;
