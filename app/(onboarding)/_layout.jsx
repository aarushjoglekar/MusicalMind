import React from 'react'
import { Tabs } from 'expo-router'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function AppLayout() {
  const { width, height } = useWindowDimensions();

  var color = "#383d3d"
  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarStyle: [styles.tabBar, { height: height * 0.09 }],
      tabBarLabelStyle: { fontSize: RFPercentage(1.4) }
    }}>
      <Tabs.Screen name="home" options={{
        title: 'Home', tabBarInactiveTintColor: color
      }} />
      <Tabs.Screen name="keys" options={{
        title: 'Keys', tabBarInactiveTintColor: color
      }} />
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