import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button 
        title='COM 1'
      />
      <Button 
        title='COM 2'
        color="green"
      />
      <Button 
        title='COM 3'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    //eje principar
    justifyContent: 'space-around',
    //eje secundario
    alignItems: 'center'
  },
});
