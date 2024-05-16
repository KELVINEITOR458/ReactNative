import { StatusBar } from 'expo-status-bar';
import { Button, TextInput,StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [uno, setUno] = useState("Valor 1");
  const [dos, setDos] = useState("Valor 2");
  const [resultado, setResultado] = useState();

  const sumar=()=>{
    let unoInt = parseInt(uno);
    let dosInt = parseInt(dos);
    setResultado(unoInt + dosInt)
  }

  const restar=()=>{
    let unoInt = parseInt(uno);
    let dosInt = parseInt(dos);
    setResultado(unoInt - dosInt)
  }

  const multiplicar=()=>{
    let unoInt = parseInt(uno);
    let dosInt = parseInt(dos);
    setResultado(unoInt * dosInt)
  }
  return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>
      <TextInput 
        style={styles.txtInput}
        onChangeText={(txt) => {
          setUno(txt);
        }}
        value={uno}
     /> 
     <TextInput 
        style={styles.txtInput}
        onChangeText={(txt) => {
          setDos(txt);
        }}
        value={dos}
     /> 
     <Text>RESULTADO: {resultado}</Text>
     <Button 
      title='Sumar'
      onPress={sumar}
     />
     <Button 
      title='Restar'
      onPress={restar}
     />
     <Button 
      title='Multiplicar'
      onPress={multiplicar}
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
