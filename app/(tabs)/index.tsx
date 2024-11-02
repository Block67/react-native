import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [selectedCards, setSelectedCards] = useState({
    MTN: false,
    MOOV: false,
    CELTIIS: false,
  });

  const handleCardPress = (cardName) => {
    setSelectedCards((prevState) => ({
      ...prevState,
      [cardName]: !prevState[cardName],
    }));
    console.log(`${cardName} card selected!`);
  };

  const handleStartPress = () => {
    console.log("Bouton Commencer pressé!");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0000' }}
      headerImage={
        <Image
          source={require('@/assets/images/7306255.jpg')}
          style={styles.reactLogo}
        />
      }>

      <View style={styles.cardContainer}>
        <TouchableOpacity 
          style={[styles.card, selectedCards.MTN && styles.selectedMtnCard]} 
          onPress={() => handleCardPress('MTN')}
        >
          <ThemedText style={[styles.cardTitle, selectedCards.MTN ? styles.cardTitleBlack : null]}>MTN</ThemedText>
          <Image 
            source={require('@/assets/images/mtn.jpg')} 
            style={styles.cardImage}
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.card, selectedCards.MOOV && styles.selectedMoovCard]} 
          onPress={() => handleCardPress('MOOV')}
        >
          <ThemedText style={[styles.cardTitle, selectedCards.MOOV && styles.selectedText]}>MOOV</ThemedText>
          <Image 
            source={require('@/assets/images/moov.jpeg')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.celtiisContainer}>
        <TouchableOpacity 
          style={[styles.card, selectedCards.CELTIIS && styles.selectedCeltiisCard]} 
          onPress={() => handleCardPress('CELTIIS')}
        >
          <ThemedText style={[styles.cardTitle, selectedCards.CELTIIS && styles.selectedText]}>CELTIIS</ThemedText>
          <Image 
            source={require('@/assets/images/celtiis.png')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      </View>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
          <ThemedText style={styles.buttonText}>Commencer</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  updateText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: '#555',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  celtiisContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff', 
    borderRadius: 10, 
    elevation: 2, 
    padding: 16,
    alignItems: 'center',
    width: 150,
  },
  selectedMtnCard: {
    backgroundColor: '#FFD700', // Jaune pour MTN
  },
  selectedMoovCard: {
    backgroundColor: '#0000FF', // Bleu pour MOOV
  },
  selectedCeltiisCard: {
    backgroundColor: '#00008B', // Bleu foncé pour CELTIIS
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardTitleBlack: {
    color: '#000000', // Noir pour MTN
  },
  selectedText: {
    color: '#FFFFFF', // Texte blanc pour MOOV et CELTIIS quand sélectionnés
  },
  cardImage: {
    height: 50,
    width: 50, 
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  reactLogo: {
    height: 250,
    width: 365,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
