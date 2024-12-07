import React, { useState } from 'react'
import { Tabs } from 'expo-router'

export default function AppLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarStyle:{borderTopColor: 'black', borderTopWidth:2.5}}}>
        <Tabs.Screen name="keys" options={{title: 'Keys'}}/>
        <Tabs.Screen name="scales" options={{title: 'Scales'}}/>
        <Tabs.Screen name="home" options={{title: 'Home'}}/>
        <Tabs.Screen name="intervals" options={{title: 'Intervals'}}/>
        <Tabs.Screen name="triads" options={{title: 'Triads'}}/>
    </Tabs>
  )
}