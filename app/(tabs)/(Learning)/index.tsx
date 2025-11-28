import { Link, useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";


export default function Index() {
  
  const router = useRouter(); 
  const PlaceHolder = require("@/assets/images/lol.avif");
  return (
    <View
      style= {styles.container}>
      

     <Button title="DaDaisme"  onPress={() =>  router.navigate('/1Mouvement')}/>
   
    
    {/* Essayer de mettre plusieur Link dans la default Route */}

  
    
    <Link href={{
      pathname: "./[Profile]/third",
      params:  { Profile : 'profile'}
    }}> 
    
    <Button title="Profile"/>
    </Link>
    
    </View>
  );
}
 const styles = StyleSheet.create({
  container: {
    flex: 1 , 
    backgroundColor:  '#382B1B',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  text: {
    color: '#FFFFFF'
  },
  Image: {
    flex : 1,
    width: '50%',
    height: '50%'
  }
 })

