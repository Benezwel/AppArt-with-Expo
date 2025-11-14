import { Slot } from "expo-router";

export default function Layout() {
  return (
    <> <header />
    <Slot />
    <footer   /> 
    </>
    
  );
}
