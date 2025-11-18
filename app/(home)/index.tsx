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

     <Button title="DaDaisme"  onPress={() =>  router.navigate('./[Apprentissage]/Artist')}/>
   
    
    {/* Essayer de mettre plusieur Link dans la default Route */}

   <Button title="Daily" onPress={() => router.navigate("/[Daily]/second")} />
    <Text>
      <h1> HOME </h1>
    </Text>
    
    <Link href={{
      pathname: "/[Profile]/third",
      params:  { Profile : 'profile'}
    }}> 
    <Button title="Profile"/>
    </Link>
    
    </View>
  );
}
