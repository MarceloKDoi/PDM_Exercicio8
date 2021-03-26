import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item, FlatList } from 'react-navigation-header-buttons';
import CadastroTela from '../telas/CadastroTela';
import BotaoCabecalho from '../componentes/BotaoCabecalho'



const ContatosTela = (props) => {

    const [contacts] = useState([]);

    return (
        <View style={styles.container}>

            <FlatList
                data={contacts}
                renderItem={
                    (contact) => (
                        <View style={styles.contactsList}>
                            <Text>{contact.item.value.name}</Text>
                            <Text>{contact.item.value.number}</Text>
                        </View>
                    )
                }
            />
        </View>
    )
}
ContatosTela.navigationOptions = dadosNav => {
    return {
        headerTitle: "Lista de contatos",
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={() => dadosNav.navigation.navigate("CadastroTela")}
                    />
                </HeaderButtons>
            )
        }
    }
}


export default ContatosTela

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    contactsList: {
        padding: 12,
        backgroundColor: '#DDD',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    },
});

