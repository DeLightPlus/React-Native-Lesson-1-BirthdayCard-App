import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { useTheme } from '@react-navigation/native';

const TabBarBtn = ({
    onPress, onLongPress, isFocused, routerName, icon, label} :
    { onPress:Function, onLongPress:Function, isFocused:boolean, routerName:string, icon:string, label:string }
) => {

    // const { colors } = useTheme();
    return (
        <Pressable       
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
        >
            <Text>{icon}</Text>
            <Text style={{ color: isFocused ? "black" : "grey" }}>
            {label}
            </Text>
    </Pressable>
    )
}

export default TabBarBtn


const styles = StyleSheet.create({
    
    tabBarItem: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        gap: 4,
    }
  })