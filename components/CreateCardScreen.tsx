// CreateCardScreen.tsx
import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import FontSettings from "./FontSettings"; // FontSettings component
import CardContainer from "./SettingsMenu"; // CardContainer component
import { CardData } from "./Types"; // Default card data and types

const initialCardData = {
  title: {
    text: "Happy Birthday",
    fontFamily: "Arial",
    fontSize: 24,
    fontColor: "#FF5733",
    fontStyle: "bold",
    rotate: 0,
    position: { left: 20, top: 50 }
  },
  celebrant: {
    text: "John Doe",
    fontFamily: "Arial",
    fontSize: 18,
    fontColor: "#333",
    fontStyle: "normal",
    rotate: 0,
    position: { left: 20, top: 100 }
  },
  message: {
    text: "Wishing you all the best!",
    fontFamily: "Arial",
    fontSize: 16,
    fontColor: "#555",
    fontStyle: "italic",
    rotate: 0,
    position: { left: 20, top: 150 }
  },
  birthday: {
    text: "January 1, 2025",
    fontFamily: "Arial",
    fontSize: 14,
    fontColor: "#888",
    fontStyle: "normal",
    rotate: 0,
    position: { left: 20, top: 200 }
  },
  backgroundImage: "https://example.com/background.jpg", // Example background image URL
};

const CreateCardScreen: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>(initialCardData);
  const fontFamilies = ["Arial", "Courier", "Times New Roman"];

  // Handle changes to font settings (fontFamily, fontStyle, etc.)
  const handleFontChange = (key: keyof CardData["title"], value: any) => {
    setCardData({
      ...cardData,
      title: {
        ...cardData.title,
        [key]: value,
      },
    });
  };

  // Handle changes to position settings
  const handlePositionChange = (key: keyof CardData["title"], value: any) => {
    setCardData({
      ...cardData,
      title: {
        ...cardData.title,
        position: value,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* CardContainer component renders the card with the updated data */}
      <CardContainer cardData={cardData} />
      {/* FontSettings component allows user to change font properties */}
      <FontSettings
        title="Title"
        fontData={cardData.title}
        fontFamilies={fontFamilies}
        handleFontChange={handleFontChange}
        handlePositionChange={handlePositionChange}
      />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateCardScreen;
