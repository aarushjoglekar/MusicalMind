import { Stack } from 'expo-router'

export default function KeysLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Keys" options={{ gestureEnabled: false }} />
    </Stack>
  )
}