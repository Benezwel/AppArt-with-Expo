import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={ {
    tabBarActiveBackgroundColor: 'blue',}}
    >  


      <Tabs.Screen name="index" 
      options={{
        tabBarIcon: ({color}) => <FontAwesome size={28} name='home' color={color} />
        }} />
        <Tabs.Screen name="[Apprentissage]" options={{ title: "Learning"}} />

        <Tabs.Screen name="[Daily]" options={{ title: "Daily"}} />
        
        <Tabs.Screen name="[Profile]" options={{ title: "Profile"}} />
        
        
       </Tabs>  
  )
}
