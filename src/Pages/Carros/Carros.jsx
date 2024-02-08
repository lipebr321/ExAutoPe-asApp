import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Carros = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Escolha o tipo de serviço desejado</Text>
            <Button
                title="Acessórios"
                onPress={() => navigation.navigate('AcessoriosCarro')}
            />
            <Button
                title="Peças"
                onPress={() => navigation.navigate('PecasCarro')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default Carros;
