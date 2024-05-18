import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Button title='X' />
        <Button title='Y' />
        <Button title='Z' />
      </View>
      <View style={styles.container2}>
        <View style={styles.container21}>
          <View style={styles.container211}>
            <Button title='BOTON 1' />
            <Button title='BOTON 2' />
          </View>
          <View style={styles.container212}>
            <Button title='PROPIEDAD 1' />
            <Button title='PROPIEDAD 2' />
            <Button title='PROPIEDAD 3' />
          </View>
        </View>
        <View style={styles.container22}>
          <Button title='ACCION 1' />
          <Button title='ACCION 2' />
        </View>
      </View>
      <View style={styles.container3}>
        <Button title='BOTON FINAL 1' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'column',
  },
  container1: {
    flex: 1,
    backgroundColor: '#01FCF5',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container2: {
    flex: 6,
    backgroundColor: 'green',
    flexDirection: 'column',
    padding: 3
  },
  container21: {
    flex: 4,
    backgroundColor: 'pink',
    flexDirection: 'row',
    padding: 4
  },
  container211: {
    flex: 4,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'strech'
  },
  container212: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container22: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  container3: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'flex-start'
  },
});
