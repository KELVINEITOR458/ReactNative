import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}></View>
      <View style={styles.container3}>
        <View style={styles.container31}></View>
        <View style={styles.container32}>
          <View style={styles.container321}></View>
          <View style={styles.container322}>
            <Button 
              title='BOTON 1'
            />
            <Button 
              title='BOTON 2'
            />
            <Button 
              title='BOTON 3'
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'column'
  },
  container2: {
    flex: 0.5,
    backgroundColor: 'blue'
  },
  container3: {
    flex: 1,
    backgroundColor: 'green'
  },
  container31: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  container32: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'row'
  },
  container321: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container322: {
    flex: 2,
    backgroundColor: 'purple',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'stretch'
  }
});
