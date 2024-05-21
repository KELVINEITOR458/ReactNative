import { StatusBar } from 'expo-status-bar';
import { Alert, Button, TextInput, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';

let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '1987653452' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '3746372819' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '9364738291' }
];

//indica si se esta creando una nueva persona o se esta modificando
let esNuevo = true;
//almacena el indice de l arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1;
export default function App() {
  const [txtCedula, setTxtCedula] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtApellido, setTxtApellido] = useState();
  const [numElementos, setNumElementos] = useState(personas.length);

  let ItemPersona = (props) => {
    return <View style={styles.itemPersona}>
      <View style={styles.itemIndice}>
        <Text>
          {props.indice}
        </Text>
      </View>
      <View style={styles.itemContenido}>
        <Text style={styles.textoPrincipal}>
          {props.persona.nombre} {props.persona.apellido}
        </Text>
        <Text style={styles.textoSecundario}>
          {props.persona.cedula}
        </Text>
      </View>
      <View style={styles.itemBotones}>
        <Button 
          title=' E '
          color='green'
          onPress={()=>{
            setTxtCedula(props.persona.cedula);
            setTxtNombre(props.persona.nombre);
            setTxtApellido(props.persona.apellido);
            esNuevo= false;
            indiceSeleccionado = props.indice
          }}  
        />
        <Button 
          title=' X '
          color='red'
          onPress={()=>{
            indiceSeleccionado=props.indice;
            personas.splice(indiceSeleccionado, 1);
            setNumElementos(personas.length)
          }}
        />
      </View>
    </View>
  }

  let limpiar=()=>{
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo = true;
  }

  let existePersona=()=>{
    for(i=0; i<personas.length; i++){
      if(personas[i].cedula== txtCedula){
        return true;
      }
    }
    return false;
  }
  let guardarPersona=()=>{
    if(esNuevo){
      if(existePersona()){
        Alert.alert("INFO", "La ya existe una persona con la cedula: " + txtCedula)
      }else{
        let persona ={
          nombre: txtNombre,
          apellido: txtApellido,
          cedula: txtCedula
        };
        personas.push(persona);
      }
    }else{
      personas[indiceSeleccionado].nombre=txtNombre;
      personas[indiceSeleccionado].apellido=txtApellido;
    }
    limpiar();
    setNumElementos(personas.length);
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}><Text>PERSONAS</Text>
        <TextInput style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cédula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={setTxtApellido}
        />
       <View style={styles.areaBotones}>
        <Button  
          title='Guardar' 
          onPress={guardarPersona}
        />
        <Button  
          title='Limpiar' 
          onPress={limpiar}
        />
        </View> 
      </View>
      <View style={styles.areaContenido}>
        <FlatList style={styles.lista}
          data={personas}
          renderItem={(elemento) => {
            return <ItemPersona
              indice={elemento.index}
              persona={elemento.item}
            />
          }}
          //retorna un item que no se repita
          keyExtractor={(item) => {
            return item.cedula
          }}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Elementos: {numElementos}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3FFD1',
    flexDirection: 'column',
    alignItems: 'strech',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 10
  },
  lista: {
    //backgroundColor: '#A9F59F'
  },
  itemPersona: {
    backgroundColor: '#9EFF9A',
    marginBottom: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  textoPrincipal: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textoSecundario: {
    fontStyle: 'italic'
  },
  areaCabecera: {
    
  },
  areaContenido: {
    flex: 6,
  },
  areaPie: {
    flex: 1,
    //backgroundColor: '#4DFF00',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemIndice: {
    //backgroundColor: 'aqua',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {
    paddingLeft: 7,
    //backgroundColor: 'aquamarine',
    flex: 8
  },
  itemBotones: {
    padding: 4,
    backgroundColor: 'aquamarine',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txt: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5
  },
  areaBotones:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
