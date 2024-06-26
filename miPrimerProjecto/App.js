import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const despedirse=()=>{
    Alert.alert("Despedida", "adios me despido");
  }
  return (
    <View style={styles.container}>
      <Text>Hola soy Kelvin Bermeo</Text>
      <StatusBar style="auto" />
      <Button title='Buenas'
        onPress={()=>{
          Alert.alert("Esto es:","GUAMALOLE CON CHICLE");
        }}
      />
      <Button title='ADIOS' 
        onPress={despedirse}
      />
    </View>
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
