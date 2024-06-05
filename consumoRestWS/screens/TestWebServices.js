import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import { getDocumentTypes,updateFakePage, addFakePage, getPokeApi, getAllPostsService, createPostService, updatePostService, getByUserIdSerivice } from '../services/TestServices'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const getAllPosts = () => {
  getAllPostsService();
}

const createPost = () => {
  createPostService();
}

const updatePost = () => {
  updatePostService();
}

const getByUserId = () => {
  getByUserIdSerivice();
}

const getPoke = () => {
  getPokeApi();
}

const addFake = () => {
  addFakePage();
}

const updateFake = () => {
  updateFakePage();
}

const getDocuments=()=>{
  getDocumentTypes();
}

export const TestWebServices = () => {



  return <View style={styles.container}>
    <Text style={styles.textContainer}>ME ATRAPASTE ME TUVISTE ENTRE TUS MANOS</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
      <Button
        title="Actualizar Post"
        onPress={updatePost}
      />
      <Button
        title="Filtrar"
        onPress={getByUserId}
      />
      <Button
        title="XXX"
        onPress={getPoke}
      />

      <Button
        title="YYY"
        onPress={addFake}
      />

      <Button
        title="ZZZ"
        onPress={updateFake}
      />

      <Button
        title="Recuperar Documentos"
        onPress={getDocuments}
      />

    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 10

  }
});