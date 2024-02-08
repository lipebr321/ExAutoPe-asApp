import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Card from '/src/Components/Cards/Cards';
import paralama160 from '/src/Images/paralama160.jpg';
import paralamaxre from '/src/Images/paralamaxre.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import bancoxj6 from '/src/Images/bancoxj6.jpg';
import roda160 from '/src/Images/roda160.jpg';

const PecasMoto = ({ navigation }) => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}></Text>
          <View style={styles.linha}>
            <Card
              title="Paralama 160"
              content="A partir de R$ 455,00"
              imageSource={paralama160}
            />
          </View>
          <View style={styles.linha}>
            <Card
              title="Paralama xre 2022"
              content="A partir de R$ 750,00"
              imageSource={paralamaxre}
            />
          </View>
          <View style={styles.linha}>
            <Card
              title="Nissan Skyline R34"
              content="A partir de R$ 1,000.000,00"
              imageSource={roda160}
            />
          </View>
          <View style={styles.linha}>
            <Card
              title="Toyota Supra Mk4"
              content="A partir de R$ 900.000,00"
              imageSource={bancoxj6}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text2}>Entre em contato: loja@loja.com.br</Text>
            <Button
              title="Voltar a HOME"
              onPress={() => navigation.goBack()}
            />
          </View >
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
export default PecasMoto;
