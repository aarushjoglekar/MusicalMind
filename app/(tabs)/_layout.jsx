import React from 'react'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function AppLayout() {

  var color = "#383d3d"
  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarStyle: styles.tabBar, 
      tabBarLabelStyle: {fontSize: RFPercentage(1.4)}
    }}>
      <Tabs.Screen name="keys" options={{ title: 'Keys', tabBarInactiveTintColor: color }} />
      <Tabs.Screen name="scales" options={{ title: 'Scales', tabBarInactiveTintColor: color }} />
      <Tabs.Screen name="home" options={{ title: 'Home', tabBarInactiveTintColor: color }} />
      <Tabs.Screen name="intervals" options={{ title: 'Intervals', tabBarInactiveTintColor: color }} />
      <Tabs.Screen name="triads" options={{ title: 'Triads', tabBarInactiveTintColor: color }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 3,
    borderColor: 'black',
  }
})