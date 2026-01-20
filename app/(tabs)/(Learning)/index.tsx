import { H1 } from "@expo/html-elements";
import { Link, useRouter } from "expo-router";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";





export default function Index() {
  // on peut creer ses propre  compoant 
  function Test(){
    return(
      <View>
        <Text> Test pour montre le componant Test</Text>
      </View>
    )
  };
  const router = useRouter(); 
  const PlaceHolder = require("@/assets/images/lol.avif");
  const name = "ArtVanGarde"
  
  
  return (
     <ScrollView>
    <View>
      <Text>{name}</Text>
   <Image source={{
    
  uri:"https://i.pinimg.com/736x/03/7b/31/037b3189716898809199b789208ee922.jpg"}}
    style={{width: 500, height: 500}}  />

   
    <Text>   
      <Test/>
    <H1> Artistic Mouvement </H1>
    </Text>
   
    <Text style={{
      alignItems: "center", 
    }}> Try to learn</Text>

  
    
    <Link href={{ 
      pathname: "./[Profile]/third",
      params:  { Profile : 'profile'}
    }}> 
    
    <Button title="Profile"/>
    </Link>
    
    </View>
    </ScrollView>
  );
}
 const styles = StyleSheet.create({
  container: {
    flex: 1 , 
    backgroundColor:  '#382B1B',
    // alignItems: 'center',
    // justifyContent: 'center', 
  },
  text: {
    color: '#FFFFFF'
  },
  ImageContainer: {
    flex: 1,
  },

  Image: {
    flex : 1,
    width: '100%',
    height: '100%'
  }
 })

