import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Pages/Home/Home';
import Carros from './src/Pages/Carros/Carros';
import Motos from './src/Pages/Motos/Motos';
import AcessoriosCarro from './src/Pages/AcessoriosCarro/AcessoriosCarros';
import PecasCarro from './src/Pages/PecasCarro/PecasCarro';
import AcessoriosMoto from './src/Pages/AcessoriosMotos/AcessoriosMoto';
import PecasMoto from './src/Pages/PecasMoto/PecasMoto';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CarrosDetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carros" component={Carros} />
      <Stack.Screen name="AcessoriosCarro" component={AcessoriosCarro} />
      <Stack.Screen name="PecasCarro" component={PecasCarro} />
    </Stack.Navigator>
  );
}

function MotosDetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Motos" component={Motos} />
      <Stack.Screen name="AcessoriosMoto" component={AcessoriosMoto} />
      <Stack.Screen name="PecasMoto" component={PecasMoto} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Carros" component={CarrosDetailStack} />
        <Drawer.Screen name="Motos" component={MotosDetailStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
;