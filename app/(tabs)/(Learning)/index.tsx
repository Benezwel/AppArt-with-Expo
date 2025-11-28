import { H1 } from "@expo/html-elements";
import { Link, useRouter } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";




export default function Index() {
  
  const router = useRouter(); 
  const PlaceHolder = require("@/assets/images/lol.avif");
  return (
     <ScrollView>
    <View style= {[styles.container,{ flexDirection: 'column'} ] }>
      
     {/* <Button title="DaDaisme"  onPress={() =>  router.navigate('/1Mouvement')}/> */}
   
    <View style={styles.ImageContainer}> 
    <Text>
    <H1> Artistic Mouvement </H1>
    </Text>
    </View>

    <View style={{flex: 1, backgroundColor: 'red'}} />

    <View style={{flex: 2, backgroundColor: '#8B1E1E'}} />

    <View style={{flex: 3, backgroundColor: 'blue'}} />

    {/* Essayer de mettre plusieur Link dans la default Route */}

  
    
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

