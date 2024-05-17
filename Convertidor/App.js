import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [dolares, setDolares] = useState(0);
  const [pesosMX, setPesosMX] = useState(0);
  const [pesosCOL, setPesosCOL] = useState(0);
  const [euros, setEuros] = useState(0);

  const convertirEnPesosMx=()=>{
    let dolaresFloat = parseFloat(dolares);
    let dolaresFix = dolaresFloat.toFixed(2);
    setPesosMX(dolaresFix * 16.87);
  }
  const convertirEnPesosCol=()=>{
    let dolaresFloat = parseFloat(dolares);
    let dolaresFix = dolaresFloat.toFixed(2);
    setPesosCOL(dolaresFix * 3923.43);
  }
  const convertirEnEuros=()=>{
    let dolaresFloat = parseFloat(dolares);
    let dolaresFix = dolaresFloat.toFixed(2);
    setEuros(dolaresFix * 0.91);
  }

  return (
    <View style={styles.container}>
      <Text>CONVERTIDOR DE DÓLARES A:</Text>
      <Text>PESOS MX: {pesosMX}</Text>
      <Text>PESOS COL: {pesosCOL}</Text>
      <Text>EUROS: {euros}</Text>
      <TextInput
        style={styles.txtInput}
        value= {dolares}
        onChangeText={(txt) => {
          setDolares(txt);
        }}
      />
      <Button 
        title='PESOS MX'
        onPress={convertirEnPesosMx}
      />
      <Button 
        title='PESOS COL'
        onPress={convertirEnPesosCol}
      />
      <Button 
        title='EUROS'
        onPress={convertirEnEuros}
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
