import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";



export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   
      <Text>
        <h1> Daily</h1>
        </Text>
        <Button 
        title="Profile"
        onPress={() => router.navigate('/[Profile]/third')} />

      <Link href="/[Daily]/marcelDuchamp?limite=20" withAnchor> QueryTest</Link>

      

    </View>
  );
}
