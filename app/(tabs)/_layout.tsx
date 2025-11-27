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
        backgroundColor: '#fff'
      }
    }
   }
    >  


      <Tabs.Screen name="(Learning)" 
      options={{
        tabBarIcon: ({color}) => <Entypo size={28} name='book'  color={color} />
        }} 
        />

        <Tabs.Screen name="Discovery" 
        options={{ 
          tabBarIcon: ({ color, focused}) => (
            <MaterialCommunityIcons name='artboard' color={color} size={24} />
          )
        }} />

        <Tabs.Screen name="Daily" 
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="bulb" color={color} size={24} />
          )
        }} />
      
        
        <Tabs.Screen name="Profile" options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name='user' color={color} size={24} />
          )
        }} />
        
        
       </Tabs>  
       
  )
}
