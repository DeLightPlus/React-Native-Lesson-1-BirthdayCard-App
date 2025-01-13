// MainScreen.tsx

import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, Alert } from "react-native";

import CardContainer from "@/components/CardContainer";
import SettingsMenu from "@/components/SettingsMenu";
import { CardData } from "@/components/Types";
// Mock card data for demonstration
const initialCardData : CardData = {
  title: {
    text: "Happy Birthday",
    fontFamily:"",
    fontSize: 24,
    fontColor: "#FF5733",
    fontStyle: "normal",
    fontWeight: "bold",  
    rotation: 0,
    positionX: 20, 
    positionY: 50,
  },
  celebrant: {
    text: "John Doe",
    fontFamily: "Arial",
    fontSize: 18,
    fontColor: "#333",
    fontStyle: "normal",
    fontWeight: "normal",  
    rotation: 0,
    positionX: 20,
    positionY: 100,
  },
  message: {
    text: "Wishing you all the best!",
    fontFamily: "Arial",
    fontSize: 16,
    fontColor: "#555",
    fontStyle: "normal",
    fontWeight: "normal",  
    rotation: 0,
    positionX: 20,
    positionY: 150,
  },
  birthday: {
    text: "January 1, 2025",
    fontFamily: "Arial",
    fontSize: 14,
    fontColor: "#888",
    fontStyle: "normal",
    fontWeight: "normal",  // Added fontWeight
    rotation: 0,
    positionX: 20,
    positionY: 200,
  },
  backgroundImage: "https://example.com/background.jpg", // Example background image URL
};

const MainScreen: React.FC = () => {
  const [cardData, setCardData] = useState(initialCardData);

  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>        
        {/* Card Preview Section */}
        {cardData ? <CardContainer cardData={cardData} /> : null}
        
        {/* Settings Section */}
        <SettingsMenu cardData={cardData} setCardData={setCardData} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default MainScreen;
