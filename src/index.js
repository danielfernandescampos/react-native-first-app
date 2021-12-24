import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#999999'/>
            <View style={styles.container}>
                <Text style={styles.title}>Hello Daniel</Text>
            </View>
        </>
    )
}

// View: div, header, footer, main, aside, section (containers...)
// Text: p, span, strong, h1, h2...

// componentes no react-native não possuem valor semântico
// componentes não possuem estilização própria (tipo h1 ser maior no html)
// o css é colocado dentro do javascript
// todos os componentes por padrão tem display: flex
// não tem herança de estilo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaaaaa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    }
})