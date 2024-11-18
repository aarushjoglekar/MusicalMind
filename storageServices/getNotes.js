import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function getNotes() {
  const notes = await AsyncStorage.getItem("Notes")
  console.log(notes)
  if (!notes) {
    AsyncStorage.setItem("Notes", "0")
    return 0;
  }
  console.log(JSON.parse(notes))
  return JSON.parse(notes);
}
