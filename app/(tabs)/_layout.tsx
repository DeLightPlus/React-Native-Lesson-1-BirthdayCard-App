import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar/TabBar'

export default function Tab_Layout() {
  return (
    <Tabs tabBar={props => < TabBar {...props} /> }>
        <Tabs.Screen name="index" options={{title:"Home"}} />
        <Tabs.Screen name="create_card" options={{title:"Create"}} />
        <Tabs.Screen name="explore" options={{title:"Explore"}} />
    </Tabs>
  )
}