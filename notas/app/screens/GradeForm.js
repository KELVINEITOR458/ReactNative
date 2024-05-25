import { Text, View, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/base'
import { useState } from 'react'
import { saveGrade, updateGrade } from '../services/GradeServices';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer'

export const GradeForm = ({ navigation, route }) => {
    let isNew = true;
    let subjectR;
    let gradeR;
    if (route.params.notita != null) {
        isNew = false;
    }
    if (!isNew) {
        subjectR = route.params.notita.subject;
        gradeR = route.params.notita.grade
    }

    const [grade, setGrade] = useState(gradeR == null ? null : gradeR + "");
    const [subject, setSubjet] = useState(subjectR);
    const [errorSubject, setErrorSubject] = useState();
    const [errorGrade, setErrorGrade] = useState();
    let hasErrors = false;



    const save = () => {
        setErrorSubject(null);
        setErrorGrade(null);
        validate();
        if (!hasErrors) {
            if (isNew) {
                saveGrade({ subject: subject, grade: grade });
            }else{
                updateGrade({ subject: subject, grade: grade });
            }
            navigation.goBack();
            route.params.fnRefresh();
        }

    }

    const validate = () => {
        if (subject == null || subject == "") {
            setErrorSubject("Debe ingresar una materia");
            hasErrors = true;
        }
        let gradeFloat = parseFloat(grade);
        if (gradeFloat == null || isNaN(gradeFloat) || (gradeFloat < 0) || (gradeFloat > 10)) {
            setErrorGrade("Debe ingresar un numero entre 0 y 10");
            hasErrors = true;
        }
    }

    return <View style={styles.container}>
        <Text>Formualrio de Notas</Text>
        <Input
            value={subject}
            onChangeText={setSubjet}
            placeholder='Ejemplo: Matematicas'
            label='Materia'
            errorMessage={errorSubject}
            disabled={!isNew}
        />
        <Input
            value={grade}
            onChangeText={setGrade}
            placeholder='Notas de 0 a 10'
            label='Nota'
            errorMessage={errorGrade}
        />
        <Button
            buttonStyle={styles.saveButton}
            title='Guardar'
            icon={{
                name: 'save',
                type: 'entypo'
            }}
            onPress={save}
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
    saveButton: {
        backgroundColor: 'green'
    }
});
