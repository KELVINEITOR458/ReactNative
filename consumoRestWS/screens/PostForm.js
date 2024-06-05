import { View, StyleSheet, Alert} from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import {useState} from 'react'
import {createDocumentType, createPostService} from '../services/TestServices'

export const PostForm = () => {
    const [subject,setSubject]=useState();
    const [message,setMessage]=useState();

    const createPost=()=>{
        console.log("creando post "+subject+" "+message);
        createDocumentType({
            title:subject,
            body:message
        },
        ()=>{
            Alert.alert("CONFIRMACION", "Se ha ingresado un nuevo TIPO DE DOCUMENTO")
        });
    }
    return <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text h4="true">NUEVO TIPO_DOCUMENTO</Text>
        </View>
        <View style={styles.formContainer}>            
            <Input
                placeholder='CODIGO'
                value={subject}
                onChangeText={(value)=>{
                    setSubject(value);
                }}
            />
            <Input
                placeholder='DESCRIPCION'
                value={message}
                onChangeText={(value)=>{
                    setMessage(value);
                }}
            />
            <Button 
                title="Guardar"
                onPress={createPost}
            />
        </View>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical: 10
    },
    formContainer: {
        flex: 7,
        flexDirection:'column',
        justifyContent:'center'

    }
});