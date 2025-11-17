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
      }}>


      <Link href="/[Apprentissage]" push asChild > 
      <Pressable> 
         <Text>Apprentissage</Text> 
      </Pressable>
      </Link>

     <Button title="DaDaisme"  onPress={() =>  router.navigate('/[Apprentissage]/Artist')}/>
   
    
    {/* Essayer de mettre plusieur Link dans la default Route */}

    <Link href= "/[Daily]">
    Daily
    </Link>

    <Text>
      <h1> HOME </h1>
    </Text>
    
    
    </View>
  );
}
