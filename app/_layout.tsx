import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loading" />
      <Stack.Screen name="Onboarding" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}