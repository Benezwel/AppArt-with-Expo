import { H1 } from "@expo/html-elements";
import { useRouter } from "expo-router";
import { PropsWithChildren, useState } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaProvider } from "react-native-safe-area-context";





export default function Index() {
  // on peut creer ses propre  compoant 
  function Test(){
    return(
      <View style={{  justifyContent: "center",
        marginHorizontal: 8,
        padding: 10,
        backgroundColor: "orange",
        flex: 1,

      }} >
        <Text style={{ flex: 1}}> Test pour montre le componant Test</Text>
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
      <View style={{ 
        backgroundColor: "red",
      }} >
        <Text  style={{ flex: 1, backgroundColor: "orange"}}>
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

  const data = [
    {
      id:1,
      title:"Sonya Rapoport",
      imageUrl:"https://uploads5.wikiart.org/temp/d3ac2d09-98c5-4947-aa4f-574112086a9f.jpg!PinterestLarge.jpg"
    },
    {
      id:2,
      title:"Wen-Ying Tsai",
      imageUrl:"https://uploads2.wikiart.org/images/wen-ying-tsai.jpg!PinterestLarge.jpg"
    },
    {
      id:3,
      title:"Ronald Davis",
      imageUrl:"https://uploads5.wikiart.org/temp/5063a88a-b87a-42a1-81a8-188eb97fec99.jpg!PinterestLarge.jpg"
    },
    {
      id:4,
      title:"Vladimir Bonacic",
      imageUrl:"https://uploads5.wikiart.org/temp/cd7790be-16c0-4b57-b4fc-13dd9d0f9a91.jpg!PinterestLarge.jpg"
    },
    {
      id:5,
      title:"Piero Gilardi",
      imageUrl:"https://uploads2.wikiart.org/images/piero-gilardi.jpg!PinterestLarge.jpg"
    },
    {
      id:6,
      title:"[ a y s h ]",
      imageUrl:"https://uploads8.wikiart.org/00341/images/ayshia-taskin/ayshia-taskin-paradise-corns-2018-by-ryan-buchanan.jpg!PinterestLarge.jpg"
    },

  ]
  const logo = {
    uri: 'https://artvantgard.com/white%20full%20logo.svg',
    width: 100,
    height: 100,
    flex: 1,
  }
  //////////////////////////////  
  /// Learning Layout Grid & FlexBox and typeScript/////
  /////////////////////////////

  type PreviewLayoutProps = PropsWithChildren<{
    label: string;
    values: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => (void)
  }>;

  function PreviewLayout ({ label,
    children,
    values, 
    selectedValue, 
    setSelectedValue,} : PreviewLayoutProps){
      return (
        <View style={{padding: 10, flex: 1}}> 
        {/*  Parent container(flex) */}
        <Text style={styles.label}>{label}</Text>

        <View style={styles.row}>
          {values.map(value => (
            <TouchableOpacity 
            key={value} 
            onPress={() =>  setSelectedValue(value)}
            style={[styles.button, selectedValue === value && 
              styles.selected]}> 
              
            
            <Text style={[
              styles.buttonlabel,
              selectedValue === value && styles.selectedLabel
              
            ]}>
              {value}


          </Text>
              </TouchableOpacity>
          ))}
            
        </View>
          {/* fin du 2eme flex */}
        <View style={[styles.container, {[label]: selectedValue}]}> {children}</View>
        </View>
      )
   

  }
  
  return (

    <SafeAreaProvider style={{ flex: 1,
      // alignItems: "center",
    }}>

    <ScrollView style={{ flex: 1,
      backgroundColor: "#B899E1",
      padding: 20,  
    }}>

      {/* image Avant Garde */}
    <View style={{
      flex: 1,
      backgroundColor: "powderblue",
      justifyContent: "center"}}>
      
  <Text style={[styles.AvantgardeFont , { flex: 1}]}>{name}</Text>
   
   <View style={{
     alignItems: "center"
   }}> 

   <Image source={{
     
     uri:"https://i.pinimg.com/736x/03/7b/31/037b3189716898809199b789208ee922.jpg"}}
     style={{
       
       width: 300, height: 300,
       borderColor: "red", 
       borderWidth: 1,
       resizeMode: "contain",

      }} />

      </View>
   
    <Text style={{ 
      flex: 1,
      backgroundColor: "red",
      justifyContent: "center"
    }}>   
    <H1> Artistic Mouvement </H1>
    </Text>
      <Test />
   
    <Text style={{
      alignItems: "center",
      justifyContent: "center" 
    }}> Try to learn</Text>

  

    </View> 
    {/* end Of the first View Container */}

  


    <Cat name="Mama"/>
    
    {/* <Link href={{ 
      pathname: "./[Profile]/third",
      params:  { Profile : 'profile'}
      }}>  */}
    <Cat name="pOPI"/>

    
{/* <Button title="Profile"/> </Link> */}
    


    {/* Search Bar */}
  

    <View style={{backgroundColor: "white"}}> 

    <TextInput 
    placeholder="Search Bar"
    onChangeText={newtext => setText(newtext)}
    defaultValue={text}
    style={{
      height: 2,
      padding: 10,
      marginHorizontal: 8,
      borderWidth: 1,
    }}
    />
    <Text style={{
      padding: 10,
      fontSize: 42,
    }}>

      {text.split('').map(word => word && '🍕').join('g')}
    </Text>
    
      </View>
    
      <View style={{ 
        
        backgroundColor: "skyblue",
        alignItems: "center"}}> 
        
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
          <Image source={logo} style={{ resizeMode: "contain"}} />
       
      </View>
      
      
      <FlatList data={data} renderItem={({item}) => 
        <View style={{ alignItems: "center"}}>
        <Text style={{ 
          color: "white",
          padding: 5,
          flex: 1,
        }}>
          {item.title}
        </Text>
        <Image source={{uri: item.imageUrl}} style={{
          width: 100,
          height:100,
        
        }} />
      </View>}
      style={{ flex: 1,
        backgroundColor: "black", 
      }}
      />
      
      
      <Text style={[styles.Bigblue ]} > ARTVANGARDE</Text>
      
      






      
    </ScrollView>


      </SafeAreaProvider>
  );
}
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////



// StyleSheet 
 const styles = StyleSheet.create({
  container: {
    flex: 1 , 
    backgroundColor:  '#382B1B',
    alignItems: "center",
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
    width: '30%',
    height: '30%'
  },

  Bigblue: {
    color: 'blue',
    fontWeight: "bold",
    fontSize: 30, 
  }, 
  AvantgardeFont: {
    color: "black",
    fontWeight: "bold", 
    fontSize: 50,
    textAlign: "center"

  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    paddingHorizontal: 8,
      paddingVertical: 6
  },

  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonlabel: {
    fontSize: 12,
    fontWeight: '500',
    color: "corail",
  },
  selectedLabel: {
    color: "white"
  }
 })

