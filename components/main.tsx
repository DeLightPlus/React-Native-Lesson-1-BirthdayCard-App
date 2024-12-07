
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Pressable, ScrollView, ActivityIndicator, View } from "react-native";
import { Picker } from '@react-native-picker/picker';

import CardContainer from "./CardContainer";
import { StatusBar } from "expo-status-bar";

import { presets } from "../app/presets.js";

export default function Main() { 

  const [cardData, setCardData] = useState(presets[0]);

  const fontFamilies = [
    "Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Roboto", "serif", "sans-serif"
  ];

  const handleFontChange = (key, value) => {
    setCardData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handlePositionChange = (positionKey, value) => {
    setCardData((prevData) => ({
      ...prevData,
      [positionKey]: {
        ...prevData[positionKey],
        ...value,
      },
    }));
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" style="auto" />
      
      <CardContainer
        presets={presets}
        cardData={cardData}
        setCardData={setCardData}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Title */}
        <Text style={styles.header}>Title</Text>
        <TextInput
          placeholder="Card Title"
          style={styles.input}
          value={cardData.title}
          onChangeText={(text) => handleFontChange("title", text)}
        />

        {/* Title Font Settings */}
        {/* <Text style={styles.header2}>Title Font Settings</Text> */}
        <View style={styles.v_inputGroup}>
          <View style={styles.h_Group}>
            <Picker
              selectedValue={cardData.titleFontFamily}
              style={styles.picker}
              onValueChange={(itemValue) => handleFontChange("titleFontFamily", itemValue)}
            >
              {fontFamilies.map((font, index) => (
                <Picker.Item key={index} label={font} value={font} />
              ))}
            </Picker>

            <Text>Style</Text>
            <Picker
              selectedValue={cardData.titleFontStyle}
              style={styles.picker}
              onValueChange={(itemValue) => handleFontChange("titleFontStyle", itemValue)}
            >
              <Picker.Item label="Normal" value="normal" />
              <Picker.Item label="Bold" value="bold" />
              <Picker.Item label="Italic" value="italic" />
              <Picker.Item label="Bold Italic" value="bold italic" />
            </Picker>

            <Text>Color</Text>
            <TextInput
              placeholder="Font Color (Hex)"
              style={styles.color_input}
              value={cardData.titleFontColor}
              onChangeText={(text) => handleFontChange("titleFontColor", text)}
            />
          </View>

          {/* Custom Font Family */}
          <TextInput
            placeholder="Or Type Custom Font"
            style={styles.input}
            value={cardData.titleFontFamily}
            onChangeText={(text) => handleFontChange("titleFontFamily", text)}
          />

          {/* Font Size */}
          <View style={styles.h_Group}>
            <Text>Font Size:</Text>
            <TextInput
              placeholder="Font Size"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.titleFontSize)}
              onChangeText={(text) => handleFontChange("titleFontSize", parseInt(text) || 20)}
            />

            <Text>PosX:</Text>
            <TextInput
              placeholder="PosX"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.titlePosition.left)}
              onChangeText={(text) => handlePositionChange('titlePosition', { left: parseInt(text) || 20 })}
            />

            <Text>PosY:</Text>
            <TextInput
              placeholder="PosY"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.titlePosition.top)}
              onChangeText={(text) => handlePositionChange('titlePosition', { top: parseInt(text) || 50 })}
            />
          </View>
        </View>

        {/* Celebrant Name */}
        <Text style={styles.header}>Celebrant</Text>
        <TextInput
          placeholder="Name of Celebrant"
          style={styles.input}
          value={cardData.celebrant}
          onChangeText={(text) => handleFontChange("celebrant", text)}
        />

        {/* Celebrant Font Settings */}
        {/* <Text style={styles.header2}>Celebrant Font Settings</Text> */}
        <View style={styles.v_inputGroup}>
          <View style={styles.h_Group}>
            <Picker
              selectedValue={cardData.celebrantFontFamily}
              style={styles.picker}
              onValueChange={(itemValue) => handleFontChange("celebrantFontFamily", itemValue)}
            >
              {fontFamilies.map((font, index) => (
                <Picker.Item key={index} label={font} value={font} />
              ))}
            </Picker>

            <Text>Style</Text>
            <Picker
              selectedValue={cardData.celebrantFontStyle}
              style={styles.picker}
              onValueChange={(itemValue) => handleFontChange("celebrantFontStyle", itemValue)}
            >
              <Picker.Item label="Normal" value="normal" />
              <Picker.Item label="Bold" value="bold" />
              <Picker.Item label="Italic" value="italic" />
              <Picker.Item label="Bold Italic" value="bold italic" />
            </Picker>

            <Text>Color</Text>
            <TextInput
              placeholder="Font Color (Hex)"
              style={styles.color_input}
              value={cardData.celebrantFontColor}
              onChangeText={(text) => handleFontChange("celebrantFontColor", text)}
            />
          </View>

          {/* Custom Font Family */}
          <TextInput
            placeholder="Or Type Custom Font"
            style={styles.input}
            value={cardData.celebrantFontFamily}
            onChangeText={(text) => handleFontChange("celebrantFontFamily", text)}
          />

          {/* Font Size */}
          <View style={styles.h_Group}>
            <Text>Font Size:</Text>
            <TextInput
              placeholder="Font Size"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.celebrantFontSize)}
              onChangeText={(text) => handleFontChange("celebrantFontSize", parseInt(text) || 20)}
            />

            <Text>PosX:</Text>
            <TextInput
              placeholder="PosX"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.celebrantPosition.left)}
              onChangeText={(text) => handlePositionChange('celebrantPosition', { left: parseInt(text) || 20 })}
            />

            <Text>PosY:</Text>
            <TextInput
              placeholder="PosY"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.celebrantPosition.top)}
              onChangeText={(text) => handlePositionChange('celebrantPosition', { top: parseInt(text) || 50 })}
            />
          </View>
        </View>

        {/* Message */}
        <Text style={styles.header}>Message</Text>
        <TextInput
          placeholder="Enter your message"
          style={styles.input}
          value={cardData.message}
          onChangeText={(text) => handleFontChange("message", text)}
        />

        {/* Message Font Settings */}
        {/* <Text style={styles.header2}>Message Font Settings</Text> */}
        <View style={styles.v_inputGroup}>
          <View style={styles.h_Group}>
            <Picker
              selectedValue={cardData.msgFontFamily}
              style={styles.picker}
              onValueChange={(itemValue) => handleFontChange("msgFontFamily", itemValue)}
            >
              {fontFamilies.map((font, index) => (
                <Picker.Item key={index} label={font} value={font} />
              ))}
            </Picker>

            <Text>Style</Text>
            <Picker
              selectedValue={cardData.msgFontStyle}
              style={styles.picker}
              onValueChange={(itemValue) => handleFontChange("msgFontStyle", itemValue)}
            >
              <Picker.Item label="Normal" value="normal" />
              <Picker.Item label="Bold" value="bold" />
              <Picker.Item label="Italic" value="italic" />
              <Picker.Item label="Bold Italic" value="bold italic" />
            </Picker>

            <Text>Color</Text>
            <TextInput
              placeholder="Font Color (Hex)"
              style={styles.color_input}
              value={cardData.msgFontColor}
              onChangeText={(text) => handleFontChange("msgFontColor", text)}
            />
          </View>

          {/* Custom Font Family */}
          <TextInput
            placeholder="Or Type Custom Font"
            style={styles.input}
            value={cardData.msgFontFamily}
            onChangeText={(text) => handleFontChange("msgFontFamily", text)}
          />

          {/* Font Size */}
          <View style={styles.h_Group}>
            <Text>Font Size:</Text>
            <TextInput
              placeholder="Font Size"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.msgFontSize)}
              onChangeText={(text) => handleFontChange("msgFontSize", parseInt(text) || 20)}
            />

            <Text>PosX:</Text>
            <TextInput
              placeholder="PosX"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.messagePosition.left)}
              onChangeText={(text) => handlePositionChange('messagePosition', { left: parseInt(text) || 20 })}
            />

            <Text>PosY:</Text>
            <TextInput
              placeholder="PosY"
              style={styles.num_input}
              keyboardType="numeric"
              value={String(cardData.messagePosition.top)}
              onChangeText={(text) => handlePositionChange('messagePosition', { top: parseInt(text) || 150 })}
            />
          </View>
        </View>

        {/* Birthday */}
        <Text style={styles.header}>Birthday</Text>
        <TextInput
          placeholder="Birthday"
          style={styles.input}
          value={cardData.birthday}
          onChangeText={(text) => handleFontChange("birthday", text)}
        />

        {/* Continue Button */}
        <Pressable style={styles.button} onPress={() => alert("Card details updated!")}>
          <Text style={styles.buttonText}>
            CONTINUE
            <ActivityIndicator color="pink" size={15} />
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
    marginTop: 16,
    padding: 16,
  },
  v_inputGroup: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "white",
    opacity: 0.85,
    padding: 8,
    boxShadow:"grey 0 5px 8px 1px"
  },
  h_Group: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  input: {
    padding: 10,
    margin: 8,
    marginTop: 0,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  num_input: {
    width: 36,
    padding: 2,
    marginTop: 0,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    backgroundColor: "white",
    textAlign: "center",
  },
  color_input: {
    width: 64,
  },
  picker: {
    height: 32,
    width: "100%",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "uppercase",
  },
  header: {
    fontSize: 16,
    fontWeight: "700",
    margin: 8,
  },
  header2: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
});
