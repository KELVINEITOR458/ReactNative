import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nombre, setNombre] = useState("Ingrese su nombre");
  const [apellido, setApellido] = useState("Ingrese su apellido");
  const [nombreCompleto, setNombreCompleto] = useState();
  return (
    <View style={styles.container}>
      <Text>Ejemplo TextInput</Text>
      <Text> Hola, {nombreCompleto}</Text>
      <TextInput
        style={styles.txtInput}
        value= {nombre}
        onChangeText={(txt) => {
          setNombre(txt);
        }}
      />
     <TextInput 
        style={styles.txtInput}
        value={apellido}
        onChangeText={(txt)=>{
          setApellido(txt);
        }}
     /> 
     <Button  
      title='Saludar'
      onPress={()=>{
        let completo = nombre + " " + apellido;
        setNombreCompleto(completo);
        
      }}
     />
      <StatusBar style="auto" />

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
  txtInput: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
});
