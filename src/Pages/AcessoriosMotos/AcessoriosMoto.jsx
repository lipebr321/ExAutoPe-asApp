import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Card from '../../Components/Cards/Cards';
import paralama160 from '../../Images/paralama160.jpg';
import paralamaxre from '../../Images/paralamaxre.jpg';
import retrovisorhilux from '../../Images/retrovisorhilux.jpg';
import bancoxj6 from '../../Images/bancoxj6.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';

const AcessoriosMoto = ({ navigation }) => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Acessórios para Motos</Text>
        <View style={styles.linha}>
          <Card
            title="Paralama 160"
            content="A partir de R$ 455,00"
            imageSource={paralama160}
          />
          <Card
            title="Paralama xre 2022"
            content="A partir de R$ 750,00"
            imageSource={paralamaxre}
          />
        </View>
        <View style={styles.linha}>
          <Card
            title="Retrovisor Hilux"
            content="A partir de R$ 1,000.00"
            imageSource={retrovisorhilux}
          />
          <Card
            title="Banco XJ6"
            content="A partir de R$ 900.00"
            imageSource={bancoxj6}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text2}>Entre em contato: loja@loja.com.br</Text>
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()} // Isso irá voltar para a tela anterior
          />
        </View>
      </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  linha: {
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  text2: {
    fontSize: 15,
    marginBottom: 20,
  },
  card: {
    width: 100,
    backgroundColor: 'blue',
  },
});

export default AcessoriosMoto;
