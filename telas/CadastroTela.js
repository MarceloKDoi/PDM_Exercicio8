import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import Cores from '../constantes/Cores'


const CadastroTela = () => {

    const [setContacts] = useState([]);
    const [counter, setCounter] = useState(10);

    const [number, setNumber] = useState('');
    const getNumber = number => { setNumber(number) }

    const [name, setName] = useState('');
    const getName = name => { setName(name) };



    const addContact = () => {
        setContacts(contacts => {
            setCounter(counter + 2);
            return [...contacts, { key: counter.toString(), value: { name, number } }]
        })
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>

                <TextInput style={styles.input}
                    placeholder="Digite o nome"
                    value={name}
                    onChangeText={getName}
                />

                <View>
                    <TextInput style={styles.input}
                        value={number}
                        placeholder="Digite o número"
                        onChangeText={getNumber}
                    />
                </View>

                <Button
                    title="Enviar"
                    color={Cores.primary}
                    onPress={addContact}
                />
            </View>

        </View>
    )
}

export default CadastroTela


const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    inputView: {
        marginBottom: 8
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 4,
        padding: 12,
        textAlign: 'center',
    }
});