import { useLocalSearchParams } from "expo-router";
import { Text, View, } from "react-native";

export default function QueryTest(){
    const { id, limite} = useLocalSearchParams();
    return (
        <View 
        style={{
            backgroundColor: "red",
            flex: 1,
            alignContent: "center",
            justifyContent: "center", 
            alignItems: "center",
        }}>
            <Text>
               <h1>Marcel Duchamp</h1> 
            </Text>
            <Text>User id: {id}</Text>
            <Text>Limit: {limite}</Text>

            
            
        </View>
    )
}