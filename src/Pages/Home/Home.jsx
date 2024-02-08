import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Escolha O tipo de Veiculo</Text>
            <Button
                title="Carros"
                onPress={() => navigation.navigate('Carros')}
            />
            <Button
                title="Motos"
                onPress={() => navigation.navigate('Motos')}
            />
        </View>
    );
};

export default Home;
