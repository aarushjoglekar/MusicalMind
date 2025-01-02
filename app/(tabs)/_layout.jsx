import React from 'react'
import { Tabs } from 'expo-router'
import { StyleSheet, useWindowDimensions } from 'react-native'

export default function AppLayout() {
  const {width, height} = useWindowDimensions();

  var color = "#383d3d"
  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarStyle: [styles.tabBar, {height: height * 0.09}]
    }}>
      <Tabs.Screen name="keys" options={{ title: 'Keys', tabBarActiveTintColor: color }} />
      <Tabs.Screen name="scales" options={{ title: 'Scales', tabBarInactiveTintColor: color }} />
      <Tabs.Screen name="home" options={{ title: 'Home', tabBarInactiveTintColor: color }} />
      <Tabs.Screen name="intervals" options={{ title: 'Intervals', tabBarInactiveTintColor: color }} />
      <Tabs.Screen name="triads" options={{ title: 'Triads', tabBarInactiveTintColor: color }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    // height: height * 0.09,
    backgroundColor: '#ffffff',
    elevation: 10,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  }
})