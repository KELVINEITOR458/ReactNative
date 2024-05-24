import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Icon, Input } from '@rneui/themed';
import {useState} from 'react'

export default function App() {
  const [name, setName] = useState();


  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input 
        value={name}
        onChangeText={setName}
        placeholder='Ingrese su nombre'
        label='nombre'
      />
      <Text>
        {name}
      </Text>
      <Button  
        title='OK'
        icon={{
          name: 'caretup',
          type: 'antdesign',
          size: 25,
          color: 'white',
        }}
        onPress={()=>{
          Alert.alert("Bienvenido", name)
        }}
      />
      <Button  
        title='CANCEL'
        icon={<Icon 
        name='plancast'
        type='zocial'
        color='white'
        />}
      />
      <Icon 
        name='home'
        type='font-awesome'
        color='black'
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
