import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" />
    </Stack>
  );
}
