import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontData } from "./Types"; // Adjust path as needed
import { getAvailableFontFamilies, getFontFamily } from "@/utils/fontfamilies";

interface FontSettingsProps {
  title: string;
  fontData: FontData;
  component: "title" | "message" | "celebrant" | "birthday";
  handleFontChange: (component: "title" | "message" | "celebrant" | "birthday", key: keyof FontData, value: any) => void;
}

const FontSettings: React.FC<FontSettingsProps> = ({
  title,
  fontData,
  component,
  handleFontChange,
}) => {
  const { fontFamily, fontSize, fontColor, fontStyle, fontWeight, positionX, positionY, rotation } = fontData;

  const fontFamilies = getAvailableFontFamilies(); // Fetch available font families

  const handleFontFamilyChange = (newFontFamily: string) => {
    const validFontFamily = getFontFamily(newFontFamily); // Validate and get the font family
    handleFontChange(component, 'fontFamily', validFontFamily);
  };

  const handleBoldToggle = () => {
    const newFontWeight = fontWeight === "bold" ? "normal" : "bold"; // Toggle between 'bold' and 'normal'
    handleFontChange(component, "fontWeight", newFontWeight);
  };

  const handleItalicToggle = () => {
    const newFontStyle = fontStyle === "italic" ? "" : "italic"; // Toggle between 'italic' and ''
    handleFontChange(component, "fontStyle", newFontStyle);
  };

  

  return (
    <View style={styles.settings_container}>
      <TextInput
        value={fontData.text}
        onChangeText={(newText) => handleFontChange("title", "text", newText)}
        placeholder="Edit Title"
        style={styles.titleInput}
      />

      <Text>{title}</Text>
      
      {/* Font Family Dropdown */}
      <Picker
        selectedValue={fontFamily}
        style={styles.fontPicker}
        onValueChange={handleFontFamilyChange}
      >
        {fontFamilies.map((font, index) => (
          <Picker.Item key={index} label={font} value={font} />
        ))}
      </Picker>

      {/* Font Settings */}
      <View style={styles.container}>
        {/* Font Size Input */}
        <TextInput
          style={styles.fontSizeInput}
          keyboardType="numeric"
          value={String(fontSize)}
          onChangeText={(text) => handleFontChange(component, "fontSize", parseInt(text) || 12)}
          placeholder="Size"
        />

        {/* Font Style Buttons */}
        <View style={styles.styleButtons}>
          <TouchableOpacity
            style={[styles.styleButton, fontStyle.includes("bold") && styles.activeStyleButton]}
            onPress={handleBoldToggle}
          >
            <Text style={styles.styleButtonText}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.styleButton, fontStyle.includes("italic") && styles.activeStyleButton]}
            onPress={handleItalicToggle}
          >
            <Text style={styles.styleButtonText}>I</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.styleButton, fontStyle.includes("underline") && styles.activeStyleButton]}
            onPress={() => toggleFontStyle("underline")}
          >
            <Text style={styles.styleButtonText}>U</Text>
          </TouchableOpacity>
        </View>

        {/* Font Color Input */}
        <TextInput
          style={styles.colorInput}
          placeholder="Color (Hex)"
          value={fontColor}
          onChangeText={(text) => handleFontChange(component, "fontColor", text)}
        />
      </View>

      {/* Position and Rotation Settings */}
      <View style={styles.container}>
        {/* Position X */}
        <Text>↔</Text>
        <TextInput
          style={styles.positionInput}
          keyboardType="numeric"
          value={String(positionX)}
          onChangeText={(text) => handleFontChange(component, "positionX", parseInt(text) || 0)}
          placeholder="X Pos"
        />

        {/* Position Y */}
        <Text>↕</Text>
        <TextInput
          style={styles.positionInput}
          keyboardType="numeric"
          value={String(positionY)}
          onChangeText={(text) => handleFontChange(component, "positionY", parseInt(text) || 0)}
          placeholder="Y Pos"
        />

        {/* Rotation */}
        <Text>↻</Text>
        <TextInput
          style={styles.positionInput}
          keyboardType="numeric"
          value={String(rotation)}
          onChangeText={(text) => handleFontChange(component, "rotation", parseInt(text) || 0)}
          placeholder="Rotate (°)"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settings_container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  titleInput:{
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    textAlign: "center",
  },
  fontPicker: {
    width: "100%",
    // height: 40,
    backgroundColor: "lightgrey",
  },
  fontSizeInput: {
    // flex: 1,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 5,
    margin: 5,
    textAlign: "center",
  },
  styleButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
  },
  styleButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
    backgroundColor: "#fff",
  },
  activeStyleButton: {
    backgroundColor: "#ddd",
  },
  styleButtonText: {
    fontWeight: "bold",
  },
  colorInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginLeft: 5,
  },
  positionInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    textAlign: "center",
  },
});

export default FontSettings;
