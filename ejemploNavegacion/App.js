import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './app/screens/homeSreen';
import { Contacts } from './app/screens/contactsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Products } from './app/screens/productosScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='HomeNav' component={Home} />
        <Stack.Screen name='ContactNav' component={Contacts} />
        <Stack.Screen name='ProductsNav' component={Products} />
      </Stack.Navigator>
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
