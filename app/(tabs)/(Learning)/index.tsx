import { H1 } from "@expo/html-elements";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";





export default function Index() {
  // on peut creer ses propre  compoant 
  function Test(){
    return(
      <View>
        <Text> Test pour montre le componant Test</Text>
      </View>
    )
  };

// typescript give a type to the props
  type caProps = {
    name: string
  };

  function Cat(props: caProps){
    const [isHungry, setIsHungry] = useState(true);
    const [text, setText] = useState('');
    return (
      <View>
        <Text >
          I'am {props.name}, and I am {isHungry ? "hungry" : "full"}!
        </Text>
        
        <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Give me  some food, please!" : "thanks"} />

      </View>
    )
  }
  const router = useRouter(); 
  const PlaceHolder = require("@/assets/images/lol.avif");
  const name = "ArtVanGarde";
  const [text, setText] = useState('');

  const logo = {
    uri: 'https://artvantgard.com/white%20full%20logo.svg',
    width: 100,
    height: 100,
    flex: 2 
  }
  
  
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

  
    <Cat name="Mama"/>
    
    {/* <Link href={{ 
      pathname: "./[Profile]/third",
      params:  { Profile : 'profile'}
    }}>  */}
    <Cat name="pOPI"/>

    
{/* <Button title="Profile"/> </Link> */}
    
    </View>
    <View style={{
      justifyContent: "center",
      flex: 1,
    }}>  
    <TextInput 
    placeholder="Search Bar"
    onChangeText={newtext => setText(newtext)}
    defaultValue={text}
    style={{
      height: 40,
      padding: 5,
      marginHorizontal: 8,
      borderWidth: 1
    }}
    />
    <Text style={{
      padding: 10,
      fontSize: 42
    }}>

      {text.split('').map(word => word && '🍕').join('g')}
    </Text>
    
    </View>
    <View>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
      <Image source={logo}/>
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

