import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  const finalizar=()=>{
    Alert.alert("Waos", "SU SECION A FINALIZADO");
  }
  return (
    <View style={styles.container}>
      <Text>RETO 20</Text>
      <StatusBar style="auto" />
      <Button title='INICIAR'
        onPress={()=>{
          Alert.alert("Waos:","SU SECION HA INICIADO");
        }}
      />
      <Button title='FINALIZAR' 
        onPress={finalizar}
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
