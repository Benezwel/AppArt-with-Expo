import { H1 } from "@expo/html-elements";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  
  const router = useRouter(); 
  const DuchampImage = require('@/assets/images/lol.avif')
  return (
    <View
      style= {styles.container}>

      <Image 
      style={styles.Image}
      source={DuchampImage}/>
      <Link href="/[Apprentissage]" push asChild > 
      <Pressable> 
         <Text style={styles.text}> <H1>Apprentissage </H1></Text> 
      </Pressable>
      </Link>

     <Button title="DaDaisme"  onPress={() =>  router.navigate('./[Apprentissage]/Artist')}/>
   
    
    {/* Essayer de mettre plusieur Link dans la default Route */}

   <Button title="Daily" onPress={() => router.navigate("/[Daily]/second")} />
    <Text style={styles.text}>
       <H1>Home</H1> 
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
 const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:  '#382B1B',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  text: {
    color: '#FFFFFF'
  },
  Image: {
    flex : 1,
    width: '100%',
    height: '100%'
  }
 })

 console.log()