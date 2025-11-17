import { Link, useRouter } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Index() {
  
  const router = useRouter();
  return (
    <View
      style={{
        flex: 12,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/[Apprentissage]" > 
      <Pressable> 
         <Text>Apprentissage</Text> 
      </Pressable>
      </Link>

     <Button title="DaDaisme" onPress={() =>  router.navigate('./[Apprentissage]/Artist')}/>
    
      
      {/*   Weird Pourquoi mes dossier son undefined et lorsque je met like il me dit  */}
       
      <Button title = "Daily" onPress={() => router.navigate('../[Daily]')} />


      <Text>
        <h1> HOME </h1>

        </Text>
    </View>
  );
}
