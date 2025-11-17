import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
export default function Index() {
  const router = useRouter();
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
      
      <Button title=" Daily"
        onPress={()=> router.navigate("../[Daily]/second")}/>
    </View>
  );
}
