import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import Svg, { Defs, Path, G, ClipPath, Rect } from "react-native-svg";

const CreatePostsButton = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Home", {
          screen: "CreatePosts",
        })
      }
    >
      <Svg
        width="70"
        height="40"
        viewBox="0 0 70 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G id="40 / Toolbar / new" clip-path="url(#clip0_12_109)">
          <Rect id="Rectangle" width="70" height="40" rx="20" fill="#FF6C00" />
          <Path
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z"
            fill="white"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_12_109">
            <Rect width="70" height="40" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </Pressable>
  );
};

export default CreatePostsButton;
