import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';

import { presets } from '@/utils/presets'; // Adjust import path according to your project structure

const HomePage = () => {
  const [savedCards, setSavedCards] = useState([]);
  const [newCard, setNewCard] = useState({
    title: '',
    message: '',
    celebrant: '',
    cover: '',
  });

  // Handle creating a new user card
  const createCard = () => {
    setSavedCards([...savedCards, newCard]);
    setNewCard({ title: '', message: '', celebrant: '', cover: '' }); // Reset form
  };

  const renderSavedCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.cover }} style={styles.image} />
      <Text style={styles.cardName}>{item.title}</Text>
      <Text>{item.message}</Text>
      <Text>{item.celebrant}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Birthcards</Text>

        <Text style={styles.sectionTitle}>Templates</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {presets.map((card) => (
            <View key={card.key} style={styles.card}>
              <Image source={{ uri: card.cover }} style={styles.image} />
              <Text style={styles.cardName}>{card.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.sectionTitle}>My Cards</Text>
      <FlatList
        data={savedCards}
        renderItem={renderSavedCard}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.mycards}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9f9',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily:"times new roman"
  },
  scrollContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 169,
    width: '97%',
    padding: 4,
    borderRadius: 10,
  },
  card: {
    width: 120,
    height: 160,
    marginRight: 8,
    paddingTop: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  createCardSection: {
    marginTop: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mycards: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 8,
    marginTop: 8,
    borderRadius: 10,
  },
});

export default HomePage;
