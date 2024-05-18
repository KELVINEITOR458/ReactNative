import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [estatura, setEstatura] = useState();
  const [peso, setPeso] = useState();
  const [IMC, setIMC] = useState(0);

  const convertir=()=>{
    if(isNaN(estatura) || isNaN(peso)){
      Alert.alert("ERROR", "Ingrese numeros pendejo");
      setIMC(0);
      return;
    }
    if(estatura < 0 || estatura > 250){
      Alert.alert("ERROR", "Ingrese una estatura valida");
      return;
    }
    let estaturaFloat = parseFloat(estatura);
    let estaturaMetros = estaturaFloat/100;
    let pesoKG = parseFloat(peso);
    let IMCDecimal =pesoKG/(estaturaMetros*estaturaMetros)
    let IMCFixed = IMCDecimal.toFixed(2)
    setIMC(IMCFixed)
    if(IMC >= 0 && IMC <16){
      Alert.alert("ALERTA", "Usted tiene Delgadez severa")
    }else if(IMC >=16 && IMC <17){
      Alert.alert("ALERTA", "Usted tiene delgadez moderada")
    }else if(IMC >= 17 && IMC < 18.5){
      Alert.alert("ALERTA","Usted tiene delgadez leve")
    }else if(IMC >= 18.5 && IMC < 25){
      Alert.alert("ALERT","Usted tiene peso normal")
    }else if(IMC >= 25 && IMC < 30){
      Alert.alert("ALERTA","Usted tiene sobrepeso")
    }else if(IMC >=30 && IMC <35){
      Alert.alert("ALERTA","Usted tiene obesidad grado 1")
    }else if(IMC >= 35 && IMC < 40){
      Alert.alert("ALERTA","Usted tiene obesidad grado 2")
    }else if(IMC >= 40){
      Alert.alert("ALERTA","Usted tiene obesidad grado 3")
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>
      <Text></Text>
      <Text>Estatura</Text>
      <TextInput  
        style={styles.txt}
        value={estatura}
        onChangeText={setEstatura}
        placeholder='Ingrese su estatura en centímetros'
      />
      <Text>Peso</Text>
      <TextInput  
        style={styles.txt}
        value={peso}
        onChangeText={setPeso}
        placeholder='Ingrese su peso'
      />
      <Text>IMC: {IMC}</Text>
      <Text></Text>
      <Button 
        title='Calcular'
        onPress={convertir}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
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
    marginBottom: 15,
    borderRadius: 3
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});
