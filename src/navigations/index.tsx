import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tab.navigation";
import DrawerNavigation from "./drawer.navigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );
}
//é aq que ele sabe em qual tela você está