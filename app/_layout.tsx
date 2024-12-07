import Main from "@/components/main";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";


export default function RootLayout() {
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  //  <Main />
  );
}

const styles = StyleSheet.create({
  main:{

  }
});
