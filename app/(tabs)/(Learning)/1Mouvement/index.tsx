import { H1 } from "@expo/html-elements";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";


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
    
  
      {/* <Button 
        title=" return back"
        onPress={() => router.push('./[Daily]/second')} /> */}

      <Text>
        <H1> Mouvement</H1>

        </Text>
    </View>
  );
}
