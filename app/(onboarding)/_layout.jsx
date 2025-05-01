import React from 'react'
import { Tabs } from 'expo-router'
import { Pressable, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Entypo from '@expo/vector-icons/Entypo';

export default function AppLayout() {
  const { width, height } = useWindowDimensions();

  var color = "#383d3d"
  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarStyle: [styles.tabBar, { height: height * 0.09 }],
      tabBarLabelStyle: { fontSize: RFPercentage(1.4) }
    }}>
      <Tabs.Screen name="keys" options={{
        title: 'Keys', tabBarInactiveTintColor: color
      }} />
      <Tabs.Screen name="scales" options={{
        title: 'Scales', tabBarInactiveTintColor: color,
        tabBarButton: (props) => (
          <Pressable
            {...props}
            onPress={() => {
            }}
          >
            {props.children}
          </Pressable>
        )
      }} />
      <Tabs.Screen name="home" options={{
        title: 'Home', tabBarInactiveTintColor: color
      }} />
      <Tabs.Screen name="intervals" options={{
        title: 'Intervals', tabBarInactiveTintColor: color,
        tabBarButton: (props) => (
          <Pressable
            {...props}
            onPress={() => {
            }}
          >
            {props.children}
          </Pressable>
        )
      }} />
      <Tabs.Screen name="triads" options={{
        title: 'Triads', tabBarInactiveTintColor: color,
        tabBarButton: (props) => (
          <Pressable
            {...props}
            onPress={() => {
            }}
          >
            {props.children}
          </Pressable>
        )
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