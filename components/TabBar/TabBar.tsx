import { View, StyleSheet, Keyboard } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarBtn from './TabBarBtn';
import { icon } from '@/utils/constants';
import { useEffect, useState } from 'react';


export function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {
  
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    // Cleanup listeners on unmount
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
    {  
      !keyboardVisible && (
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabBarBtn 
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routerName={route.name}
              icon={icon[route.name]}
              label={label}
            />          
          );
        })}
      </View>)
    }
    </>
  );
}


const styles = StyleSheet.create({
    tabBar: {
        position:"absolute",
        bottom:32,
        left:0,
        width:256,
        height:48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:64,
        paddingVertical: 8,        
        borderRadius: 35,
        shadowColor:"black",
        shadowOffset: { width: 0, height: 8 },  
        shadowOpacity: 0.1,
        shadowRadius: 4,
        backgroundColor:"#fff",
        elevation: 5,

    }
  })