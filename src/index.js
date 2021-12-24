import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects')
        .then(response => {
            console.log(response.data);
            //setProjects(response.data);
        })
        .catch(error => console.log(error))
    }, []);

    async function handleAddProject(){
        const response = await api.post('project', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Daniel Fernandes'
        });
        const project = response.data;
        setProjects([...projects, project])
    }

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#999999'/>
            <SafeAreaView style={styles.container}>
                <FlatList // flatlist só renderiza os itens da lista que estão visíveis na tela
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => ( // desestruturando para pegar o item e chamando ele de project
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            <TouchableOpacity style={styles.button} onPress={handleAddProject}>
                <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>

            </SafeAreaView>
            {/* <View style={styles.container}>
                <Text style={styles.title}>Hello Daniel</Text>
                {projects.map(project => 
                    <Text style={styles.project} key={project.id}>{project.title}</Text>
                )}
            </View> */}
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
    },
    project: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: 'white',
        margin: 20,
        height: 50,
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})