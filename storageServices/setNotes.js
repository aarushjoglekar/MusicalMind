import AsyncStorage from "@react-native-async-storage/async-storage"

export default async function getNotes(notes) {
  AsyncStorage.setItem("Notes", notes)
}
