import { Modal, TouchableHighlight, ScrollView, Alert, Button, TextInput, StyleSheet, Text, View, FlatList } from 'react-native';

export const Products=({navigation})=>{
    return <View style={styles.container}>
        <Text>PRODUCTOS</Text>
        <Button 
          title='Ir a Home'
          onPress={()=>{
            navigation.navigate('HomeNav');
          }}
        />
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