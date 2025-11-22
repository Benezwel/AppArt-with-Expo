
import { H1 } from "@expo/html-elements";
import { StyleSheet, Text, View } from "react-native";

export default function apprentissageStack (){ 
return ( 
<View
style= {style.container}>
<Text
style= {style.text}>
<H1>Apprentissage </H1>
</Text>

</View>
)
}
const style = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:  '#382B1B',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      text: {
        color: '#FFFFFF'
      }
})

    
