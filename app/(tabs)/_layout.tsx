import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    
    <Tabs
   screenOptions={
    {tabBarActiveTintColor: '#1F1B17',
      headerStyle: {
        backgroundColor: '#1F1B17',
      },
      headerShadowVisible: false,
      headerTintColor: "#fff",
      tabBarStyle: {
        backgroundColor: '#1F1B17',
        
      }
    }
   }
    >  


      <Tabs.Screen name="(Learning)" 
      options={{
        tabBarIcon: ({color}) => <Entypo size={28} name='book'  color={"white"} />
        }} 
        />

        <Tabs.Screen name="Discovery" 
        options={{ 
          tabBarIcon: ({ color, focused}) => (
            <MaterialCommunityIcons name='artboard' color={"white"} size={24} />
          )
        }} />

        <Tabs.Screen name="Daily" 
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="bulb" color={"white"} size={24} />
          )
        }} />
      
        
        <Tabs.Screen name="Profile" options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name='user' color={"white"} size={24} />
          )
        }} />
        
        
       </Tabs>  
       
  )
}
