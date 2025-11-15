import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/[Apprentissage]" > 
      <Pressable> 
         <Text>Artist</Text> 
      </Pressable>
     
      
      </Link>
      <Text>
        <h1> HOME </h1>

        </Text>
    </View>
  );
}
