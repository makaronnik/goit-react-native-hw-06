import { showMessage } from "react-native-flash-message";

export const showErrorMessage = (error) => {
  showMessage({
    message: "Помилка",
    description: error,
    type: "danger",
    style: {
      paddingTop: 30,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
