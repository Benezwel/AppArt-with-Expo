import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>  
      <Tabs.Screen name="index" 
      options={{
        title: "test",
        tabBarIcon: ({color}) => <MaterialIcons size={28} />
        }} />
       </Tabs>
  )
}
