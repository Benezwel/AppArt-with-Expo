import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

//   // Selection de la font dont on a besoin 
// const [loaded] = useFonts({
//   SpaceMono: require('assets/fonts/SpaceMono-Regular.ttf')
// });

// // condition pour utiliser l'effet SplashScree que l'on a importer de expo font
// useEffect(() => {
//   if (loaded){
//     SplashScreen.hide();
//   }
// }, [loaded]);
// if (!loaded){
//   return null;
// }
  return <Stack />;
}
