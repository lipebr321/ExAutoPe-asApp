import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Card from '/src/Components/Cards/Cards';
import parachoquecivic from '/src/Images/parachoquecivic.jpg';
import parachoquegol from '/src/Images/parachoquegol.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import retrovisorhilux from '/src/Images/retrovisorhilux.jpg';
import retrovisorecosport from '/src/Images/retrovisorecosport.jpg';

const PecasCarro = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}></Text>
          <View style={styles.linha}>
            <Card
              title="Retrovisor Ecosport"
              content="A partir de R$ 455,00"
              imageSource={retrovisorecosport}
            />
          </View>
          <View style={styles.linha}>
            <Card
              title="Retrovisor Hilux"
              content="A partir de R$ 750,00"
              imageSource={retrovisorhilux}
            />
          </View>
          <View style={styles.linha}>
            <Card
              title="Parachoque civic"
              content="A partir de R$ 1,000.000,00"
              imageSource={parachoquecivic}
            />
          </View>
          <View style={styles.linha}>
            <Card
              title="Parachoque gol"
              content="A partir de R$ 900.000,00"
              imageSource={parachoquegol}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text2}>Entre em contato: loja@loja.com.br</Text>
            <Button
              title="Voltar a HOME"
              onPress={() => navigation.goBack()}
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

export default PecasCarro;
