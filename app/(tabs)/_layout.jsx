import React from 'react'
import { Tabs } from 'expo-router'

export default function AppLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarStyle:{borderTopColor: 'black', borderTopWidth:2.5}}}>
        <Tabs.Screen name="keys" options={{title: 'Keys', unmountOnBlur: true}}/>
        <Tabs.Screen name="scales" options={{title: 'Scales', unmountOnBlur: true}}/>
        <Tabs.Screen name="home" options={{title: 'Home', unmountOnBlur: true}}/>
        <Tabs.Screen name="intervals" options={{title: 'Intervals', unmountOnBlur: true}}/>
        <Tabs.Screen name="triads" options={{title: 'Triads', unmountOnBlur: true}}/>
    </Tabs>
  )
}