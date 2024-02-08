import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Card from '../../Components/Cards/Cards';
import freio from '../../Images/freiodemao.jpg';
import frontlip from '../../Images/frontlip.jpg';
import retrovisorhilux from '../../Images/retrovisorhilux.jpg';
import bancoconcha from '../../Images/bancoconcha.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';

const AcessoriosCarro = ({ navigation }) => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Acessórios para Carros</Text>
        <View style={styles.linha}>
          <Card
            title="Freio de Mão Hidráulico"
            content="A partir de R$ 455,00"
            imageSource={freio}
          />
          <Card
            title="Front Lip"
            content="A partir de R$ 750,00"
            imageSource={frontlip}
          />
        </View>
        <View style={styles.linha}>
          <Card
            title="Retrovisor Hilux"
            content="A partir de R$ 1.000,00"
            imageSource={retrovisorhilux}
          />
          <Card
            title="Banco Concha"
            content="A partir de R$ 900,00"
            imageSource={bancoconcha}
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


export default AcessoriosCarro;
