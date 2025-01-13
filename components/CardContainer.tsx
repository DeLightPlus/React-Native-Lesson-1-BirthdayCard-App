// CardContainer.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CardData } from "./Types";

interface CardContainerProps {
  cardData: CardData;
}

const CardContainer: React.FC<CardContainerProps> = ({ cardData }) => {
  const { title, celebrant, message, birthday, backgroundImage } = cardData;

  return (
    <View style={styles.container}>
      {/* Handle background image */}
      <View style={styles.cardContainer}>
        <Image source={{ uri: backgroundImage }} style={styles.backgroundImage} />
        {/* Title */}
        <Text
          style={{
            fontFamily: title.fontFamily,
            fontStyle: title.fontStyle,
            fontWeight: title.fontWeight,
            color: title.fontColor,
            fontSize: title.fontSize,
            position: "absolute",
            left: title.positionX,
            top: title.positionY,
            transform: [{ rotate: `${title.rotation}deg` }],
          }}
        >
          {title.text || "Default Title"}
        </Text>

        {/* Celebrant */}
        <Text
          style={{
            fontFamily: celebrant.fontFamily,
            fontStyle: celebrant.fontStyle,
            color: celebrant.fontColor,
            fontSize: celebrant.fontSize,
            position: "absolute",
            left: celebrant.positionX,
            top: celebrant.positionY,
            transform: [{ rotate: `${celebrant.rotation}deg` }],
          }}
        >
          {celebrant.text || "Celebrant Name"}
        </Text>

        {/* Message */}
        <Text
          style={{
            fontFamily: message.fontFamily,
            fontStyle: message.fontStyle,
            color: message.fontColor,
            fontSize: message.fontSize,
            position: "absolute",
            left: message.positionX,
            top: message.positionY,
            transform: [{ rotate: `${message.rotation}deg` }],
          }}
        >
          {message.text || "Message"}
        </Text>

        {/* Birthday */}
        <Text
          style={{
            fontFamily: birthday.fontFamily,
            fontStyle: birthday.fontStyle,
            color: birthday.fontColor,
            fontSize: birthday.fontSize,
            position: "absolute",
            left: birthday.positionX,
            top: birthday.positionY,
            transform: [{ rotate: `${birthday.rotation}deg` }],
          }}
        >
          {birthday.text || "Birthday Date"}
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 0,
    width: "100%",
    height: 300, // Adjust height as needed
  },
  cardContainer:{
    backgroundColor:"lightblue",
    flex:1,
    position: "fixed", 
    top:0,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
});

export default CardContainer;
