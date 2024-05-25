import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GradeForm } from './app/screens/GradeForm';
import { ListGrades } from './app/screens/ListGrades';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer'

const StackGrades = createNativeStackNavigator();


export default function App() {
  

  return (
    <NavigationContainer>
      <StackGrades.Navigator>
        <StackGrades.Screen name='ListGradesNav' component={ListGrades} />
        <StackGrades.Screen name='GradeFormNav' component={GradeForm} />
      </StackGrades.Navigator>
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
