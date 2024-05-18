import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nombre, setNombre] = useState();
  const [apelllido, setApellido] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJEMPLO MARGIN  </Text>
      <TextInput  
        style={styles.txt}
        value={nombre}
        onChangeText={setNombre}
        placeholder='Ingrese su nombre'
      />
      <TextInput  
        style={styles.txt}
        value={apelllido}
        onChangeText={setApellido}
        placeholder='Ingrese su apellido'
      />
      <Button 
        title='OK'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'strech',
    paddingHorizontal: 8
  },
  txt:{
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 4,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  titulo:{
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});
