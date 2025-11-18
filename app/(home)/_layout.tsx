import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>  
      <Tabs.Screen name="index" 
      options={{
        title: "HOME",
        tabBarIcon: ({color}) => <MaterialIcons size={28} />
        }} />
        <Tabs.Screen name="[Daily]" options={{ title: "Daily"}} />
        <Tabs.Screen name="[Profile]" options={{ title: "Profile"}} />
        <Tabs.Screen name="[Apprentissage]" options={{ title: "Apprentissage"}} />
       </Tabs>  
  )
}
