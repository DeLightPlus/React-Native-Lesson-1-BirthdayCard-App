import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const birthcards = [
  { id: 1, name: 'Card 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Card 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Card 3', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Card 4', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Card 5', image: 'https://via.placeholder.com/150' },
];

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Birthcards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {birthcards.map((card) => (
          <View key={card.id} style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.image} />
            <Text style={styles.cardName}>{card.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  card: {
    width: 120,
    height: 160,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});

export default HomePage;
