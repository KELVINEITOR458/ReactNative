import { Modal, TouchableHighlight, ScrollView, Alert, Button, TextInput, StyleSheet, Text, View, FlatList } from 'react-native';

export const Home = ({ navigation }) => {
  return <View style={styles.container}>
    <View>
      <Text>HOME</Text>
    </View>
    <View style={styles.botones}>
      <Button
        title='Ir a Contactos'
        onPress={() => {
          navigation.navigate('ContactNav');
        }}
      />
      <Button
        title='Ir a Productos'
        onPress={() => {
          navigation.navigate('ProductsNav');
        }}
      />
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});