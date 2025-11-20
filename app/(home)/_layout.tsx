import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView> 
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
       </SafeAreaView>
  )
}
