import { Text, View } from "react-native";

export default function QueryTest(){
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
               <h1>Test Query </h1> 
            </Text>
        </View>
    )
}