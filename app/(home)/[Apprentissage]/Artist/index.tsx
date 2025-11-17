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
      <Link 
      href="/artists.tsx"> Artist 
      </Link>
  
      <Button 
        title=" return back"
        onPress={() => router.push('/')} />

      <Text>
        <h1>Artiste</h1>

        </Text>
    </View>
  );
}
