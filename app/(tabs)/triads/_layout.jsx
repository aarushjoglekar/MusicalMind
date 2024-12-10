import { Stack } from 'expo-router'

export default function ScalesLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Triads" options={{ gestureEnabled: false }} />
        <Stack.Screen name="Learn" options={{ gestureEnabled: false }} />
        <Stack.Screen name="Study" options={{ gestureEnabled: false }} />
        <Stack.Screen name="Sprint" options={{ gestureEnabled: false }} />
        <Stack.Screen name="DisplayScore" options={{ gestureEnabled: false }} />
    </Stack>
  )
}