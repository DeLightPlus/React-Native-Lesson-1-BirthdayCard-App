import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, Alert, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import FontSettings from "./FontSettings";
import { CardData, FontData } from "./Types";

// Assuming you're using the CardData structure for editing
interface SettingsMenuProps {
  cardData: CardData; // The current card data
  setCardData:  React.Dispatch<React.SetStateAction<CardData>>;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ cardData, setCardData }) => {
  
  const handleFontChange = (component: "title" | "message" | "celebrant" | "birthday", key: keyof FontData, value: any) => {

    console.log(`Changing ${key} for ${component} to ${value}`);
    
    setCardData((prevData: CardData) => {
      console.log("Previous cardData:", prevData);
      return {
      ...prevData,
      [component]: { ...prevData[component], [key]: value },
    }
    });
  };
  
  // Handle image upload via Expo ImagePicker
  const uploadImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) 
      {
        setCardData((prevData) => ({
          ...prevData,
          backgroundImage: result.assets[0].uri,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <View style={styles.v_inputGroup}>
        <Pressable onPress={() => alert("Attempt change to portrait")}>
          <Text> 💾 Save</Text>
        </Pressable>

        {/* Upload image button */}
        <Pressable onPress={uploadImage}>
          <Text>📷 Cover Pic</Text>
        </Pressable>        
    </View>

    <ScrollView 
      horizontal
      style={styles.settingsContainer}
    >

      <FontSettings
        title="Title Settings"
        fontData={cardData.title}
        component="title"
        handleFontChange={handleFontChange}
        // handleTextChange={handleTextChange}
      />
      <FontSettings
        title="Celebrant Name Settings"
        fontData={cardData.celebrant}
        component="celebrant"
        handleFontChange={handleFontChange}     
        // handleTextChange={handleTextChange}
      />
      <FontSettings
        title="Message Settings"
        fontData={cardData.message}
        component="message"
        handleFontChange={handleFontChange}        
        // handleTextChange={handleTextChange}
      />
      <FontSettings
        title="Birthday Date Settings"
        fontData={cardData.birthday}
        component="birthday"
        handleFontChange={handleFontChange}    
        // handleTextChange={handleTextChange}
      />
    </ScrollView> 
    </>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,    
    padding: 16,
  },
  v_inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.85,
    padding: 8,
    zIndex: 1,
  },
});

export default SettingsMenu;