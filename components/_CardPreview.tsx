import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

const CardContainer = ({ presets = [], cardData = {}, setCardData }) => {
  const [cardRotated, setCardRotated] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState(cardData.preset || "");

  // Handle image upload via Expo ImagePicker
  const uploadImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setCardData((prevData) => ({
          ...prevData,
          cover: result.assets[0].uri,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Toggle the card rotation state
  const handleToggleRotation = () => {
    setCardRotated(!cardRotated);
  };

  // Preset change handler (using a normal function as requested)
  function handlePresetChange(presetValue) {
    const selectedPreset = presets.find((preset) => preset.value === presetValue);
    if (selectedPreset) {
      setCardData({ ...selectedPreset, preset: presetValue });
    }
  }

  // Use memoization for rotation transform styles to avoid unnecessary recalculations
  const rotationStyles = cardRotated
    ? [
        { perspective: 1000 },
        { rotateX: '35deg' },
        { rotateY: '4deg' },
        { rotateZ: '-30deg' },
      ]
    : [];

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardOption}>
        <Pressable onPress={() => alert("Attempt change to single/folded card")}>
          <Text>🖼 Single Card</Text>
        </Pressable>
      </View>

      {/* Card with rotation */}
      <View style={[styles.card, { transform: rotationStyles }]}>
        <Text
          style={[
            styles.title,
            {
              top: cardData.titlePosition.top,
              left: cardData.titlePosition.left,
              fontFamily: cardData.titleFontFamily,
              fontSize: cardData.titleFontSize,
              color: cardData.titleFontColor,
              fontStyle: cardData.titleFontStyle,
            },
          ]}
        >
          {cardData.title}
        </Text>
        <Text
          style={[
            styles.message,
            {
              top: cardData.messagePosition.top,
              left: cardData.messagePosition.left,
              fontFamily: cardData.msgFontFamily,
              fontSize: cardData.msgFontSize,
              color: cardData.msgFontColor,
              fontStyle: cardData.msgFontStyle,
            },
          ]}
        >
          {cardData.message}
        </Text>
        <Text
          style={[
            styles.birthday,
            {
              fontFamily: cardData.birthdayFontFamily,
              fontSize: cardData.birthdayFontSize,
              color: cardData.birthdayFontColor,
              fontStyle: cardData.birthdayFontStyle,
            },
          ]}
        >
          {cardData.birthday}
        </Text>
        <Text
          style={[
            styles.celebrant,
            {
              top: cardData.celebrantPosition.top,
              left: cardData.celebrantPosition.left,
              fontFamily: cardData.celebrantFontFamily,
              fontSize: cardData.celebrantFontSize,
              color: cardData.celebrantFontColor,
              fontStyle: cardData.celebrantFontStyle,
            },
          ]}
        >
          {cardData.celebrant}
        </Text>

        <ImageBackground style={styles.cardImage} resizeMode="cover" source={{ uri: cardData.cover }} />
      </View>

      <View style={styles.v_inputGroup}>
        {/* Upload image button */}
        <Pressable onPress={uploadImage}>
          <Text>📷 Cover Pic</Text>
        </Pressable>

        {/* Picker for selecting preset */}
        <Picker
          selectedValue={selectedPreset}
          onValueChange={(itemValue) => {
            setSelectedPreset(itemValue);
            handlePresetChange(itemValue); // Update preset when selection changes
          }}
          style={styles.picker}
        >
          <Picker.Item label="🎛🎚 Preset" value="" />
          {presets.map((preset) => (
            <Picker.Item key={preset.key} label={preset.value} value={preset.value} />
          ))}
        </Picker>

        <Pressable onPress={() => alert("Attempt change to portrait")}>
          <Text> 🖼 </Text>
        </Pressable>

        <Pressable onPress={handleToggleRotation}>
          <Text>🔃</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    height: "42%",
    backgroundImage: 'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, lightblue 100%)',
  },
  cardOption: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: "black",
    width: "100%",
    height: "76%",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    zIndex: 1,
    overflow: "hidden",
  },
  title: {
    position: "absolute",
    fontSize: 24,
    color: "black",
    textAlign: "center",
    padding: 1,
    zIndex: 1,
  },
  message: {
    position: "absolute",
    top: 50,
    left: 20,
    fontSize: 16,
    color: "black",
    textAlign: "center",
    padding: 1,
    zIndex: 1,
  },
  birthday: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: "white",
    textAlign: "center",
    padding: 1,
    zIndex: 1,
  },
  celebrant: {
    position: "absolute",
    top: "70%",
    left: "50%",
    fontSize: 12,
    color: "white",
    textAlign: "center",
    padding: 1,
    zIndex: 1,
  },
  cardImage: {
    height: "100%",
    width: "100%",
  },
  v_inputGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.85,
    padding: 8,
    zIndex: 1,
  },
  picker: {
    height: 50,
    width: 127,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#ccc',
  },
});
