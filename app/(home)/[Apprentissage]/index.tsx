import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text>
        <h1> Apprentissage</h1>
        </Text>
      <Link 
      href= "../[Daily]">
        Daily
      </Link>
    </View>
  );
}
