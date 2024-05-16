import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  /*const arreglo =useState(0);
  const contadorEstado = arreglo[0];
  const setContadorEstado = arreglo[1];*/
  [contadorEstado, setContadorEstado] = useState(0);

  const incrementar = () => {
    setContadorEstado(contadorEstado + 1);
    console.log("CONTADOR>>>>>>>>>" + contadorEstado)
  }

  const decrementar = () => {
    setContadorEstado(contadorEstado - 1);
  }

  [contadorVidas, setContadorVidas] = useState(5);
  const perderVidas = () => {
    if (contadorVidas > 0) {
      setContadorVidas(contadorVidas - 1);
      if (contadorVidas == 1) {
        Alert.alert("ADVERTENCIA", "Game Over");
      }
    }

  }
  const premiar = () => {
    setContadorVidas(contadorVidas + 3);
  }

  return (
    <View style={styles.container}>
      <Text>Ejemplo Variables de Estado</Text>
      <Text>CONTADOR ESTADO: {contadorEstado}</Text>
      <Button
        title='Incrementar'
        onPress={incrementar}
      />
      <Button
        title='Decrementar'
        onPress={decrementar}
      />
      <Text></Text>
      <Text></Text>
      <Text>CONTADOR VIDAS: {contadorVidas}</Text>
      <Button
        title='Perder Vidas'
        onPress={perderVidas}
      />
      <Button
        title='PREMIAR'
        onPress={premiar}
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
});
