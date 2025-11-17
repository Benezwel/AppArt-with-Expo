import { Link, useRouter } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

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
      <Link href="/[Apprentissage]" asChild> 
      <Pressable> 
         <Text>Apprentissage</Text> 
      </Pressable>
     
     </Link>

     <Button title="DaDaisme" onPress={() =>  router.navigate('/[Apprentissage]/Artist')}/>
      <Link href= "/[Daily]">
    <Pressable>
    <Text>
      Daily
    </Text>
      </Pressable> 
     </Link>
      <Text>
        <h1> HOME </h1>

        </Text>
    </View>
  );
}
