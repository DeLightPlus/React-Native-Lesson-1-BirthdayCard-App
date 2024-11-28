import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View, Image, ImageBackground, ActivityIndicator, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';

export default function RootLayout() {

  const cover1 = "https://img.freepik.com/free-photo/happy-birthday-soccer-themed_23-2149695991.jpg?t=st=1732789631~exp=1732793231~hmac=162534b793a82cdda110a15efcd03bb131207c914e5d3d34849560eaccbd2ec3&w=1380";
  const cover2 = "https://img.freepik.com/free-psd/birthday-sales-blank-banner-background_23-2150810566.jpg?t=st=1732790081~exp=1732793681~hmac=bc9a6db2d65524f433137992472a57e36f309ce9d6433c030aa0dcf1887f2b03&w=1380";

  const [title, setTitle] = useState('Happy Birthday!');
  const [coverImage, setCoverImage] = useState(cover1);
  const [editorContent, setEditorContent] = useState('');

  const uploadImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setCoverImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" style="auto" />

      <View style={styles.cardContainer}>
        <View style={styles.cardOption}>
          <Pressable onPress={() => { alert("Attempt change to single/folded card"); }}>
            <Text>🖼 Single Card</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}> {title} </Text>
          <ImageBackground style={styles.cardImage} resizeMode="cover" source={{ uri: coverImage }} />
        </View>

        <View style={styles.cardOption}>
          <Pressable onPress={() => { alert("Attempt change to presets"); }}>
            <Text>🎛🎚 Presets</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.inputGroup}>
          <View style={styles.inputOption}>
            <Pressable onPress={uploadImage}>
              <Text>📷 Choose Cover</Text>
            </Pressable>
          </View>

          <View style={styles.inputOption}>
            <Pressable onPress={() => { alert("Attempt change to landscape"); }}>
              <Text>🖼 Portrait</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            placeholder="Card Title"
            placeholderTextColor="grey"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Celebrant</Text>
          <TextInput
            placeholder="Name of Celebrant"
            placeholderTextColor="grey"
            style={styles.input}
            onChangeText={(text) => { console.log(text); }}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Birthday</Text>
          <TextInput
            placeholder="Celebrant's Birthday"
            placeholderTextColor="grey"
            style={styles.input}
            onChangeText={(text) => { console.log(text); }}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            placeholder="Message"
            placeholderTextColor="grey"
            style={styles.input}
            onChangeText={(text) => { console.log(text); }}
          />
        </View>

        <Pressable style={styles.button} onPress={() => { alert("hey, you actually pressed me!!"); }}>
          <Text style={styles.buttonText}>CONTINUE
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
    backgroundColor: "lightgrey",
  },

  cardContainer: {
    padding: 16,
    height: "46%",
    backgroundColor: "linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, lightblue 100%)",
  },

  cardOption: {
    marginVertical: 10,
  },

  card: {
    backgroundColor: "black",
    width: 300,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    transform: [
      { perspective: 1000 },
      { rotateX: '35deg' },
      { rotateY: '4deg' },
      { rotateZ: '-30deg' },
    ],
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

  cardImage: {
    height: 200,
    width: 300,
  },

  scrollView: {
    padding: 16,
    paddingVertical: 20,
  },

  inputGroup: {
    marginBottom: 20,
  },

  inputOption: {
    marginVertical: 10,
  },

  label: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 16,
  },

  input: {
    padding: 10,
    margin: 10,
    marginTop: 0,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
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
});
