import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './app/screens/homeSreen';
import { Contacts } from './app/screens/contactsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Products } from './app/screens/productosScreen';
import 'react-native-gesture-handler'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ContenidoA} from './app/screens/ContenidoA'
import {ContenidoB} from './app/screens/ContenidoB'
import { Button, Icon, Input } from '@rneui/base';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNav=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name='TabContenidoA'
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel: "Configuracion",
          tabBarIcon:({size, tintColor})=>{
            return <Icon name="tool" type="antdesign" size={size} color={tintColor}/>
          }
        }}
      />
      <Tab.Screen 
        name='TabContenidoB'
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel: "Acerca De",
          tabBarIcon:({size, tintColor})=>{
            return <Icon name="mail" type="antdesign" size={size} color={tintColor}/>
          }
        }}
      />
    </Tab.Navigator>
  )
}

const DrawerNav=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name='HomeNav'
        component={Home}
        options={{
          title:'Home'
        }}
      />
      <Drawer.Screen
        name='DrawerEjemploNav'
        component={TabNav}
        options={{
          title:'Ejemplo Tabs'
        }}
      />
      <Drawer.Screen
        name='ContactNav'
        component={Contacts}
        options={{
          title:'Contacts'
        }}
      />
      <Drawer.Screen
        name='ProductsNav'
        component={Products}
        options={{
          title:'Products'
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
